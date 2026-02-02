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
const programCoordinatorSelect = document.getElementById('program-coordinator');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');
const closeModalBtn = document.getElementById('close-modal');
const requestIdSpan = document.getElementById('request-id');

// Section elements
const tutorSection = document.getElementById('tutor-section');
const studentsSection = document.getElementById('students-section');
const formActions = document.querySelector('.form-actions');

// Track if students section has been shown
let studentsSectionShown = false;

// State tracking
let studentCount = 0;

/**
 * Initialize the application
 */
function init() {
    // Populate dropdowns from index constants
    populateStates();
    populateProgramCoordinators();

    // Show first section with fade-in
    showSection(tutorSection);

    // Event listeners
    addStudentBtn.addEventListener('click', addStudent);
    stateSelect.addEventListener('change', handleStateChange);
    requestForm.addEventListener('submit', handleSubmit);
    requestForm.addEventListener('reset', handleReset);

    // Add listeners to tutor section fields to enable continue button
    setupTutorFieldListeners();

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
 * Setup listeners on tutor section fields to enable/disable continue button
 */
function setupTutorFieldListeners() {
    const tutorName = document.getElementById('tutor-name');
    const tutorEmail = document.getElementById('tutor-email');
    const school = document.getElementById('school');
    const otherPCName = document.getElementById('other-pc-name');
    const continueBtn = document.getElementById('continue-to-students');

    // Add input/change listeners to all tutor fields
    tutorName.addEventListener('input', checkTutorSectionComplete);
    tutorEmail.addEventListener('input', checkTutorSectionComplete);
    programCoordinatorSelect.addEventListener('change', checkTutorSectionComplete);
    school.addEventListener('input', checkTutorSectionComplete);
    stateSelect.addEventListener('change', checkTutorSectionComplete);
    otherPCName.addEventListener('input', checkTutorSectionComplete);

    // Add click listener for continue button
    continueBtn.addEventListener('click', handleContinueToStudents);
}

/**
 * Check if all tutor section fields are complete and enable/disable continue button
 */
function checkTutorSectionComplete() {
    const continueBtn = document.getElementById('continue-to-students');
    continueBtn.disabled = !validateTutorSection();
}

/**
 * Handle continue button click - show students section
 */
function handleContinueToStudents() {
    if (!validateTutorSection()) return;

    studentsSectionShown = true;

    // Show students section
    showSection(studentsSection);

    // Add first student
    addStudent();

    // Show form actions after a slight delay
    setTimeout(() => {
        formActions.style.display = 'flex';
        formActions.offsetHeight;
        formActions.classList.add('visible');
    }, 300);

    // Scroll to students section smoothly
    setTimeout(() => {
        studentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Show a section with fade-in animation
 * @param {HTMLElement} section - The section to show
 */
function showSection(section) {
    section.style.display = 'block';
    // Trigger reflow for animation
    section.offsetHeight;
    section.classList.add('visible');
}

/**
 * Hide a section
 * @param {HTMLElement} section - The section to hide
 */
function hideSection(section) {
    section.classList.remove('visible');
    section.classList.add('hidden');
}

/**
 * Validate tutor section fields
 * @returns {boolean} True if all required fields are filled
 */
function validateTutorSection() {
    const tutorName = document.getElementById('tutor-name').value.trim();
    const tutorEmail = document.getElementById('tutor-email').value.trim();
    const coordinator = programCoordinatorSelect.value;
    const school = document.getElementById('school').value.trim();
    const state = stateSelect.value;

    if (!tutorName || !tutorEmail || !coordinator || !school || !state) {
        return false;
    }

    // If "Other" is selected, check that the custom input has a value
    if (coordinator === 'other') {
        const otherPCName = document.getElementById('other-pc-name').value.trim();
        if (!otherPCName) {
            return false;
        }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(tutorEmail)) {
        return false;
    }

    return true;
}

/**
 * Populate the state dropdown from index/standards.js
 */
function populateStates() {
    US_STATES.forEach(state => {
        const option = document.createElement('option');
        option.value = state.code;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });

    // Auto-select if only one state is available
    if (US_STATES.length === 1) {
        stateSelect.value = US_STATES[0].code;
    }
}

/**
 * Populate the program coordinators dropdown from index/programcoordinators.js
 */
function populateProgramCoordinators() {
    // Check if PROGRAM_COORDINATORS is defined and has entries
    if (typeof PROGRAM_COORDINATORS !== 'undefined' && PROGRAM_COORDINATORS.length > 0) {
        PROGRAM_COORDINATORS.forEach(coordinator => {
            const option = document.createElement('option');
            option.value = coordinator.email;  // Use email as value for backend
            option.textContent = coordinator.name;  // Display name to user
            option.dataset.name = coordinator.name;  // Store name in data attribute
            programCoordinatorSelect.appendChild(option);
        });

        // Add "Other" option at the end
        const otherOption = document.createElement('option');
        otherOption.value = "other";
        otherOption.textContent = "Other";
        otherOption.dataset.name = "Other";
        programCoordinatorSelect.appendChild(otherOption);
    } else {
        // If no coordinators defined, show a message
        const option = document.createElement('option');
        option.value = "";
        option.textContent = "No coordinators configured";
        option.disabled = true;
        programCoordinatorSelect.appendChild(option);
        console.warn('No program coordinators defined in index/programcoordinators.js');
    }

    // Add event listener for "Other" option
    programCoordinatorSelect.addEventListener('change', handlePCChange);
}

/**
 * Handle Program Coordinator selection change
 */
function handlePCChange() {
    const otherContainer = document.getElementById('other-pc-container');
    const otherInput = document.getElementById('other-pc-name');

    if (programCoordinatorSelect.value === 'other') {
        otherContainer.style.display = 'block';
        otherInput.required = true;
        otherInput.focus();
    } else {
        otherContainer.style.display = 'none';
        otherInput.required = false;
        otherInput.value = '';
    }
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

    // Add material buttons event listeners
    const addMathBtn = card.querySelector('.add-material-btn.math-btn');
    const addElaBtn = card.querySelector('.add-material-btn.ela-btn');

    addMathBtn.addEventListener('click', () => {
        showSubjectSection(card, 'math');
    });

    addElaBtn.addEventListener('click', () => {
        showSubjectSection(card, 'ela');
    });

    // Remove subject buttons event listeners
    const removeMathBtn = card.querySelector('.remove-subject-btn[data-subject="math"]');
    const removeElaBtn = card.querySelector('.remove-subject-btn[data-subject="ela"]');

    removeMathBtn.addEventListener('click', () => {
        hideSubjectSection(card, 'math');
    });

    removeElaBtn.addEventListener('click', () => {
        hideSubjectSection(card, 'ela');
    });

    // Add remove student button handler
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
 * Show a subject section (Math or ELA)
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 */
function showSubjectSection(card, subject) {
    const section = card.querySelector(`.${subject}-section`);
    const addBtn = card.querySelector(`.add-material-btn.${subject}-btn`);

    section.style.display = 'block';
    addBtn.classList.add('hidden');
}

/**
 * Hide a subject section (Math or ELA)
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 */
function hideSubjectSection(card, subject) {
    const section = card.querySelector(`.${subject}-section`);
    const addBtn = card.querySelector(`.add-material-btn.${subject}-btn`);
    const gradeSelect = card.querySelector(`select[name="${subject}Grade"]`);
    const otherInput = card.querySelector(`input[name="${subject}Other"]`);
    const standardsContainer = card.querySelector(`.${subject}-standards`);

    // Reset the section
    gradeSelect.value = '';
    otherInput.value = '';
    standardsContainer.innerHTML = `<p class="empty-state">Select ${subject === 'math' ? 'a math' : 'an ELA'} grade to see available standards</p>`;

    // Hide section and show button
    section.style.display = 'none';
    addBtn.classList.remove('hidden');
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
    // Get selected coordinator's name from data attribute
    const selectedOption = programCoordinatorSelect.selectedOptions[0];
    let coordinatorName = selectedOption ? selectedOption.dataset.name || '' : '';
    let coordinatorEmail = programCoordinatorSelect.value;

    // Handle "Other" option - use the custom input value
    if (programCoordinatorSelect.value === 'other') {
        coordinatorName = document.getElementById('other-pc-name').value;
        coordinatorEmail = ''; // No email for custom coordinators
    }

    const formData = {
        requestId: generateRequestId(),
        submittedAt: new Date().toISOString(),
        tutor: {
            name: document.getElementById('tutor-name').value,
            email: document.getElementById('tutor-email').value,
            programCoordinator: {
                name: coordinatorName,
                email: coordinatorEmail
            },
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
    // Remove all students
    while (studentCount > 0) {
        const cards = studentsContainer.querySelectorAll('.student-card');
        if (cards.length > 0) {
            cards[cards.length - 1].remove();
            studentCount--;
        }
    }

    // Reset section visibility flag
    studentsSectionShown = false;

    // Reset section visibility - show only tutor section
    studentsSection.classList.remove('visible');
    studentsSection.style.display = 'none';
    formActions.classList.remove('visible');
    formActions.style.display = 'none';

    // Reset continue button
    const continueBtn = document.getElementById('continue-to-students');
    continueBtn.disabled = true;

    // Scroll to top and show tutor section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showSection(tutorSection);
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
