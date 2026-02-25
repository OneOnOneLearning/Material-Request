/**
 * Grade Standards/Skills Configuration
 *
 * STRUCTURE:
 * STATE_CODE → GRADE → {
 *   math: { type: "skills" | "standards" | "both", ... },
 *   ela:  { type: "skills" | "standards" | "both", ... }
 * }
 *
 * For SKILLS (no standard codes, just skill names):
 *   { type: "skills", items: [{ name: "Skill name" }, ...] }
 *
 * For STANDARDS (with codes and expandable descriptions):
 *   { type: "standards", items: [{ code: "5.OA.1", desc: "Full description" }, ...] }
 *
 * For BOTH (tutor chooses which to request):
 *   { type: "both", skills: [{ name: "..." }, ...], standards: [{ code: "...", desc: "..." }, ...] }
 */

const STANDARDS = {
    // =========================================================================
    // FLORIDA (FL)
    // =========================================================================
    FL: {
        // Kindergarten - Has BOTH skills (Spectrum workbook) and standards (Common Core)
        K: {
            math: {
                type: "both",
                skills: [
                    // Chapter 1: Counting and Writing Numbers
                    { name: "Counting 0, 1, and 2" },
                    { name: "Writing 0, 1, and 2" },
                    { name: "Counting 3 and 4" },
                    { name: "Writing 3 and 4" },
                    { name: "Counting 0 through 4" },
                    { name: "Counting 0 through 5" },
                    { name: "Writing 5" },
                    { name: "Counting On: 0 through 5" },
                    { name: "Counting 6 and 7" },
                    { name: "Writing 6 and 7" },
                    { name: "Counting 5 through 7" },
                    { name: "Counting 8 and 9" },
                    { name: "Writing 8 and 9" },
                    { name: "Counting 5 through 10" },
                    { name: "Writing 10" },
                    { name: "Counting 8 through 10" },
                    { name: "Counting 0 through 10" },
                    { name: "Counting On: 0 through 10" },
                    { name: "Counting and Writing 0 through 10" },
                    { name: "Counting 11 through 14" },
                    { name: "Counting 15 through 18" },
                    { name: "Counting 19 through 22" },
                    { name: "Counting On: 0 through 20" },
                    { name: "Counting and Writing 11 through 15" },
                    { name: "Counting and Writing 16 through 20" },
                    { name: "Counting and Writing 0 through 20" },
                    { name: "Counting 23 through 26" },
                    { name: "Counting 27 through 30" },
                    { name: "Reading the Calendar" },
                    { name: "Counting to 100" },
                    // Chapter 2: Working with Numbers
                    { name: "Comparing Numbers 0 through 5" },
                    { name: "Comparing Numbers 6 through 9" },
                    { name: "Comparing Numbers 0 through 9" },
                    { name: "Decomposing Numbers through 10" },
                    { name: "Composing Numbers 11 through 19" },
                    { name: "Decomposing Numbers 11 through 19" },
                    { name: "Composing and Decomposing Numbers 11 through 19" },
                    // Chapter 3: Addition and Subtraction
                    { name: "Adding More (Addition)" },
                    { name: "Taking Away (Subtraction)" },
                    { name: "Adding through 3" },
                    { name: "Subtracting through 3" },
                    { name: "Adding to 4 and 5" },
                    { name: "Subtracting from 4 and 5" },
                    { name: "Adding through 5" },
                    { name: "Subtracting within 5" },
                    { name: "Adding to 6 and 7" },
                    { name: "Subtracting from 6 and 7" },
                    { name: "Adding to 8 and 9" },
                    { name: "Subtracting from 8 and 9" },
                    { name: "Making 10" },
                    { name: "Subtracting from 10" },
                    { name: "Adding Numbers" },
                    { name: "Subtracting Numbers" },
                    // Chapter 4: Measurement and Data
                    { name: "Measurable Attributes" },
                    { name: "Longer and Shorter" },
                    { name: "Taller and Shorter" },
                    { name: "Heavier and Lighter" },
                    { name: "Describing an Object" },
                    { name: "Sorting and Classifying Objects" },
                    // Chapter 5: Geometry
                    { name: "Flat Shapes (2-D)" },
                    { name: "Solid Shapes (3-D)" },
                    { name: "Identifying 2-D and 3-D Shapes" },
                    { name: "Comparing Shapes" },
                    { name: "Position Words" },
                    { name: "Squares" },
                    { name: "Rectangles" },
                    { name: "Triangles" },
                    { name: "Circles" },
                    { name: "Hexagons" },
                    { name: "Sorting Shapes" },
                    { name: "Naming Shapes" },
                    { name: "Drawing Shapes" },
                    { name: "Problem Solving: Finding Shapes" },
                    { name: "Tracing and Drawing Shapes" },
                    { name: "Composing Shapes" }
                ],
                standards: [
                    // Counting and Cardinality
                    { code: "K.CC.1–K.CC.3", desc: "Know number names and the count sequence." },
                    { code: "K.CC.4, K.CC.5", desc: "Count to tell the number of objects." },
                    { code: "K.CC.6, K.CC.7", desc: "Compare numbers." },
                    // Operations and Algebraic Thinking
                    { code: "K.OA.1–K.OA.5", desc: "Understand addition as putting together and adding to, and understand subtraction as taking apart and taking from." },
                    // Number and Operations in Base Ten
                    { code: "K.NBT.1", desc: "Work with numbers 11–19 to gain foundations for place value." },
                    // Measurement and Data
                    { code: "K.MD.1, K.MD.2", desc: "Describe and compare measurable attributes." },
                    { code: "K.MD.3", desc: "Classify objects and count the number of objects in each category." },
                    // Geometry
                    { code: "K.G.1–K.G.3", desc: "Identify and describe shapes." },
                    { code: "K.G.4–K.G.6", desc: "Analyze, compare, create, and compose shapes." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 1st Grade
        1: {
            math: {
                type: "both",
                skills: [
                    // Skills coming later
                ],
                standards: []  // Standards coming later
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 2nd Grade
        2: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 3rd Grade
        3: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 4th Grade
        4: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 5th Grade
        5: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 6th Grade
        6: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 7th Grade
        7: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 8th Grade
        8: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 9th Grade
        9: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 10th Grade
        10: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 11th Grade
        11: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 12th Grade
        12: {
            math: { type: "both", skills: [], standards: [] },
            ela: { type: "both", skills: [], standards: [] }
        }
    }

    // =========================================================================
    // ADD MORE STATES BELOW
    // =========================================================================
};


// =========================================================================
// US STATES LIST
// =========================================================================
const US_STATES = [
    { code: "FL", name: "Florida" }
];


// =========================================================================
// GRADE LEVELS
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
// HELPER FUNCTIONS
// =========================================================================

/**
 * Get standards/skills data for a specific state, subject, and grade
 * @param {string} stateCode - Two-letter state code (e.g., "FL")
 * @param {string} subject - "math" or "ela"
 * @param {string} grade - Grade level ("K", "1"-"12")
 * @returns {Object} Object with type ("skills" or "standards") and items array
 */
function getStandardsData(stateCode, subject, grade) {
    if (STANDARDS[stateCode] &&
        STANDARDS[stateCode][grade] &&
        STANDARDS[stateCode][grade][subject]) {
        return STANDARDS[stateCode][grade][subject];
    }
    return { type: "skills", items: [] };
}

/**
 * Get just the items array (for backwards compatibility)
 * @param {string} stateCode - Two-letter state code
 * @param {string} subject - "math" or "ela"
 * @param {string} grade - Grade level
 * @returns {Array} Array of standards/skills objects
 */
function getStandards(stateCode, subject, grade) {
    const data = getStandardsData(stateCode, subject, grade);
    return data.items || [];
}

/**
 * Check if a grade/subject uses standards (vs skills)
 * @param {string} stateCode - Two-letter state code
 * @param {string} subject - "math" or "ela"
 * @param {string} grade - Grade level
 * @returns {boolean} True if standards, false if skills
 */
function usesStandards(stateCode, subject, grade) {
    const data = getStandardsData(stateCode, subject, grade);
    return data.type === "standards";
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
    };
    return frameworks[stateCode] || "State Standards";
}
