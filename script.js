/**
 * Material Request Form Handler
 *
 * Manages dynamic student cards, standards selection based on state/grade,
 * and form submission.
 */

// Constants
const MAX_STUDENTS = 4;
const MAX_STANDARDS_PER_SUBJECT = 4;

// DOM Elements
const requestForm = document.getElementById('request-form');
const studentsContainer = document.getElementById('students-container');
const addStudentBtn = document.getElementById('add-student-btn');
const studentTemplate = document.getElementById('student-template');
const stateSelect = document.getElementById('state');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');
const closeModalBtn = document.getElementById('close-modal');
const requestIdSpan = document.getElementById('request-id');

// State tracking
let studentCount = 0;

/**
 * Initialize the application
 */
function init() {
    // Populate state dropdown
    populateStates();

    // Add first student automatically
    addStudent();

    // Event listeners
    addStudentBtn.addEventListener('click', addStudent);
    stateSelect.addEventListener('change', handleStateChange);
    requestForm.addEventListener('submit', handleSubmit);
    requestForm.addEventListener('reset', handleReset);

    // Modal event listeners
    closeBtn.addEventListener('click', hideSuccessModal);
    closeModalBtn.addEventListener('click', hideSuccessModal);
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) hideSuccessModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            hideSuccessModal();
        }
    });

    console.log('Material Request Form initialized');
}

/**
 * Populate the state dropdown
 */
function populateStates() {
    US_STATES.forEach(state => {
        const option = document.createElement('option');
        option.value = state.code;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}

/**
 * Populate grade options in a select element
 * @param {HTMLSelectElement} select - The select element to populate
 */
function populateGrades(select) {
    GRADE_LEVELS.forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.value;
        option.textContent = grade.label;
        select.appendChild(option);
    });
}

/**
 * Add a new student card
 */
function addStudent() {
    if (studentCount >= MAX_STUDENTS) {
        return;
    }

    studentCount++;
    const studentCard = studentTemplate.content.cloneNode(true);
    const card = studentCard.querySelector('.student-card');

    // Set student index
    card.dataset.studentIndex = studentCount;
    card.querySelector('.student-number').textContent = `Student ${studentCount}`;

    // Populate grade dropdowns
    const gradeSelects = card.querySelectorAll('select[name="currentGrade"], select[name="mathGrade"], select[name="elaGrade"]');
    gradeSelects.forEach(select => populateGrades(select));

    // Add event listeners for grade changes
    const mathGradeSelect = card.querySelector('select[name="mathGrade"]');
    const elaGradeSelect = card.querySelector('select[name="elaGrade"]');

    mathGradeSelect.addEventListener('change', (e) => {
        handleGradeChange(card, 'math', e.target.value);
    });

    elaGradeSelect.addEventListener('change', (e) => {
        handleGradeChange(card, 'ela', e.target.value);
    });

    // Add remove button handler
    const removeBtn = card.querySelector('.remove-student-btn');
    removeBtn.addEventListener('click', () => removeStudent(card));

    // Hide remove button if it's the only student
    if (studentCount === 1) {
        removeBtn.style.display = 'none';
    }

    studentsContainer.appendChild(studentCard);
    updateAddButton();
    updateRemoveButtons();
}

/**
 * Remove a student card
 * @param {HTMLElement} card - The student card to remove
 */
function removeStudent(card) {
    if (studentCount <= 1) return;

    card.remove();
    studentCount--;

    // Renumber remaining students
    const cards = studentsContainer.querySelectorAll('.student-card');
    cards.forEach((c, index) => {
        c.dataset.studentIndex = index + 1;
        c.querySelector('.student-number').textContent = `Student ${index + 1}`;
    });

    updateAddButton();
    updateRemoveButtons();
}

/**
 * Update the add student button state
 */
function updateAddButton() {
    addStudentBtn.disabled = studentCount >= MAX_STUDENTS;
    if (studentCount >= MAX_STUDENTS) {
        addStudentBtn.innerHTML = '<span>Maximum students reached</span>';
    } else {
        addStudentBtn.innerHTML = '<span>+</span> Add Another Student';
    }
}

/**
 * Update visibility of remove buttons
 */
function updateRemoveButtons() {
    const cards = studentsContainer.querySelectorAll('.student-card');
    cards.forEach(card => {
        const removeBtn = card.querySelector('.remove-student-btn');
        removeBtn.style.display = studentCount > 1 ? 'block' : 'none';
    });
}

/**
 * Handle state change - refresh standards for all students
 */
function handleStateChange() {
    const cards = studentsContainer.querySelectorAll('.student-card');
    cards.forEach(card => {
        const mathGrade = card.querySelector('select[name="mathGrade"]').value;
        const elaGrade = card.querySelector('select[name="elaGrade"]').value;

        if (mathGrade) handleGradeChange(card, 'math', mathGrade);
        if (elaGrade) handleGradeChange(card, 'ela', elaGrade);
    });
}

/**
 * Handle grade selection change - populate standards
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 * @param {string} grade - The selected grade
 */
