/**
 * Grade Standards Configuration
 *
 * Edit this file to configure standards by state and grade.
 *
 * STRUCTURE:
 * STATE_CODE → GRADE → { math: [...], ela: [...] }
 *
 * Each standard should have:
 *   - code: The standard code (e.g., "3.OA.1")
 *   - desc: Description of the standard
 *
 * GRADE VALUES: "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
 *
 * Example structure shown below as a template.
 */

const STANDARDS = {
    // =========================================================================
    // TEXAS (TX)
    // =========================================================================
    TX: {
        // Kindergarten
        K: {
            math: [
                // Add Kindergarten Math standards here
                // { code: "K.2A", desc: "Count forward and backward to at least 20" },
            ],
            ela: [
                // Add Kindergarten ELA standards here
                // { code: "K.1A", desc: "Listen actively and ask questions to understand" },
            ]
        },
        // 1st Grade
        1: {
            math: [
                // Add 1st Grade Math standards here
            ],
            ela: [
                // Add 1st Grade ELA standards here
            ]
        },
        // 2nd Grade
        2: {
            math: [
                // Add 2nd Grade Math standards here
            ],
            ela: [
                // Add 2nd Grade ELA standards here
            ]
        },
        // 3rd Grade
        3: {
            math: [
                // Add 3rd Grade Math standards here
            ],
            ela: [
                // Add 3rd Grade ELA standards here
            ]
        },
        // 4th Grade
        4: {
            math: [
                // Add 4th Grade Math standards here
            ],
            ela: [
                // Add 4th Grade ELA standards here
            ]
        },
        // 5th Grade
        5: {
            math: [
                // Add 5th Grade Math standards here
            ],
            ela: [
                // Add 5th Grade ELA standards here
            ]
        },
        // 6th Grade
        6: {
            math: [
                // Add 6th Grade Math standards here
            ],
            ela: [
                // Add 6th Grade ELA standards here
            ]
        },
        // 7th Grade
        7: {
            math: [
                // Add 7th Grade Math standards here
            ],
            ela: [
                // Add 7th Grade ELA standards here
            ]
        },
        // 8th Grade
        8: {
            math: [
                // Add 8th Grade Math standards here
            ],
            ela: [
                // Add 8th Grade ELA standards here
            ]
        },
        // 9th Grade
        9: {
            math: [
                // Add 9th Grade Math standards here
            ],
            ela: [
                // Add 9th Grade ELA standards here
            ]
        },
        // 10th Grade
        10: {
            math: [
                // Add 10th Grade Math standards here
            ],
            ela: [
                // Add 10th Grade ELA standards here
            ]
        },
        // 11th Grade
        11: {
            math: [
                // Add 11th Grade Math standards here
            ],
            ela: [
                // Add 11th Grade ELA standards here
            ]
        },
        // 12th Grade
        12: {
            math: [
                // Add 12th Grade Math standards here
            ],
            ela: [
                // Add 12th Grade ELA standards here
            ]
        }
    },

    // =========================================================================
    // CALIFORNIA (CA)
    // =========================================================================
    CA: {
        K: {
            math: [],
            ela: []
        },
        1: {
            math: [],
            ela: []
        },
        2: {
            math: [],
            ela: []
        },
        3: {
            math: [],
            ela: []
        },
        4: {
            math: [],
            ela: []
        },
        5: {
            math: [],
            ela: []
        },
        6: {
            math: [],
            ela: []
        },
        7: {
            math: [],
            ela: []
        },
        8: {
            math: [],
            ela: []
        },
        9: {
            math: [],
            ela: []
        },
        10: {
            math: [],
            ela: []
        },
        11: {
            math: [],
            ela: []
        },
        12: {
            math: [],
            ela: []
        }
    },

    // =========================================================================
    // NEW YORK (NY)
    // =========================================================================
    NY: {
        K: {
            math: [],
            ela: []
        },
        1: {
            math: [],
            ela: []
        },
        2: {
            math: [],
            ela: []
        },
        3: {
            math: [],
            ela: []
        },
        4: {
            math: [],
            ela: []
        },
        5: {
            math: [],
            ela: []
        },
        6: {
            math: [],
            ela: []
        },
        7: {
            math: [],
            ela: []
        },
        8: {
            math: [],
            ela: []
        },
        9: {
            math: [],
            ela: []
        },
        10: {
            math: [],
            ela: []
        },
        11: {
            math: [],
            ela: []
        },
        12: {
            math: [],
            ela: []
        }
    },

    // =========================================================================
    // FLORIDA (FL)
    // =========================================================================
    FL: {
        K: {
            math: [],
            ela: []
        },
        1: {
            math: [],
            ela: []
        },
        2: {
            math: [],
            ela: []
        },
        3: {
            math: [],
            ela: []
        },
        4: {
            math: [],
            ela: []
        },
        5: {
            math: [],
            ela: []
        },
        6: {
            math: [],
            ela: []
        },
        7: {
            math: [],
            ela: []
        },
        8: {
            math: [],
            ela: []
        },
        9: {
            math: [],
            ela: []
        },
        10: {
            math: [],
            ela: []
        },
        11: {
            math: [],
            ela: []
        },
        12: {
            math: [],
            ela: []
        }
    }

    // =========================================================================
    // ADD MORE STATES BELOW
    // =========================================================================
    // Copy the template structure above for additional states
    // Use the two-letter state code as the key (e.g., "AZ", "CO", "GA", etc.)
};


