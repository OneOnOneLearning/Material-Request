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
                standards: []  // Standards coming later
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
        // 5th Grade - Has BOTH skills (Spectrum) and standards (Common Core)
        5: {
            math: {
                type: "both",
                skills: [],  // Spectrum skills coming later
                standards: [
                    // Operations and Algebraic Thinking
                    { code: "5.OA.1", desc: "Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions with these symbols." },
                    { code: "5.OA.2", desc: "Write simple expressions that record calculations with numbers, and interpret numerical expressions without evaluating them." },
                    { code: "5.OA.3", desc: "Generate two numerical patterns using two given rules. Identify apparent relationships between corresponding terms." },
                    // Number and Operations in Base Ten
                    { code: "5.NBT.1", desc: "Recognize that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right and 1/10 of what it represents in the place to its left." },
                    { code: "5.NBT.2", desc: "Explain patterns in the number of zeros of the product when multiplying a number by powers of 10." },
                    { code: "5.NBT.3", desc: "Read, write, and compare decimals to thousandths." },
                    { code: "5.NBT.4", desc: "Use place value understanding to round decimals to any place." },
                    { code: "5.NBT.5", desc: "Fluently multiply multi-digit whole numbers using the standard algorithm." },
                    { code: "5.NBT.6", desc: "Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors." },
                    { code: "5.NBT.7", desc: "Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value." },
                    // Number and Operations—Fractions
                    { code: "5.NF.1", desc: "Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions." },
                    { code: "5.NF.2", desc: "Solve word problems involving addition and subtraction of fractions referring to the same whole." },
                    { code: "5.NF.3", desc: "Interpret a fraction as division of the numerator by the denominator (a/b = a ÷ b)." },
                    { code: "5.NF.4", desc: "Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction." },
                    { code: "5.NF.5", desc: "Interpret multiplication as scaling (resizing)." },
                    { code: "5.NF.6", desc: "Solve real world problems involving multiplication of fractions and mixed numbers." },
                    { code: "5.NF.7", desc: "Apply and extend previous understandings of division to divide unit fractions by whole numbers and whole numbers by unit fractions." },
                    // Measurement and Data
                    { code: "5.MD.1", desc: "Convert among different-sized standard measurement units within a given measurement system." },
                    { code: "5.MD.2", desc: "Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8)." },
                    { code: "5.MD.3", desc: "Recognize volume as an attribute of solid figures and understand concepts of volume measurement." },
                    { code: "5.MD.4", desc: "Measure volumes by counting unit cubes, using cubic cm, cubic in, cubic ft, and improvised units." },
                    { code: "5.MD.5", desc: "Relate volume to the operations of multiplication and addition and solve real world and mathematical problems involving volume." },
                    // Geometry
                    { code: "5.G.1", desc: "Use a pair of perpendicular number lines, called axes, to define a coordinate system." },
                    { code: "5.G.2", desc: "Represent real world and mathematical problems by graphing points in the first quadrant of the coordinate plane." },
                    { code: "5.G.3", desc: "Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category." },
                    { code: "5.G.4", desc: "Classify two-dimensional figures in a hierarchy based on properties." }
                ]
            },
            ela: {
                type: "both",
                skills: [],
                standards: []  // ELA data coming later
            }
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
