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
        // Kindergarten - Has BOTH skills (Spectrum workbook) and FL Benchmarks
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
                    // Number Sense and Operations
                    { code: "MA.K.NSO.1.1", desc: "Given a group of up to 20 objects, count the number of objects in that group and represent the number of objects with a written numeral. State the number of objects in a rearrangement of that group without recounting." },
                    { code: "MA.K.NSO.1.2", desc: "Given a number from 0 to 20, count out that many objects." },
                    { code: "MA.K.NSO.1.3", desc: "Identify positions of objects within a sequence using the words \"first,\" \"second,\" \"third,\" \"fourth\" or \"fifth.\"" },
                    { code: "MA.K.NSO.1.4", desc: "Compare the number of objects from 0 to 20 in two groups using the terms less than, equal to or greater than." },
                    { code: "MA.K.NSO.2.1", desc: "Recite the number names to 100 by ones and by tens. Starting at a given number, count forward within 100 and backward within 20." },
                    { code: "MA.K.NSO.2.2", desc: "Represent whole numbers from 10 to 20, using a unit of ten and a group of ones, with objects, drawings and expressions or equations." },
                    { code: "MA.K.NSO.2.3", desc: "Locate, order and compare numbers from 0 to 20 using the number line and terms less than, equal to or greater than." },
                    { code: "MA.K.NSO.3.1", desc: "Explore addition of two whole numbers from 0 to 10, and related subtraction facts." },
                    { code: "MA.K.NSO.3.2", desc: "Add two one-digit whole numbers with sums from 0 to 10 and subtract using related facts with procedural reliability." },
                    // Algebraic Reasoning
                    { code: "MA.K.AR.1.1", desc: "For any number from 1 to 9, find the number that makes 10 when added to the given number." },
                    { code: "MA.K.AR.1.2", desc: "Given a number from 0 to 10, find the different ways it can be represented as the sum of two numbers." },
                    { code: "MA.K.AR.1.3", desc: "Solve addition and subtraction real-world problems using objects, drawings or equations to represent the problem." },
                    { code: "MA.K.AR.2.1", desc: "Explain why addition or subtraction equations are true using objects or drawings." },
                    // Measurement
                    { code: "MA.K.M.1.1", desc: "Identify the attributes of a single object that can be measured such as length, volume or weight." },
                    { code: "MA.K.M.1.2", desc: "Directly compare two objects that have an attribute which can be measured in common. Express the comparison using language to describe the difference." },
                    { code: "MA.K.M.1.3", desc: "Express the length of an object, up to 20 units long, as a whole number of lengths by laying non-standard objects end to end with no gaps or overlaps." },
                    // Geometric Reasoning
                    { code: "MA.K.GR.1.1", desc: "Identify two- and three-dimensional figures regardless of their size or orientation. Figures are limited to circles, triangles, rectangles, squares, spheres, cubes, cones and cylinders." },
                    { code: "MA.K.GR.1.2", desc: "Compare two-dimensional figures based on their similarities, differences and positions. Sort two-dimensional figures based on their similarities and differences. Figures are limited to circles, triangles, rectangles and squares." },
                    { code: "MA.K.GR.1.3", desc: "Compare three-dimensional figures based on their similarities, differences and positions. Sort three-dimensional figures based on their similarities and differences. Figures are limited to spheres, cubes, cones and cylinders." },
                    { code: "MA.K.GR.1.4", desc: "Find real-world objects that can be modeled by a given two- or three-dimensional figure. Figures are limited to circles, triangles, rectangles, squares, spheres, cubes, cones and cylinders." },
                    { code: "MA.K.GR.1.5", desc: "Combine two-dimensional figures to form a given composite figure. Figures used to form a composite shape are limited to triangles, rectangles and squares." },
                    // Data Analysis and Probability
                    { code: "MA.K.DP.1.1", desc: "Collect and sort objects into categories and compare the categories by counting the objects in each category. Report the results verbally, with a written numeral or with drawings." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 1st Grade
        1: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.1.NSO.1.1", desc: "Starting at a given number, count forward and backwards within 120 by ones. Skip count by 2s to 20 and by 5s to 100." },
                    { code: "MA.1.NSO.1.2", desc: "Read numbers from 0 to 100 written in standard form, expanded form and word form. Write numbers from 0 to 100 using standard form and expanded form." },
                    { code: "MA.1.NSO.1.3", desc: "Compose and decompose two-digit numbers in multiple ways using tens and ones. Demonstrate each composition or decomposition with objects, drawings and expressions or equations." },
                    { code: "MA.1.NSO.1.4", desc: "Plot, order and compare whole numbers up to 100." },
                    { code: "MA.1.NSO.2.1", desc: "Recall addition facts with sums to 10 and related subtraction facts with automaticity." },
                    { code: "MA.1.NSO.2.2", desc: "Add two whole numbers with sums from 0 to 20, and subtract using related facts with procedural reliability." },
                    { code: "MA.1.NSO.2.3", desc: "Identify the number that is one more, one less, ten more and ten less than a given two-digit number." },
                    { code: "MA.1.NSO.2.4", desc: "Explore the addition of a two-digit number and a one-digit number with sums to 100." },
                    { code: "MA.1.NSO.2.5", desc: "Explore subtraction of a one-digit number from a two-digit number." },
                    // Fractions
                    { code: "MA.1.FR.1.1", desc: "Partition circles and rectangles into two and four equal-sized parts. Name the parts of the whole using appropriate language including halves or fourths." },
                    // Algebraic Reasoning
                    { code: "MA.1.AR.1.1", desc: "Apply properties of addition to find a sum of three or more whole numbers." },
                    { code: "MA.1.AR.1.2", desc: "Solve addition and subtraction real-world problems using objects, drawings or equations to represent the problem." },
                    { code: "MA.1.AR.2.1", desc: "Restate a subtraction problem as a missing addend problem using the relationship between addition and subtraction." },
                    { code: "MA.1.AR.2.2", desc: "Determine and explain if equations involving addition or subtraction are true or false." },
                    { code: "MA.1.AR.2.3", desc: "Determine the unknown whole number in an addition or subtraction equation, relating three whole numbers, with the unknown in any position." },
                    // Measurement
                    { code: "MA.1.M.1.1", desc: "Estimate the length of an object to the nearest inch. Measure the length of an object to the nearest inch or centimeter." },
                    { code: "MA.1.M.1.2", desc: "Compare and order the length of up to three objects using direct and indirect comparison." },
                    { code: "MA.1.M.2.1", desc: "Using analog and digital clocks, tell and write time in hours and half-hours." },
                    { code: "MA.1.M.2.2", desc: "Identify pennies, nickels, dimes and quarters, and express their values using the \u00a2 symbol. State how many of each coin equal a dollar." },
                    { code: "MA.1.M.2.3", desc: "Find the value of combinations of pennies, nickels and dimes up to one dollar, and the value of combinations of one, five and ten dollar bills up to $100. Use the \u00a2 and $ symbols appropriately." },
                    // Geometric Reasoning
                    { code: "MA.1.GR.1.1", desc: "Identify, compare and sort two- and three-dimensional figures based on their defining attributes. Figures are limited to circles, semi-circles, triangles, rectangles, squares, trapezoids, hexagons, spheres, cubes, rectangular prisms, cones and cylinders." },
                    { code: "MA.1.GR.1.2", desc: "Sketch two-dimensional figures when given defining attributes. Figures are limited to triangles, rectangles, squares and hexagons." },
                    { code: "MA.1.GR.1.3", desc: "Compose and decompose two- and three-dimensional figures. Figures are limited to semi-circles, triangles, rectangles, squares, trapezoids, hexagons, cubes, rectangular prisms, cones and cylinders." },
                    { code: "MA.1.GR.1.4", desc: "Given a real-world object, identify parts that are modeled by two- and three-dimensional figures. Figures are limited to semi-circles, triangles, rectangles, squares and hexagons, spheres, cubes, rectangular prisms, cones and cylinders." },
                    // Data Analysis and Probability
                    { code: "MA.1.DP.1.1", desc: "Collect data into categories and represent the results using tally marks or pictographs." },
                    { code: "MA.1.DP.1.2", desc: "Interpret data represented with tally marks or pictographs by calculating the total number of data points and comparing the totals of different categories." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 2nd Grade
        2: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.2.NSO.1.1", desc: "Read and write numbers from 0 to 1,000 using standard form, expanded form and word form." },
                    { code: "MA.2.NSO.1.2", desc: "Compose and decompose three-digit numbers in multiple ways using hundreds, tens and ones. Demonstrate each composition or decomposition with objects, drawings and expressions or equations." },
                    { code: "MA.2.NSO.1.3", desc: "Plot, order and compare whole numbers up to 1,000." },
                    { code: "MA.2.NSO.1.4", desc: "Round whole numbers from 0 to 100 to the nearest 10." },
                    { code: "MA.2.NSO.2.1", desc: "Determine and explain whether equations involving addition and subtraction are true or false." },
                    { code: "MA.2.NSO.2.2", desc: "Determine the unknown whole number in an addition or subtraction equation, relating three or four whole numbers, with the unknown in any position." },
                    { code: "MA.2.NSO.2.3", desc: "Add two whole numbers with sums up to 100 with procedural reliability. Subtract a whole number from a whole number, each no larger than 100, with procedural reliability." },
                    { code: "MA.2.NSO.2.4", desc: "Explore the addition of two whole numbers with sums up to 1,000. Explore the subtraction of a whole number from a whole number, each no larger than 1,000." },
                    // Fractions
                    { code: "MA.2.FR.1.1", desc: "Partition circles and rectangles into two, three or four equal-sized parts. Name the parts using appropriate language, and describe the whole as two halves, three thirds or four fourths." },
                    { code: "MA.2.FR.1.2", desc: "Partition rectangles into two, three or four equal-sized parts in two different ways showing that equal-sized parts of the same whole may have different shapes." },
                    // Algebraic Reasoning
                    { code: "MA.2.AR.1.1", desc: "Solve one- and two-step addition and subtraction real-world problems." },
                    { code: "MA.2.AR.2.1", desc: "Determine and explain whether equations involving addition and subtraction are true or false." },
                    { code: "MA.2.AR.2.2", desc: "Determine the unknown whole number in an addition or subtraction equation, relating three or four whole numbers, with the unknown in any position." },
                    { code: "MA.2.AR.3.1", desc: "Represent an even number using two equal groups or two equal addends. Represent an odd number using two equal groups with one left over or two equal addends plus 1." },
                    { code: "MA.2.AR.3.2", desc: "Use repeated addition to find the total number of objects in a collection of equal groups. Represent the total number of objects using rectangular arrays and equations." },
                    // Measurement
                    { code: "MA.2.M.1.1", desc: "Estimate and measure the length of an object to the nearest inch, foot, yard, centimeter or meter by selecting and using an appropriate tool." },
                    { code: "MA.2.M.1.2", desc: "Measure the lengths of two objects using the same unit and determine the difference between their measurements." },
                    { code: "MA.2.M.1.3", desc: "Solve one- and two-step real-world measurement problems involving addition and subtraction of lengths given in the same units." },
                    { code: "MA.2.M.2.1", desc: "Using analog and digital clocks, tell and write time to the nearest five minutes using a.m. and p.m. appropriately. Express portions of an hour using the fractional terms half an hour, half past, quarter of an hour, quarter after and quarter til." },
                    { code: "MA.2.M.2.2", desc: "Solve one- and two-step addition and subtraction real-world problems involving either dollar bills within $100 or coins within 100\u00a2 using $ and \u00a2 symbols appropriately." },
                    // Geometric Reasoning
                    { code: "MA.2.GR.1.1", desc: "Identify and draw two-dimensional figures based on their defining attributes. Figures are limited to triangles, rectangles, squares, pentagons, hexagons and octagons." },
                    { code: "MA.2.GR.1.2", desc: "Categorize two-dimensional figures based on the number and length of sides, number of vertices, whether they are closed or not and whether the edges are curved or straight." },
                    { code: "MA.2.GR.1.3", desc: "Identify line(s) of symmetry for a two-dimensional figure." },
                    { code: "MA.2.GR.2.1", desc: "Explore perimeter as an attribute of a figure by placing unit segments along the boundary without gaps or overlaps. Find perimeters of rectangles by counting unit segments." },
                    { code: "MA.2.GR.2.2", desc: "Find the perimeter of a polygon with whole-number side lengths. Polygons are limited to triangles, rectangles, squares and pentagons." },
                    // Data Analysis and Probability
                    { code: "MA.2.DP.1.1", desc: "Collect, categorize and represent data using tally marks, tables, pictographs or bar graphs. Use appropriate titles, labels and units." },
                    { code: "MA.2.DP.1.2", desc: "Interpret data represented with tally marks, tables, pictographs or bar graphs including solving addition and subtraction problems." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 3rd Grade
        3: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.3.NSO.1.1", desc: "Read and write numbers from 0 to 10,000 using standard form, expanded form and word form." },
                    { code: "MA.3.NSO.1.2", desc: "Compose and decompose four-digit numbers in multiple ways using thousands, hundreds, tens and ones. Demonstrate each composition or decomposition using objects, drawings and expressions or equations." },
                    { code: "MA.3.NSO.1.3", desc: "Plot, order and compare whole numbers up to 10,000." },
                    { code: "MA.3.NSO.1.4", desc: "Round whole numbers from 0 to 1,000 to the nearest 10 or 100." },
                    { code: "MA.3.NSO.2.1", desc: "Add and subtract multi-digit whole numbers including using a standard algorithm with procedural fluency." },
                    { code: "MA.3.NSO.2.2", desc: "Explore multiplication of two whole numbers with products from 0 to 144, and related division facts." },
                    { code: "MA.3.NSO.2.3", desc: "Multiply a one-digit whole number by a multiple of 10, up to 90, or a multiple of 100, up to 900, with procedural reliability." },
                    { code: "MA.3.NSO.2.4", desc: "Multiply two whole numbers from 0 to 12 and divide using related facts with procedural reliability." },
                    // Fractions
                    { code: "MA.3.FR.1.1", desc: "Represent and interpret unit fractions in the form 1/n as the quantity formed by one part when a whole is partitioned into n equal parts." },
                    { code: "MA.3.FR.1.2", desc: "Represent and interpret fractions, including fractions greater than one, in the form of m/n as the result of adding the unit fraction 1/n to itself m times." },
                    { code: "MA.3.FR.1.3", desc: "Read and write fractions, including fractions greater than one, using standard form, numeral-word form and word form." },
                    { code: "MA.3.FR.2.1", desc: "Plot, order and compare fractional numbers with the same numerator or the same denominator." },
                    { code: "MA.3.FR.2.2", desc: "Identify equivalent fractions and explain why they are equivalent." },
                    // Algebraic Reasoning
                    { code: "MA.3.AR.1.1", desc: "Apply the distributive property to multiply a one-digit number and two-digit number. Apply properties of multiplication to find a product of one-digit whole numbers." },
                    { code: "MA.3.AR.1.2", desc: "Solve one- and two-step real-world problems involving any of four operations with whole numbers." },
                    { code: "MA.3.AR.2.1", desc: "Restate a division problem as a missing factor problem using the relationship between multiplication and division." },
                    { code: "MA.3.AR.2.2", desc: "Determine and explain whether an equation involving multiplication or division is true or false." },
                    { code: "MA.3.AR.2.3", desc: "Determine the unknown whole number in a multiplication or division equation, relating three whole numbers, with the unknown in any position." },
                    { code: "MA.3.AR.3.1", desc: "Determine and explain whether a whole number from 1 to 1,000 is even or odd." },
                    { code: "MA.3.AR.3.2", desc: "Determine whether a whole number from 1 to 144 is a multiple of a given one-digit number." },
                    { code: "MA.3.AR.3.3", desc: "Identify, create and extend numerical patterns." },
                    // Measurement
                    { code: "MA.3.M.1.1", desc: "Select and use appropriate tools to measure the length of an object, the volume of liquid within a beaker and temperature." },
                    { code: "MA.3.M.1.2", desc: "Solve real-world problems involving any of the four operations with whole-number lengths, masses, weights, temperatures or liquid volumes." },
                    { code: "MA.3.M.2.1", desc: "Using analog and digital clocks tell and write time to the nearest minute using a.m. and p.m. appropriately." },
                    { code: "MA.3.M.2.2", desc: "Solve one- and two-step real-world problems involving elapsed time." },
                    // Geometric Reasoning
                    { code: "MA.3.GR.1.1", desc: "Describe and draw points, lines, line segments, rays, intersecting lines, perpendicular lines and parallel lines. Identify these in two-dimensional figures." },
                    { code: "MA.3.GR.1.2", desc: "Identify and draw quadrilaterals based on their defining attributes. Quadrilaterals include parallelograms, rhombi, rectangles, squares and trapezoids." },
                    { code: "MA.3.GR.1.3", desc: "Draw line(s) of symmetry in a two-dimensional figure and identify line-symmetric two-dimensional figures." },
                    { code: "MA.3.GR.2.1", desc: "Explore area as an attribute of a two-dimensional figure by covering the figure with unit squares without gaps or overlaps. Find areas of rectangles by counting unit squares." },
                    { code: "MA.3.GR.2.2", desc: "Find the area of a rectangle with whole-number side lengths using a visual model and a multiplication formula." },
                    { code: "MA.3.GR.2.3", desc: "Solve mathematical and real-world problems involving the perimeter and area of rectangles with whole-number side lengths using a visual model and a formula." },
                    { code: "MA.3.GR.2.4", desc: "Solve mathematical and real-world problems involving the perimeter and area of composite figures composed of non-overlapping rectangles with whole-number side lengths." },
                    // Data Analysis and Probability
                    { code: "MA.3.DP.1.1", desc: "Collect and represent numerical and categorical data with whole-number values using tables, scaled pictographs, scaled bar graphs or line plots. Use appropriate titles, labels and units." },
                    { code: "MA.3.DP.1.2", desc: "Interpret data with whole-number values represented with tables, scaled pictographs, circle graphs, scaled bar graphs or line plots by solving one- and two-step problems." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 4th Grade
        4: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.4.NSO.1.1", desc: "Express how the value of a digit in a multi-digit whole number changes if the digit moves one place to the left or right." },
                    { code: "MA.4.NSO.1.2", desc: "Read and write multi-digit whole numbers from 0 to 1,000,000 using standard form, expanded form and word form." },
                    { code: "MA.4.NSO.1.3", desc: "Plot, order and compare multi-digit whole numbers up to 1,000,000." },
                    { code: "MA.4.NSO.1.4", desc: "Round whole numbers from 0 to 10,000 to the nearest 10, 100 or 1,000." },
                    { code: "MA.4.NSO.1.5", desc: "Plot, order and compare decimals up to the hundredths." },
                    { code: "MA.4.NSO.2.1", desc: "Recall multiplication facts with factors up to 12 and related division facts with automaticity." },
                    { code: "MA.4.NSO.2.2", desc: "Multiply two whole numbers, up to three digits by up to two digits, with procedural reliability." },
                    { code: "MA.4.NSO.2.3", desc: "Multiply two whole numbers, each up to two digits, including using a standard algorithm with procedural fluency." },
                    { code: "MA.4.NSO.2.4", desc: "Divide a whole number up to four digits by a one-digit whole number with procedural reliability. Represent remainders as fractional parts of the divisor." },
                    { code: "MA.4.NSO.2.5", desc: "Explore the multiplication and division of multi-digit whole numbers using estimation, rounding and place value." },
                    { code: "MA.4.NSO.2.6", desc: "Identify the number that is one-tenth more, one-tenth less, one-hundredth more and one-hundredth less than a given number." },
                    { code: "MA.4.NSO.2.7", desc: "Explore the addition and subtraction of multi-digit numbers with decimals to the hundredths." },
                    // Fractions
                    { code: "MA.4.FR.1.1", desc: "Model and express a fraction, including mixed numbers and fractions greater than one, with the denominator 10 as an equivalent fraction with the denominator 100." },
                    { code: "MA.4.FR.1.2", desc: "Use decimal notation to represent fractions with denominators of 10 or 100, including mixed numbers and fractions greater than 1, and use fractional notation with denominators of 10 or 100 to represent decimals." },
                    { code: "MA.4.FR.1.3", desc: "Identify and generate equivalent fractions, including fractions greater than one. Describe how the numerator and denominator are affected when the equivalent fraction is created." },
                    { code: "MA.4.FR.1.4", desc: "Plot, order and compare fractions, including mixed numbers and fractions greater than one, with different numerators and different denominators." },
                    { code: "MA.4.FR.2.1", desc: "Decompose a fraction, including mixed numbers and fractions greater than one, into a sum of fractions with the same denominator in multiple ways. Demonstrate each decomposition with objects, drawings and equations." },
                    { code: "MA.4.FR.2.2", desc: "Add and subtract fractions with like denominators, including mixed numbers and fractions greater than one, with procedural reliability." },
                    { code: "MA.4.FR.2.3", desc: "Explore the addition of a fraction with denominator of 10 to a fraction with denominator of 100 using equivalent fractions." },
                    { code: "MA.4.FR.2.4", desc: "Extend previous understanding of multiplication to explore the multiplication of a fraction by a whole number or a whole number by a fraction." },
                    // Algebraic Reasoning
                    { code: "MA.4.AR.1.1", desc: "Solve real-world problems involving multiplication and division of whole numbers including problems in which remainders must be interpreted within the context." },
                    { code: "MA.4.AR.1.2", desc: "Solve real-world problems involving addition and subtraction of fractions with like denominators, including mixed numbers and fractions greater than one." },
                    { code: "MA.4.AR.1.3", desc: "Solve real-world problems involving multiplication of a fraction by a whole number or a whole number by a fraction." },
                    { code: "MA.4.AR.2.1", desc: "Determine and explain whether an equation involving any of the four operations with whole numbers is true or false." },
                    { code: "MA.4.AR.2.2", desc: "Given a mathematical or real-world context, write an equation involving multiplication or division to determine the unknown whole number with the unknown in any position." },
                    { code: "MA.4.AR.3.1", desc: "Determine factor pairs for a whole number from 0 to 144. Determine whether a whole number from 0 to 144 is prime, composite or neither." },
                    { code: "MA.4.AR.3.2", desc: "Generate, describe and extend a numerical pattern that follows a given rule." },
                    // Measurement
                    { code: "MA.4.M.1.1", desc: "Select and use appropriate tools to measure attributes of objects." },
                    { code: "MA.4.M.1.2", desc: "Convert within a single system of measurement using the units: yards, feet, inches; kilometers, meters, centimeters, millimeters; pounds, ounces; kilograms, grams; gallons, quarts, pints, cups; liter, milliliter; and hours, minutes, seconds." },
                    { code: "MA.4.M.2.1", desc: "Solve two-step real-world problems involving distances and intervals of time using any combination of the four operations." },
                    { code: "MA.4.M.2.2", desc: "Solve one- and two-step addition and subtraction real-world problems involving money using decimal notation." },
                    // Geometric Reasoning
                    { code: "MA.4.GR.1.1", desc: "Informally explore angles as an attribute of two-dimensional figures. Identify and classify angles as acute, right, obtuse, straight or reflex." },
                    { code: "MA.4.GR.1.2", desc: "Estimate angle measures. Using a protractor, measure angles in whole-number degrees and draw angles of specified measure in whole-number degrees. Demonstrate that angle measure is additive." },
                    { code: "MA.4.GR.1.3", desc: "Solve real-world and mathematical problems involving unknown whole-number angle measures. Write an equation to represent the unknown." },
                    { code: "MA.4.GR.2.1", desc: "Solve perimeter and area mathematical and real-world problems, including problems with unknown sides, for rectangles with whole-number side lengths." },
                    { code: "MA.4.GR.2.2", desc: "Solve problems involving rectangles with the same perimeter and different areas or with the same area and different perimeters." },
                    // Data Analysis and Probability
                    { code: "MA.4.DP.1.1", desc: "Collect and represent numerical data, including fractional values, using tables, stem-and-leaf plots or line plots." },
                    { code: "MA.4.DP.1.2", desc: "Determine the mode, median or range to interpret numerical data including fractional values, represented with tables, stem-and-leaf plots or line plots." },
                    { code: "MA.4.DP.1.3", desc: "Solve real-world problems involving numerical data." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 5th Grade
        5: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.5.NSO.1.1", desc: "Express how the value of a digit in a multi-digit number with decimals to the thousandths changes if the digit moves one or more places to the left or right." },
                    { code: "MA.5.NSO.1.2", desc: "Read and write multi-digit numbers with decimals to the thousandths using standard form, word form and expanded form." },
                    { code: "MA.5.NSO.1.3", desc: "Compose and decompose multi-digit numbers with decimals to the thousandths in multiple ways using the values of the digits in each place. Demonstrate the compositions or decompositions using objects, drawings and expressions or equations." },
                    { code: "MA.5.NSO.1.4", desc: "Plot, order and compare multi-digit numbers with decimals up to the thousandths." },
                    { code: "MA.5.NSO.1.5", desc: "Round multi-digit numbers with decimals to the thousandths to the nearest hundredth, tenth or whole number." },
                    { code: "MA.5.NSO.2.1", desc: "Multiply multi-digit whole numbers including using a standard algorithm with procedural fluency." },
                    { code: "MA.5.NSO.2.2", desc: "Divide multi-digit whole numbers, up to five digits by two digits, including using a standard algorithm with procedural fluency. Represent remainders as fractions." },
                    { code: "MA.5.NSO.2.3", desc: "Add and subtract multi-digit numbers with decimals to the thousandths, including using a standard algorithm with procedural fluency." },
                    { code: "MA.5.NSO.2.4", desc: "Explore the multiplication and division of multi-digit numbers with decimals to the hundredths using estimation, rounding and place value." },
                    { code: "MA.5.NSO.2.5", desc: "Multiply and divide a multi-digit number with decimals to the tenths by one-tenth and one-hundredth with procedural reliability." },
                    // Fractions
                    { code: "MA.5.FR.1.1", desc: "Given a mathematical or real-world problem, represent the division of two whole numbers as a fraction." },
                    { code: "MA.5.FR.2.1", desc: "Add and subtract fractions with unlike denominators, including mixed numbers and fractions greater than 1, with procedural reliability." },
                    { code: "MA.5.FR.2.2", desc: "Extend previous understanding of multiplication to multiply a fraction by a fraction, including mixed numbers and fractions greater than 1, with procedural reliability." },
                    { code: "MA.5.FR.2.3", desc: "When multiplying a given number by a fraction less than 1 or a fraction greater than 1, predict and explain the relative size of the product to the given number without calculating." },
                    { code: "MA.5.FR.2.4", desc: "Extend previous understanding of division to explore the division of a unit fraction by a whole number and a whole number by a unit fraction." },
                    // Algebraic Reasoning
                    { code: "MA.5.AR.1.1", desc: "Solve multi-step real-world problems involving any combination of the four operations with whole numbers, including problems in which remainders must be interpreted within the context." },
                    { code: "MA.5.AR.1.2", desc: "Solve real-world problems involving the addition, subtraction or multiplication of fractions, including mixed numbers and fractions greater than 1." },
                    { code: "MA.5.AR.1.3", desc: "Solve real-world problems involving division of a unit fraction by a whole number and a whole number by a unit fraction." },
                    { code: "MA.5.AR.2.1", desc: "Translate written real-world and mathematical descriptions into numerical expressions and numerical expressions into written mathematical descriptions." },
                    { code: "MA.5.AR.2.2", desc: "Evaluate multi-step numerical expressions using order of operations." },
                    { code: "MA.5.AR.2.3", desc: "Determine and explain whether an equation involving any of the four operations is true or false." },
                    { code: "MA.5.AR.2.4", desc: "Given a mathematical or real-world context, write an equation involving any of the four operations to determine the unknown whole number with the unknown in any position." },
                    { code: "MA.5.AR.3.1", desc: "Given a numerical pattern, identify and write a rule that can describe the pattern as an expression." },
                    { code: "MA.5.AR.3.2", desc: "Given a rule for a numerical pattern, use a two-column table to record the inputs and outputs." },
                    // Measurement
                    { code: "MA.5.M.1.1", desc: "Solve multi-step real-world problems that involve converting measurement units to equivalent measurements within a single system of measurement." },
                    { code: "MA.5.M.2.1", desc: "Solve multi-step real-world problems involving money using decimal notation." },
                    // Geometric Reasoning
                    { code: "MA.5.GR.1.1", desc: "Classify triangles or quadrilaterals into different categories based on shared defining attributes. Explain why a triangle or quadrilateral would or would not belong to a category." },
                    { code: "MA.5.GR.1.2", desc: "Identify and classify three-dimensional figures into categories based on their defining attributes. Figures are limited to right pyramids, right prisms, right circular cylinders, right circular cones and spheres." },
                    { code: "MA.5.GR.2.1", desc: "Find the perimeter and area of a rectangle with fractional or decimal side lengths using visual models and formulas." },
                    { code: "MA.5.GR.3.1", desc: "Explore volume as an attribute of three-dimensional figures by packing them with unit cubes without gaps. Find the volume of a right rectangular prism with whole-number side lengths by counting unit cubes." },
                    { code: "MA.5.GR.3.2", desc: "Find the volume of a right rectangular prism with whole-number side lengths using a visual model and a formula." },
                    { code: "MA.5.GR.3.3", desc: "Solve real-world problems involving the volume of right rectangular prisms, including problems with an unknown edge length, with whole-number edge lengths using a visual model or a formula. Write an equation with a variable for the unknown to represent the problem." },
                    { code: "MA.5.GR.4.1", desc: "Identify the origin and axes in the coordinate system. Plot and label ordered pairs in the first quadrant of the coordinate plane." },
                    { code: "MA.5.GR.4.2", desc: "Represent mathematical and real-world problems by plotting points in the first quadrant of the coordinate plane and interpret coordinate values of points in the context of the situation." },
                    // Data Analysis and Probability
                    { code: "MA.5.DP.1.1", desc: "Collect and represent numerical data, including fractional and decimal values, using tables, line graphs or line plots." },
                    { code: "MA.5.DP.1.2", desc: "Interpret numerical data, with whole-number values, represented with tables or line plots by determining the mean, mode, median or range." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 6th Grade
        6: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.6.NSO.1.1", desc: "Extend previous understanding of numbers to define rational numbers. Plot, order and compare rational numbers." },
                    { code: "MA.6.NSO.1.2", desc: "Given a mathematical or real-world context, represent quantities that have opposite direction using rational numbers. Compare them on a number line and explain the meaning of zero within its context." },
                    { code: "MA.6.NSO.1.3", desc: "Given a mathematical or real-world context, interpret the absolute value of a number as the distance from zero on a number line. Find the absolute value of rational numbers." },
                    { code: "MA.6.NSO.1.4", desc: "Solve mathematical and real-world problems involving absolute value, including the comparison of absolute value." },
                    { code: "MA.6.NSO.2.1", desc: "Multiply and divide positive multi-digit numbers with decimals to the thousandths, including using a standard algorithm with procedural fluency." },
                    { code: "MA.6.NSO.2.2", desc: "Extend previous understanding of multiplication and division to compute products and quotients of positive fractions by positive fractions, including mixed numbers, with procedural fluency." },
                    { code: "MA.6.NSO.2.3", desc: "Solve multi-step real-world problems involving any of the four operations with positive multi-digit decimals or positive fractions, including mixed numbers." },
                    { code: "MA.6.NSO.3.1", desc: "Given a mathematical or real-world context, find the greatest common factor and least common multiple of two whole numbers." },
                    { code: "MA.6.NSO.3.2", desc: "Rewrite the sum of two composite whole numbers having a common factor, as a common factor multiplied by the sum of two whole numbers." },
                    { code: "MA.6.NSO.3.3", desc: "Evaluate positive rational numbers and integers with natural number exponents." },
                    { code: "MA.6.NSO.3.4", desc: "Express composite whole numbers as a product of prime factors with natural number exponents." },
                    { code: "MA.6.NSO.3.5", desc: "Rewrite positive rational numbers in different but equivalent forms including fractions, terminating decimals and percentages." },
                    { code: "MA.6.NSO.4.1", desc: "Apply and extend previous understandings of operations with whole numbers to add and subtract integers with procedural fluency." },
                    { code: "MA.6.NSO.4.2", desc: "Apply and extend previous understandings of operations with whole numbers to multiply and divide integers with procedural fluency." },
                    // Algebraic Reasoning
                    { code: "MA.6.AR.1.1", desc: "Given a mathematical or real-world context, translate written descriptions into algebraic expressions and translate algebraic expressions into written descriptions." },
                    { code: "MA.6.AR.1.2", desc: "Translate a real-world written description into an algebraic inequality in the form of x > a, x < a, x \u2265 a, or x \u2264 a. Represent the inequality on a number line." },
                    { code: "MA.6.AR.1.3", desc: "Evaluate algebraic expressions using substitution and order of operations." },
                    { code: "MA.6.AR.1.4", desc: "Apply the properties of operations to generate equivalent algebraic expressions with integer coefficients." },
                    { code: "MA.6.AR.2.1", desc: "Given an equation or inequality and a specified set of integer values, determine which values make the equation or inequality true or false." },
                    { code: "MA.6.AR.2.2", desc: "Write and solve one-step equations in one variable within a mathematical or real-world context using addition and subtraction, where all terms and solutions are integers." },
                    { code: "MA.6.AR.2.3", desc: "Write and solve one-step equations in one variable within a mathematical or real-world context using multiplication and division, where all terms and solutions are integers." },
                    { code: "MA.6.AR.2.4", desc: "Determine the unknown decimal or fraction in an equation involving any of the four operations, relating three numbers, with the unknown in any position." },
                    { code: "MA.6.AR.3.1", desc: "Given a real-world context, write and interpret ratios to show the relative sizes of two quantities using appropriate notation: a/b, a to b, or a : b where b \u2260 0." },
                    { code: "MA.6.AR.3.2", desc: "Given a real-world context, determine a rate for a ratio of quantities with different units. Calculate and interpret the corresponding unit rate." },
                    { code: "MA.6.AR.3.3", desc: "Extend previous understanding of fractions and numerical patterns to generate or complete a two- or three-column table to display equivalent part-to-part ratios and part-to-part-to-whole ratios." },
                    { code: "MA.6.AR.3.4", desc: "Apply ratio relationships to solve mathematical and real-world problems involving percentages using the relationship between two quantities." },
                    { code: "MA.6.AR.3.5", desc: "Solve mathematical and real-world problems involving ratios, rates and unit rates, including comparisons, mixtures, ratios of lengths and conversions within the same measurement system." },
                    // Geometric Reasoning
                    { code: "MA.6.GR.1.1", desc: "Extend previous understanding of the coordinate plane to plot rational number ordered pairs in all four quadrants and on both axes. Identify the X- or Y-axis as the line of reflection when two ordered pairs have an opposite X- or Y-coordinate." },
                    { code: "MA.6.GR.1.2", desc: "Find distances between ordered pairs, limited to the same X-coordinate or the same Y-coordinate, represented on the coordinate plane." },
                    { code: "MA.6.GR.1.3", desc: "Solve mathematical and real-world problems by plotting points on a coordinate plane, including finding the perimeter or area of a rectangle." },
                    { code: "MA.6.GR.2.1", desc: "Derive a formula for the area of a right triangle using a rectangle. Apply a formula to find the area of a triangle." },
                    { code: "MA.6.GR.2.2", desc: "Solve mathematical and real-world problems involving the area of quadrilaterals and composite figures by decomposing them into triangles or rectangles." },
                    { code: "MA.6.GR.2.3", desc: "Solve mathematical and real-world problems involving the volume of right rectangular prisms with positive rational number edge lengths using a visual model and a formula." },
                    { code: "MA.6.GR.2.4", desc: "Given a mathematical or real-world context, find the surface area of right rectangular prisms and right rectangular pyramids using the figure's net." },
                    // Data Analysis and Probability
                    { code: "MA.6.DP.1.1", desc: "Recognize and formulate a statistical question that would generate numerical data." },
                    { code: "MA.6.DP.1.2", desc: "Given a numerical data set within a real-world context, find and interpret mean, median, mode and range." },
                    { code: "MA.6.DP.1.3", desc: "Given a box plot within a real-world context, determine the minimum, the lower quartile, the median, the upper quartile and the maximum. Use this summary of the data to describe the spread and distribution of the data." },
                    { code: "MA.6.DP.1.4", desc: "Given a histogram or line plot within a real-world context, qualitatively describe and interpret the spread and distribution of the data, including any symmetry, skewness, gaps, clusters, outliers and the range." },
                    { code: "MA.6.DP.1.5", desc: "Create box plots and histograms to represent sets of numerical data within real-world contexts." },
                    { code: "MA.6.DP.1.6", desc: "Given a real-world scenario, determine and describe how changes in data values impact measures of center and variation." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 7th Grade
        7: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.7.NSO.1.1", desc: "Know and apply the Laws of Exponents to evaluate numerical expressions and generate equivalent numerical expressions, limited to whole-number exponents and rational number bases." },
                    { code: "MA.7.NSO.1.2", desc: "Rewrite rational numbers in different but equivalent forms including fractions, mixed numbers, repeating decimals and percentages to solve mathematical and real-world problems." },
                    { code: "MA.7.NSO.2.1", desc: "Solve mathematical problems using multi-step order of operations with rational numbers including grouping symbols, whole-number exponents and absolute value." },
                    { code: "MA.7.NSO.2.2", desc: "Add, subtract, multiply and divide rational numbers with procedural fluency." },
                    { code: "MA.7.NSO.2.3", desc: "Solve real-world problems involving any of the four operations with rational numbers." },
                    // Algebraic Reasoning
                    { code: "MA.7.AR.1.1", desc: "Apply properties of operations to add and subtract linear expressions with rational coefficients." },
                    { code: "MA.7.AR.1.2", desc: "Determine whether two linear expressions are equivalent." },
                    { code: "MA.7.AR.2.1", desc: "Write and solve one-step inequalities in one variable within a mathematical context and represent solutions algebraically or graphically." },
                    { code: "MA.7.AR.2.2", desc: "Write and solve two-step equations in one variable within a mathematical or real-world context, where all terms are rational numbers." },
                    { code: "MA.7.AR.3.1", desc: "Apply previous understanding of percentages and ratios to solve multi-step real-world percent problems." },
                    { code: "MA.7.AR.3.2", desc: "Apply previous understanding of ratios to solve real-world problems involving proportions." },
                    { code: "MA.7.AR.3.3", desc: "Solve mathematical and real-world problems involving the conversion of units across different measurement systems." },
                    { code: "MA.7.AR.4.1", desc: "Determine whether two quantities have a proportional relationship by examining a table, graph or written description." },
                    { code: "MA.7.AR.4.2", desc: "Determine the constant of proportionality within a mathematical or real-world context given a table, graph or written description of a proportional relationship." },
                    { code: "MA.7.AR.4.3", desc: "Given a mathematical or real-world context, graph proportional relationships from a table, equation or a written description." },
                    { code: "MA.7.AR.4.4", desc: "Given any representation of a proportional relationship, translate the representation to a written description, table or equation." },
                    { code: "MA.7.AR.4.5", desc: "Solve real-world problems involving proportional relationships." },
                    // Geometric Reasoning
                    { code: "MA.7.GR.1.1", desc: "Apply formulas to find the areas of trapezoids, parallelograms and rhombi." },
                    { code: "MA.7.GR.1.2", desc: "Solve mathematical or real-world problems involving the area of polygons or composite figures by decomposing them into triangles or quadrilaterals." },
                    { code: "MA.7.GR.1.3", desc: "Explore the proportional relationship between circumferences and diameters of circles. Apply a formula for the circumference of a circle to solve mathematical and real-world problems." },
                    { code: "MA.7.GR.1.4", desc: "Explore and apply a formula to find the area of a circle to solve mathematical and real-world problems." },
                    { code: "MA.7.GR.1.5", desc: "Solve mathematical and real-world problems involving dimensions and areas of geometric figures, including scale drawings and scale factors." },
                    { code: "MA.7.GR.2.1", desc: "Given a mathematical or real-world context, find the surface area of a right circular cylinder using the figure's net." },
                    { code: "MA.7.GR.2.2", desc: "Solve real-world problems involving surface area of right circular cylinders." },
                    { code: "MA.7.GR.2.3", desc: "Solve mathematical and real-world problems involving volume of right circular cylinders." },
                    // Data Analysis and Probability
                    { code: "MA.7.DP.1.1", desc: "Determine an appropriate measure of center or measure of variation to summarize numerical data, represented numerically or graphically, taking into consideration the context and any outliers." },
                    { code: "MA.7.DP.1.2", desc: "Given two numerical or graphical representations of data, use the measure(s) of center and measure(s) of variability to make comparisons, interpret results and draw conclusions about the two populations." },
                    { code: "MA.7.DP.1.3", desc: "Given categorical data from a random sample, use proportional relationships to make predictions about a population." },
                    { code: "MA.7.DP.1.4", desc: "Use proportional reasoning to construct, display and interpret data in circle graphs." },
                    { code: "MA.7.DP.1.5", desc: "Given a real-world numerical or categorical data set, choose and create an appropriate graphical representation." },
                    { code: "MA.7.DP.2.1", desc: "Determine the sample space for a simple experiment." },
                    { code: "MA.7.DP.2.2", desc: "Given the probability of a chance event, interpret the likelihood of it occurring. Compare the probabilities of chance events." },
                    { code: "MA.7.DP.2.3", desc: "Find the theoretical probability of an event related to a simple experiment." },
                    { code: "MA.7.DP.2.4", desc: "Use a simulation of a simple experiment to find experimental probabilities and compare them to theoretical probabilities." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 8th Grade
        8: {
            math: {
                type: "both",
                skills: [],
                standards: [
                    // Number Sense and Operations
                    { code: "MA.8.NSO.1.1", desc: "Extend previous understanding of rational numbers to define irrational numbers within the real number system. Locate an approximate value of a numerical expression involving irrational numbers on a number line." },
                    { code: "MA.8.NSO.1.2", desc: "Plot, order and compare rational and irrational numbers, represented in various forms." },
                    { code: "MA.8.NSO.1.3", desc: "Extend previous understanding of the Laws of Exponents to include integer exponents. Apply the Laws of Exponents to evaluate numerical expressions and generate equivalent numerical expressions, limited to integer exponents and rational number bases, with procedural fluency." },
                    { code: "MA.8.NSO.1.4", desc: "Express numbers in scientific notation to represent and approximate very large or very small quantities. Determine how many times larger or smaller one number is compared to a second number." },
                    { code: "MA.8.NSO.1.5", desc: "Add, subtract, multiply and divide numbers expressed in scientific notation with procedural fluency." },
                    { code: "MA.8.NSO.1.6", desc: "Solve real-world problems involving operations with numbers expressed in scientific notation." },
                    { code: "MA.8.NSO.1.7", desc: "Solve multi-step mathematical and real-world problems involving the order of operations with rational numbers including exponents and radicals." },
                    // Algebraic Reasoning
                    { code: "MA.8.AR.1.1", desc: "Apply the Laws of Exponents to generate equivalent algebraic expressions, limited to integer exponents and monomial bases." },
                    { code: "MA.8.AR.1.2", desc: "Apply properties of operations to multiply two linear expressions with rational coefficients." },
                    { code: "MA.8.AR.1.3", desc: "Rewrite the sum of two algebraic expressions having a common monomial factor as a common factor multiplied by the sum of two algebraic expressions." },
                    { code: "MA.8.AR.2.1", desc: "Solve multi-step linear equations in one variable, with rational number coefficients. Include equations with variables on both sides." },
                    { code: "MA.8.AR.2.2", desc: "Solve two-step linear inequalities in one variable and represent solutions algebraically and graphically." },
                    { code: "MA.8.AR.2.3", desc: "Given an equation in the form of x\u00b2=p and x\u00b3=q, where p is a whole number and q is an integer, determine the real solutions." },
                    { code: "MA.8.AR.3.1", desc: "Determine if a linear relationship is also a proportional relationship." },
                    { code: "MA.8.AR.3.2", desc: "Given a table, graph or written description of a linear relationship, determine the slope." },
                    { code: "MA.8.AR.3.3", desc: "Given a table, graph or written description of a linear relationship, write an equation in slope-intercept form." },
                    { code: "MA.8.AR.3.4", desc: "Given a mathematical or real-world context, graph a two-variable linear equation from a written description, a table or an equation in slope-intercept form." },
                    { code: "MA.8.AR.3.5", desc: "Given a real-world context, determine and interpret the slope and y-intercept of a two-variable linear equation from a written description, a table, a graph or an equation in slope-intercept form." },
                    { code: "MA.8.AR.4.1", desc: "Given a system of two linear equations and a specified set of possible solutions, determine which ordered pairs satisfy the system of linear equations." },
                    { code: "MA.8.AR.4.2", desc: "Given a system of two linear equations represented graphically on the same coordinate plane, determine whether there is one solution, no solution or infinitely many solutions." },
                    { code: "MA.8.AR.4.3", desc: "Given a mathematical or real-world context, solve systems of two linear equations by graphing." },
                    // Functions
                    { code: "MA.8.F.1.1", desc: "Given a set of ordered pairs, a table, a graph or mapping diagram, determine whether the relationship is a function. Identify the domain and range of the relation." },
                    { code: "MA.8.F.1.2", desc: "Given a function defined by a graph or an equation, determine whether the function is a linear function. Given an input-output table, determine whether it could represent a linear function." }
                ]
            },
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
        FL: "FL Benchmarks"
    };
    return frameworks[stateCode] || "State Standards";
}
