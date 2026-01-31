/**
 * Material Request Form Handler
 *
 * This script manages form submission and provides a foundation
 * for extending functionality (e.g., API integration, local storage, etc.)
 */

// DOM Elements
const requestForm = document.getElementById('request-form');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');
const closeModalBtn = document.getElementById('close-modal');
const requestIdSpan = document.getElementById('request-id');

/**
 * Generate a unique request ID
 * @returns {string} A unique request ID
 */
function generateRequestId() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `MR-${timestamp}-${randomPart}`.toUpperCase();
}

/**
 * Collect form data into an object
 * @param {HTMLFormElement} form - The form element
 * @returns {Object} Form data as key-value pairs
 */
function getFormData(form) {
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Add metadata
    data.requestId = generateRequestId();
    data.submittedAt = new Date().toISOString();

    return data;
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

/**
 * Handle form submission
 * @param {Event} event - The submit event
 */
async function handleSubmit(event) {
    event.preventDefault();

    const formData = getFormData(requestForm);

    // Log to console (for development/debugging)
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
    //     return;
    // }

    // Store in localStorage (optional - for offline capability)
    saveToLocalStorage(formData);

    // Show success modal
    showSuccessModal(formData.requestId);

    // Reset the form
    requestForm.reset();
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
 * Clear all saved requests from localStorage
 */
function clearSavedRequests() {
    localStorage.removeItem('materialRequests');
    console.log('All saved requests cleared');
}

/**
 * Set minimum date for the date picker to today
 */
function setMinDate() {
    const dateInput = document.getElementById('needed-by');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

/**
 * Initialize the application
 */
function init() {
    // Set minimum date
    setMinDate();

    // Form submit handler
    requestForm.addEventListener('submit', handleSubmit);

    // Modal close handlers
    closeBtn.addEventListener('click', hideSuccessModal);
    closeModalBtn.addEventListener('click', hideSuccessModal);

    // Close modal on outside click
    successModal.addEventListener('click', (event) => {
        if (event.target === successModal) {
            hideSuccessModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && successModal.classList.contains('active')) {
            hideSuccessModal();
        }
    });

    console.log('Material Request Form initialized');
    console.log('Saved requests:', getSavedRequests().length);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for external use (if using modules)
// export { getFormData, getSavedRequests, clearSavedRequests };
