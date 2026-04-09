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
    card.querySelector('.student-number').textContent = `Student/Group ${studentCount}`;

    // Populate grade dropdowns
    const gradeSelects = card.querySelectorAll('select[name="currentGrade"], select[name="mathGrade"], select[name="elaGrade"]');
    gradeSelects.forEach(select => populateGrades(select));

    // Add event listeners for grade changes (state-standard pane only)
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

    // Request type radio listeners
    ['math', 'ela'].forEach(subject => {
        const radios = card.querySelectorAll(`input[name="${subject}RequestType"]`);
        radios.forEach(radio => {
            radio.addEventListener('change', () => handleRequestTypeChange(card, subject, radio.value));
        });

        // Not-found checkbox
        const notFoundCb = card.querySelector(`input[name="${subject}NotFound"]`);
        const notFoundExtra = notFoundCb.closest('.not-found-group').querySelector('.not-found-extra');
        notFoundCb.addEventListener('change', () => {
            notFoundExtra.style.display = notFoundCb.checked ? 'block' : 'none';
        });
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

    // Reset radio buttons
    const radios = section.querySelectorAll(`input[name="${subject}RequestType"]`);
    radios.forEach(r => r.checked = false);

    // Hide all panes
    section.querySelectorAll('.request-type-pane').forEach(p => p.style.display = 'none');

    // Reset grade select
    const gradeSelect = section.querySelector(`select[name="${subject}Grade"]`);
    if (gradeSelect) gradeSelect.value = '';

    // Reset standards container
    const standardsContainer = section.querySelector(`.${subject}-standards`);
    if (standardsContainer) {
        standardsContainer.innerHTML = `<p class="empty-state">Select ${subject === 'math' ? 'a math' : 'an ELA'} grade to see available standards/benchmarks</p>`;
    }
    const labelEl = section.querySelector(`.${subject}-standards-label`);
    if (labelEl) labelEl.textContent = 'Select Materials (max 4)';

    // Reset booster band
    const boosterSelect = section.querySelector(`select[name="${subject}BoosterBand"]`);
    if (boosterSelect) boosterSelect.value = '';

    // Reset code/page pairs
    section.querySelectorAll(`input[name="${subject}Code[]"], input[name="${subject}Page[]"]`).forEach(i => i.value = '');

    // Reset not-found
    const notFoundCb = section.querySelector(`input[name="${subject}NotFound"]`);
    if (notFoundCb) {
        notFoundCb.checked = false;
        const extra = notFoundCb.closest('.not-found-group').querySelector('.not-found-extra');
        if (extra) extra.style.display = 'none';
    }
    const notFoundNote = section.querySelector(`textarea[name="${subject}NotFoundNote"]`);
    if (notFoundNote) notFoundNote.value = '';

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
        c.querySelector('.student-number').textContent = `Student/Group ${index + 1}`;
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
        addStudentBtn.innerHTML = '<span>Maximum students/groups reached</span>';
    } else {
        addStudentBtn.innerHTML = '<span>+</span> Add Another Student/Group';
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
 * Handle state change - refresh standards for all students using state-standard pane
 */
function handleStateChange() {
    const cards = studentsContainer.querySelectorAll('.student-card');
    cards.forEach(card => {
        ['math', 'ela'].forEach(subject => {
            const activeRadio = card.querySelector(`input[name="${subject}RequestType"]:checked`);
            if (activeRadio && activeRadio.value === 'state-standard') {
                const gradeSelect = card.querySelector(`select[name="${subject}Grade"]`);
                if (gradeSelect && gradeSelect.value) {
                    handleGradeChange(card, subject, gradeSelect.value);
                }
            }
        });
    });
}

/**
 * Handle request type radio change - show the appropriate pane
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 * @param {string} type - 'code-page' | 'state-standard' | 'booster'
 */
function handleRequestTypeChange(card, subject, type) {
    // Hide all panes for this subject
    const section = card.querySelector(`.${subject}-section`);
    section.querySelectorAll('.request-type-pane').forEach(p => p.style.display = 'none');

    // Show the selected pane
    const paneClass = `${subject}-pane-${type}`;
    const pane = section.querySelector(`.${paneClass}`);
    if (pane) pane.style.display = 'block';
}

/**
 * Handle grade selection change - populate standards/skills
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
        container.classList.remove('has-type-toggle');
        noteElement.textContent = 'Select up to 4 items';
        return;
    }

    if (!grade) {
        container.innerHTML = `<p class="empty-state">Select ${subject === 'math' ? 'a math' : 'an ELA'} grade to see available options</p>`;
        container.classList.remove('has-type-toggle');
        noteElement.textContent = 'Select up to 4 items';
        return;
    }

    const data = getStandardsData(state, subject, grade);
    const framework = getStandardsFramework(state);

    // State Standard pane always shows standards only (no skills toggle)
    container.classList.remove('has-type-toggle');

    let items = [];
    if (data.type === "both") {
        items = data.standards || [];
    } else if (data.type === "standards") {
        items = data.items || [];
    } else {
        items = [];
    }

    if (items.length === 0) {
        container.innerHTML = `<p class="empty-state">No standards/benchmarks found for this grade level</p>`;
        noteElement.textContent = `Select up to 4 standards/benchmarks`;
        return;
    }

    renderItemsInto(container, noteElement, items, true, card, subject, framework);
}

/**
 * Switch between Skills and Standards when a grade has both
 * @param {HTMLElement} button - The toggle button clicked
 */
function switchStandardsType(button) {
    const toggleGroup = button.closest('.type-toggle-group');
    const container = button.closest('.has-type-toggle');
    const type = button.dataset.type;

    // Update active button
    toggleGroup.querySelectorAll('.type-toggle-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Retrieve stored data
    const bothData = container._bothData;
    const items = type === 'skills' ? bothData.skills : bothData.standards;
    const isStandards = type === 'standards';

    // Determine subject from container class
    const subject = container.classList.contains('math-standards') ? 'math' : 'ela';
    const card = container.closest('.student-card');
    const noteElement = card.querySelector(`.${subject}-standards-note`);

    // Re-render items in the inner list
    const itemsList = container.querySelector('.items-list');
    renderItemsInto(itemsList, noteElement, items, isStandards, card, subject, bothData.framework);
}

/**
 * Render skill or standard checkboxes into a container element
 * @param {HTMLElement} itemsContainer - Element to render into
 * @param {HTMLElement} noteElement - The note/count element below
 * @param {Array} items - Array of skill or standard objects
 * @param {boolean} isStandards - True for standards (code+desc), false for skills (name)
 * @param {HTMLElement} card - The student card
 * @param {string} subject - 'math' or 'ela'
 * @param {string} framework - Framework name (e.g. "FL Standards")
 */
function renderItemsInto(itemsContainer, noteElement, items, isStandards, card, subject, framework) {
    const labelEl = card.querySelector(`.${subject}-standards-label`);

    if (items.length === 0) {
        itemsContainer.innerHTML = `<p class="empty-state">No ${isStandards ? 'standards/benchmarks' : 'skills'} found for this grade level</p>`;
        noteElement.textContent = `Select up to 4 ${isStandards ? 'standards/benchmarks' : 'skills'}`;
        if (labelEl) labelEl.textContent = `Select ${isStandards ? 'Standards/Benchmarks' : 'Skills'} (max 4)`;
        return;
    }

    if (labelEl) labelEl.textContent = `Select ${isStandards ? 'Standards/Benchmarks' : 'Skills'} (max 4)`;

    const studentIndex = card.dataset.studentIndex;

    if (isStandards) {
        itemsContainer.innerHTML = items.map((item, index) => {
            const uniqueId = `${subject}-${studentIndex}-${index}`;
            return `
                <div class="standard-item">
                    <div class="standard-row">
                        <input type="checkbox"
                               id="${uniqueId}"
                               name="${subject}Standards"
                               value="${item.code}"
                               data-desc="${item.desc}">
                        <label for="${uniqueId}">
                            <strong>${item.code}</strong>
                        </label>
                        <button type="button" class="info-toggle" onclick="toggleDescription(this)" title="Show description">
                            <span class="info-icon">i</span>
                        </button>
                    </div>
                    <div class="standard-description" style="display: none;">
                        ${item.desc}
                    </div>
                </div>
            `;
        }).join('');
        noteElement.textContent = `Select up to 4 standards (${framework})`;
    } else {
        itemsContainer.innerHTML = items.map((item, index) => {
            const uniqueId = `${subject}-${studentIndex}-${index}`;
            return `
                <div class="standard-item skill-item">
                    <input type="checkbox"
                           id="${uniqueId}"
                           name="${subject}Standards"
                           value="${item.name}"
                           data-desc="">
                    <label for="${uniqueId}">
                        ${item.name}
                    </label>
                </div>
            `;
        }).join('');
        noteElement.textContent = `Select up to 4 skills`;
    }

    // Enforce max selection within this items container
    const checkboxes = itemsContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => enforceMaxStandards(itemsContainer, noteElement, isStandards));
    });
}