// =========================================================================
// US STATES LIST
// Edit this to add/remove states available in the dropdown
// =========================================================================
const US_STATES = [
    { code: "TX", name: "Texas" },
    { code: "CA", name: "California" },
    { code: "NY", name: "New York" },
    { code: "FL", name: "Florida" }
    // Add more states as needed:
    // { code: "AZ", name: "Arizona" },
    // { code: "CO", name: "Colorado" },
    // { code: "GA", name: "Georgia" },
    // { code: "IL", name: "Illinois" },
    // { code: "NC", name: "North Carolina" },
    // { code: "OH", name: "Ohio" },
    // { code: "PA", name: "Pennsylvania" },
    // { code: "WA", name: "Washington" },
];


// =========================================================================
// GRADE LEVELS
// Edit this to modify available grade levels
// =========================================================================
const GRADE_LEVELS = [
    { value: "K", label: "Kindergarten" },
    { value: "1", label: "1st Grade" },
    { value: "2", label: "2nd Grade" },
    { value: "3", label: "3rd Grade" },
    { value: "4", label: "4th Grade" },
    { value: "5", label: "5th Grade" },
    { value: "6", label: "6th Grade" },
    { value: "7", label: "7th Grade" },
    { value: "8", label: "8th Grade" },
    { value: "9", label: "9th Grade" },
    { value: "10", label: "10th Grade" },
    { value: "11", label: "11th Grade" },
    { value: "12", label: "12th Grade" }
];


// =========================================================================
// HELPER FUNCTIONS (Do not edit unless necessary)
// =========================================================================

/**
 * Get standards for a specific state, subject, and grade
 * @param {string} stateCode - Two-letter state code (e.g., "TX")
 * @param {string} subject - "math" or "ela"
 * @param {string} grade - Grade level ("K", "1"-"12")
 * @returns {Array} Array of standards objects with code and desc
 */
function getStandards(stateCode, subject, grade) {
    if (STANDARDS[stateCode] &&
        STANDARDS[stateCode][grade] &&
        STANDARDS[stateCode][grade][subject]) {
        return STANDARDS[stateCode][grade][subject];
    }
    return [];
}

/**
 * Get the standards framework name for a state
 * @param {string} stateCode - Two-letter state code
 * @returns {string} Name of the standards framework
 */
function getStandardsFramework(stateCode) {
    const frameworks = {
        TX: "TEKS",
        CA: "CA Standards",
        NY: "NY Standards",
        FL: "FL Standards"
        // Add more state framework names as needed
    };
    return frameworks[stateCode] || "State Standards";
}