function handleGradeChange(card, subject, grade) {
    const state = stateSelect.value;
    const container = card.querySelector(`.${subject}-standards`);
    const noteElement = card.querySelector(`.${subject}-standards-note`);

    if (!state) {
        container.innerHTML = '<p class="empty-state">Please select a state first</p>';
        noteElement.textContent = 'Select up to 4 standards';
        return;
    }

    if (!grade) {
        container.innerHTML = `<p class="empty-state">Select ${subject === 'math' ? 'a math' : 'an ELA'} grade to see available standards</p>`;
        noteElement.textContent = 'Select up to 4 standards';
        return;
    }

    const standards = getStandards(state, subject, grade);
    const framework = getStandardsFramework(state);

    if (standards.length === 0) {
        container.innerHTML = `<p class="empty-state">No standards found for this grade level</p>`;
        noteElement.textContent = 'Select up to 4 standards';
        return;
    }

    // Build standards checkboxes
    container.innerHTML = standards.map((standard, index) => {
        const uniqueId = `${subject}-${card.dataset.studentIndex}-${index}`;
        return `
            <div class="standard-item">
                <input type="checkbox"
                       id="${uniqueId}"
                       name="${subject}Standards"
                       value="${standard.code}"
                       data-desc="${standard.desc}">
                <label for="${uniqueId}">
                    <strong>${standard.code}</strong>: ${standard.desc}
                </label>
            </div>
        `;
    }).join('');

    // Add change listeners to enforce max selection
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => enforceMaxStandards(container, noteElement));
    });

    noteElement.textContent = `Select up to 4 standards (${framework})`;
}

/**
 * Enforce maximum standards selection
 * @param {HTMLElement} container - The standards container
 * @param {HTMLElement} noteElement - The note element to update
 */
function enforceMaxStandards(container, noteElement) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const checkedCount = container.querySelectorAll('input[type="checkbox"]:checked').length;

    checkboxes.forEach(cb => {
        const item = cb.closest('.standard-item');
        if (checkedCount >= MAX_STANDARDS_PER_SUBJECT && !cb.checked) {
            item.classList.add('disabled');
            cb.disabled = true;
        } else {
            item.classList.remove('disabled');
            cb.disabled = false;
        }
    });

    // Update note
    if (checkedCount >= MAX_STANDARDS_PER_SUBJECT) {
        noteElement.innerHTML = `<span class="max-reached">Maximum ${MAX_STANDARDS_PER_SUBJECT} standards selected</span>`;
    } else {
        const framework = getStandardsFramework(stateSelect.value);
        noteElement.textContent = `${checkedCount}/${MAX_STANDARDS_PER_SUBJECT} standards selected (${framework})`;
    }
}

/**
 * Generate a unique request ID
 * @returns {string} A unique request ID
 */
function generateRequestId() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 6);
    return `MR-${timestamp}-${randomPart}`.toUpperCase();
}

/**
 * Collect form data
 * @returns {Object} The complete form data
 */
function collectFormData() {
    const formData = {
        requestId: generateRequestId(),
        submittedAt: new Date().toISOString(),
        tutor: {
            name: document.getElementById('tutor-name').value,
            email: document.getElementById('tutor-email').value,
            coordinator: document.getElementById('coordinator').value,
            school: document.getElementById('school').value,
            state: stateSelect.value
        },
        students: []
    };

    const cards = studentsContainer.querySelectorAll('.student-card');
    cards.forEach((card, index) => {
        const studentData = {
            index: index + 1,
            name: card.querySelector('input[name="studentName"]').value,
            currentGrade: card.querySelector('select[name="currentGrade"]').value,
            math: {
                requestGrade: card.querySelector('select[name="mathGrade"]').value,
                standards: getSelectedStandards(card, 'math'),
                other: card.querySelector('input[name="mathOther"]').value
            },
            ela: {
                requestGrade: card.querySelector('select[name="elaGrade"]').value,
                standards: getSelectedStandards(card, 'ela'),
                other: card.querySelector('input[name="elaOther"]').value
            },
            notes: card.querySelector('textarea[name="studentNotes"]').value
        };
        formData.students.push(studentData);
    });

    return formData;
}

/**
 * Get selected standards from a student card
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 * @returns {Array} Array of selected standards
 */
function getSelectedStandards(card, subject) {
    const container = card.querySelector(`.${subject}-standards`);
    const checked = container.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checked).map(cb => ({
        code: cb.value,
        description: cb.dataset.desc
    }));
}

/**
 * Handle form submission
 * @param {Event} event - The submit event
 */
async function handleSubmit(event) {
    event.preventDefault();

    const formData = collectFormData();

    // Log to console (for development)
    console.log('Form submitted:', formData);

    // TODO: Add your backend integration here
    // Example:
    // try {
    //     const response = await fetch('/api/requests', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     });
    //     if (!response.ok) throw new Error('Submission failed');
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('Failed to submit request. Please try again.');
    //     return;
    // }

    // Save to localStorage
    saveToLocalStorage(formData);

    // Show success modal
    showSuccessModal(formData.requestId);

    // Reset form
    requestForm.reset();
    handleReset();
}

/**
 * Handle form reset
 */
function handleReset() {
    // Remove all students except one
    while (studentCount > 0) {
        const cards = studentsContainer.querySelectorAll('.student-card');
        if (cards.length > 0) {
            cards[cards.length - 1].remove();
            studentCount--;
        }
    }

    // Add one student back
    addStudent();
}

/**
 * Save request to localStorage
 * @param {Object} data - The form data to save
 */
function saveToLocalStorage(data) {
    try {
        const existingRequests = JSON.parse(localStorage.getItem('materialRequests') || '[]');
        existingRequests.push(data);
        localStorage.setItem('materialRequests', JSON.stringify(existingRequests));
        console.log('Request saved to localStorage');
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
}

/**
 * Get all saved requests from localStorage
 * @returns {Array} Array of saved requests
 */
function getSavedRequests() {
    try {
        return JSON.parse(localStorage.getItem('materialRequests') || '[]');
    } catch (error) {
        console.warn('Could not read from localStorage:', error);
        return [];
    }
}

/**
 * Show the success modal
 * @param {string} requestId - The generated request ID
 */
function showSuccessModal(requestId) {
    requestIdSpan.textContent = requestId;
    successModal.classList.add('active');
}

/**
 * Hide the success modal
 */
function hideSuccessModal() {
    successModal.classList.remove('active');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