/**
 * Toggle the description visibility for a standard
 * @param {HTMLElement} button - The info toggle button
 */
function toggleDescription(button) {
    const item = button.closest('.standard-item');
    const desc = item.querySelector('.standard-description');
    const icon = button.querySelector('.info-icon');

    if (desc.style.display === 'none') {
        desc.style.display = 'block';
        icon.textContent = '−';
        button.classList.add('expanded');
        button.title = 'Hide description';
    } else {
        desc.style.display = 'none';
        icon.textContent = 'i';
        button.classList.remove('expanded');
        button.title = 'Show description';
    }
}

/**
 * Enforce maximum standards/skills selection
 * @param {HTMLElement} container - The standards container
 * @param {HTMLElement} noteElement - The note element to update
 * @param {boolean} isStandards - Whether these are standards (vs skills)
 */
function enforceMaxStandards(container, noteElement, isStandards = true) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const checkedCount = container.querySelectorAll('input[type="checkbox"]:checked').length;
    const itemType = isStandards ? 'standards' : 'skills';

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
        noteElement.innerHTML = `<span class="max-reached">Maximum ${MAX_STANDARDS_PER_SUBJECT} ${itemType} selected</span>`;
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
 * Format date in local timezone
 * @returns {string} Formatted local date/time string
 */
function getLocalDateTime() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${month}/${day}/${year} ${hours}:${minutes}`;
}

/**
 * Get grade label from value
 * @param {string} value - Grade value (e.g., "K", "1", "2")
 * @returns {string} Grade label (e.g., "Kindergarten", "Grade 1")
 */
function getGradeLabel(value) {
    if (!value) return '';
    const grade = GRADE_LEVELS.find(g => g.value === value);
    return grade ? grade.label : value;
}

/**
 * Collect form data with summaries for SharePoint display
 * @returns {Object} The complete form data with readable summaries
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

    // Collect all students data
    const students = [];
    const cards = studentsContainer.querySelectorAll('.student-card');

    cards.forEach((card, index) => {
        const studentData = {
            index: index + 1,
            name: card.querySelector('input[name="studentName"]').value,
            currentGrade: card.querySelector('select[name="currentGrade"]').value,
            math: collectSubjectData(card, 'math'),
            ela: collectSubjectData(card, 'ela')
        };
        students.push(studentData);
    });

    // Get overall request notes
    const requestNotes = document.getElementById('request-notes').value;

    // Build readable summaries for SharePoint list view
    const studentsSummary = students.length > 0
        ? students.map(s => `• <strong>${s.name}</strong> (${s.currentGrade || '—'})`).join('<br>')
        : '';

    // Build detailed Math summary (HTML for email rendering)
    const mathList = students.map(s => buildSubjectSummaryLine(s.name, s.math)).filter(Boolean);
    const mathSummary = mathList.join('<br><br>');

    // Build detailed ELA summary (HTML for email rendering)
    const elaList = students.map(s => buildSubjectSummaryLine(s.name, s.ela)).filter(Boolean);
    const elaSummary = elaList.join('<br><br>');

    const formData = {
        requestId: generateRequestId(),
        submittedAt: getLocalDateTime(),

        // Tutor info (flat for easy SharePoint mapping)
        tutorName: document.getElementById('tutor-name').value,
        tutorEmail: document.getElementById('tutor-email').value,
        programCoordinator: coordinatorName,
        programCoordinatorEmail: coordinatorEmail,
        school: document.getElementById('school').value,
        state: stateSelect.value,

        // Student count
        studentCount: students.length,

        // Readable summaries for SharePoint list view
        studentsSummary: studentsSummary,
        mathSummary: mathSummary || 'None requested',
        elaSummary: elaSummary || 'None requested',
        requestNotes: requestNotes || '',

        // Full JSON string for PowerApps (stores complete student data)
        studentsJSON: JSON.stringify(students)
    };

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
 * Collect subject data from a student card based on the active request type
 * @param {HTMLElement} card
 * @param {string} subject - 'math' or 'ela'
 * @returns {Object}
 */
function collectSubjectData(card, subject) {
    const section = card.querySelector(`.${subject}-section`);
    if (!section || section.style.display === 'none') {
        return { requestType: null };
    }

    const activeRadio = section.querySelector(`input[name="${subject}RequestType"]:checked`);
    const requestType = activeRadio ? activeRadio.value : null;
    const notFoundCb = section.querySelector(`input[name="${subject}NotFound"]`);
    const notFound = notFoundCb ? notFoundCb.checked : false;
    const notFoundNote = notFound
        ? (section.querySelector(`textarea[name="${subject}NotFoundNote"]`) || {}).value || ''
        : '';

    if (requestType === 'code-page') {
        const codes = Array.from(section.querySelectorAll(`input[name="${subject}Code[]"]`)).map(i => i.value.trim());
        const pages = Array.from(section.querySelectorAll(`input[name="${subject}Page[]"]`)).map(i => i.value.trim());
        const pairs = codes.map((code, i) => ({ code, page: pages[i] || '' })).filter(p => p.code || p.page);
        return { requestType, codePairs: pairs, notFound, notFoundNote };
    }

    if (requestType === 'state-standard') {
        const grade = (section.querySelector(`select[name="${subject}Grade"]`) || {}).value || '';
        const standards = getSelectedStandards(card, subject);
        return { requestType, requestGrade: grade, standards, notFound, notFoundNote };
    }

    if (requestType === 'booster') {
        const band = (section.querySelector(`select[name="${subject}BoosterBand"]`) || {}).value || '';
        return { requestType, boosterBand: band, notFound, notFoundNote };
    }

    return { requestType: null, notFound, notFoundNote };
}

/**
 * Build a readable summary line for one student's subject data
 * @param {string} studentName
 * @param {Object} subjectData - from collectSubjectData
 * @returns {string|null}
 */
function buildSubjectSummaryLine(studentName, subjectData) {
    if (!subjectData || !subjectData.requestType) return null;

    const lines = [`<strong>${studentName}</strong>`];

    if (subjectData.requestType === 'code-page') {
        lines.push('Request Type: Code + Page Number');
        if (subjectData.codePairs && subjectData.codePairs.length > 0) {
            subjectData.codePairs.forEach(p => {
                lines.push(`• ${p.code} — p. ${p.page}`);
            });
        }
    } else if (subjectData.requestType === 'state-standard') {
        lines.push(`Request Type: State Standard (${subjectData.requestGrade || '—'})`);
        if (subjectData.standards && subjectData.standards.length > 0) {
            subjectData.standards.forEach(st => {
                if (st.description) {
                    lines.push(`• ${st.code} — ${st.description}`);
                } else {
                    lines.push(`• ${st.code}`);
                }
            });
        }
    } else if (subjectData.requestType === 'booster') {
        lines.push(`Request Type: Booster Skill Package (${subjectData.boosterBand || '—'})`);
    }

    if (subjectData.notFound && subjectData.notFoundNote) {
        lines.push(`Not found: ${subjectData.notFoundNote}`);
    }

    return lines.join('<br>');
}

// Power Automate Flow URL
const POWER_AUTOMATE_URL = 'https://default24ab4d38cbff431eb3833bd64b05be.87.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/6de60a5025344286bc02fad3dfc4a545/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DrfMrtxYKNM_OXtv4Ad-ZUIIELvdeZUacJARG8m6psM';

/**
 * Handle form submission
 * @param {Event} event - The submit event
 */
async function handleSubmit(event) {
    event.preventDefault();

    const formData = collectFormData();

    // Log to console (for development)
    console.log('Form submitted:', formData);

    // Submit to Power Automate
    try {
        const response = await fetch(POWER_AUTOMATE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Submission failed');
        }

        console.log('Successfully submitted to Power Automate');
    } catch (error) {
        console.error('Error submitting to Power Automate:', error);
        // Still show success and save locally even if Power Automate fails
        // This ensures the user doesn't lose their data
    }

    // Save to localStorage as backup
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
