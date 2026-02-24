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
                    { code: "K.CC.1", desc: "Count to 100 by ones and by tens." },
                    { code: "K.CC.2", desc: "Count forward beginning from a given number within the known sequence (instead of having to begin at 1)." },
                    { code: "K.CC.3", desc: "Write numbers from 0 to 20. Represent a number of objects with a written numeral 0–20 (with 0 representing a count of no objects)." },
                    { code: "K.CC.4", desc: "Understand the relationship between numbers and quantities; connect counting to cardinality." },
                    { code: "K.CC.5", desc: "Count to answer 'how many?' questions about as many as 20 things arranged in a line, a rectangular array, or a circle, or as many as 10 things in a scattered configuration." },
                    { code: "K.CC.6", desc: "Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group, e.g., by using matching and counting strategies." },
                    { code: "K.CC.7", desc: "Compare two numbers between 1 and 10 presented as written numerals." },
                    // Operations and Algebraic Thinking
                    { code: "K.OA.1", desc: "Represent addition and subtraction with objects, fingers, mental images, drawings, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations." },
                    { code: "K.OA.2", desc: "Solve addition and subtraction word problems, and add and subtract within 10." },
                    { code: "K.OA.3", desc: "Decompose numbers less than or equal to 10 into pairs in more than one way, e.g., by using objects or drawings, and record each decomposition by a drawing or equation." },
                    { code: "K.OA.4", desc: "For any number from 1 to 9, find the number that makes 10 when added to the given number, e.g., by using objects or drawings, and record the answer with a drawing or equation." },
                    { code: "K.OA.5", desc: "Fluently add and subtract within 5." },
                    // Number and Operations in Base Ten
                    { code: "K.NBT.1", desc: "Compose and decompose numbers from 11 to 19 into ten ones and some further ones, e.g., by using objects or drawings, and record each composition or decomposition by a drawing or equation." },
                    // Measurement and Data
                    { code: "K.MD.1", desc: "Describe measurable attributes of objects, such as length or weight. Describe several measurable attributes of a single object." },
                    { code: "K.MD.2", desc: "Directly compare two objects with a measurable attribute in common, to see which object has 'more of'/'less of' the attribute, and describe the difference." },
                    { code: "K.MD.3", desc: "Classify objects into given categories; count the numbers of objects in each category and sort the categories by count." },
                    // Geometry
                    { code: "K.G.1", desc: "Describe objects in the environment using names of shapes, and describe the relative positions of these objects using terms such as above, below, beside, in front of, behind, and next to." },
                    { code: "K.G.2", desc: "Correctly name shapes regardless of their orientations or overall size." },
                    { code: "K.G.3", desc: "Identify shapes as two-dimensional (lying in a plane, 'flat') or three-dimensional ('solid')." },
                    { code: "K.G.4", desc: "Analyze and compare two- and three-dimensional shapes, in different sizes and orientations, using informal language to describe their similarities, differences, parts and other attributes." },
                    { code: "K.G.5", desc: "Model shapes in the world by building shapes from components (e.g., sticks and clay balls) and drawing shapes." },
                    { code: "K.G.6", desc: "Compose simple shapes to form larger shapes." }
                ]
            },
            ela: {
                type: "both",
                skills: [],
                standards: []  // ELA data coming later
            }
        },
        // 1st Grade - Has BOTH skills (Spectrum) and standards (Common Core)
        1: {
            math: {
                type: "both",
                skills: [
                    // Chapter 1: Adding and Subtracting through 10
                    { name: "Counting On" },
                    { name: "Counting Back" },
                    { name: "Adding through 6" },
                    { name: "Subtracting from 6" },
                    { name: "Adding through 8" },
                    { name: "Subtracting from 8" },
                    { name: "Adding through 10" },
                    { name: "Subtracting from 10" },
                    { name: "Adding Doubles" },
                    { name: "Adding Doubles Plus 1" },
                    { name: "Making 10 to Add" },
                    // Chapter 2: Adding and Subtracting through 20
                    { name: "Adding through 12" },
                    { name: "Subtracting from 12" },
                    { name: "Adding through 14" },
                    { name: "Subtracting from 14" },
                    { name: "Adding through 16" },
                    { name: "Subtracting from 16" },
                    { name: "Adding through 18" },
                    { name: "Subtracting from 18" },
                    { name: "Adding through 20" },
                    { name: "Subtracting from 20" },
                    // Chapter 3: Place Value and Number Sense
                    { name: "Place Value: Tens and Ones" },
                    { name: "Writing Numbers in Expanded Form" },
                    { name: "Comparing Numbers to 100" },
                    { name: "Ordering Numbers" },
                    { name: "Skip Counting by 2s" },
                    { name: "Skip Counting by 5s" },
                    { name: "Skip Counting by 10s" },
                    { name: "Counting to 120" },
                    // Chapter 4: 2-Digit Addition and Subtraction
                    { name: "Adding 2-Digit and 1-Digit Numbers" },
                    { name: "Adding Multiples of 10" },
                    { name: "Adding 2-Digit Numbers" },
                    { name: "Subtracting Multiples of 10" },
                    // Chapter 5: Measurement and Data
                    { name: "Measuring Length with Non-Standard Units" },
                    { name: "Comparing Lengths" },
                    { name: "Telling Time to the Hour" },
                    { name: "Telling Time to the Half Hour" },
                    { name: "Reading a Tally Chart" },
                    { name: "Reading a Bar Graph" },
                    { name: "Reading a Pictograph" },
                    // Chapter 6: Geometry
                    { name: "Identifying 2-D Shapes" },
                    { name: "Identifying 3-D Shapes" },
                    { name: "Equal Shares: Halves and Fourths" }
                ],
                standards: [
                    // Operations and Algebraic Thinking
                    { code: "1.OA.1", desc: "Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions." },
                    { code: "1.OA.2", desc: "Solve word problems that call for addition of three whole numbers whose sum is less than or equal to 20." },
                    { code: "1.OA.3", desc: "Apply properties of operations as strategies to add and subtract (e.g., commutative and associative properties)." },
                    { code: "1.OA.4", desc: "Understand subtraction as an unknown-addend problem. For example, subtract 10 – 8 by finding the number that makes 10 when added to 8." },
                    { code: "1.OA.5", desc: "Relate counting to addition and subtraction (e.g., by counting on 2 to add 2)." },
                    { code: "1.OA.6", desc: "Add and subtract within 20, demonstrating fluency for addition and subtraction within 10. Use strategies such as making ten, decomposing a number, and using the relationship between addition and subtraction." },
                    { code: "1.OA.7", desc: "Understand the meaning of the equal sign, and determine if equations involving addition and subtraction are true or false." },
                    { code: "1.OA.8", desc: "Determine the unknown whole number in an addition or subtraction equation relating three whole numbers." },
                    // Number and Operations in Base Ten
                    { code: "1.NBT.1", desc: "Count to 120, starting at any number less than 120. In this range, read and write numerals and represent a number of objects with a written numeral." },
                    { code: "1.NBT.2", desc: "Understand that the two digits of a two-digit number represent amounts of tens and ones." },
                    { code: "1.NBT.3", desc: "Compare two two-digit numbers based on meanings of the tens and ones digits, recording the results of comparisons with the symbols >, =, and <." },
                    { code: "1.NBT.4", desc: "Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10." },
                    { code: "1.NBT.5", desc: "Given a two-digit number, mentally find 10 more or 10 less than the number, without having to count." },
                    { code: "1.NBT.6", desc: "Subtract multiples of 10 in the range 10–90 from multiples of 10 in the range 10–90." },
                    // Measurement and Data
                    { code: "1.MD.1", desc: "Order three objects by length; compare the lengths of two objects indirectly by using a third object." },
                    { code: "1.MD.2", desc: "Express the length of an object as a whole number of length units by laying multiple copies of a shorter object end to end." },
                    { code: "1.MD.3", desc: "Tell and write time in hours and half-hours using analog and digital clocks." },
                    { code: "1.MD.4", desc: "Organize, represent, and interpret data with up to three categories; ask and answer questions about the total number of data points." },
                    // Geometry
                    { code: "1.G.1", desc: "Distinguish between defining attributes (e.g., triangles are closed and three-sided) versus non-defining attributes (e.g., color, orientation, overall size)." },
                    { code: "1.G.2", desc: "Compose two-dimensional shapes or three-dimensional shapes to create a composite shape, and compose new shapes from the composite shape." },
                    { code: "1.G.3", desc: "Partition circles and rectangles into two and four equal shares, describe the shares using words halves, fourths, and quarters." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 2nd Grade - Has BOTH skills (Spectrum) and standards (Common Core)
        2: {
            math: {
                type: "both",
                skills: [
                    // Chapter 1: Addition and Subtraction
                    { name: "Adding 2-Digit Numbers with Regrouping" },
                    { name: "Subtracting 2-Digit Numbers with Regrouping" },
                    { name: "Adding 3-Digit Numbers" },
                    { name: "Subtracting 3-Digit Numbers" },
                    { name: "Adding 3 or More Numbers" },
                    { name: "Mental Math: Adding Tens" },
                    { name: "Mental Math: Subtracting Tens" },
                    // Chapter 2: Place Value
                    { name: "Hundreds, Tens, and Ones" },
                    { name: "Place Value to 1,000" },
                    { name: "Comparing 3-Digit Numbers" },
                    { name: "Ordering Numbers to 1,000" },
                    { name: "Even and Odd Numbers" },
                    // Chapter 3: Multiplication and Division Readiness
                    { name: "Skip Counting by 2s" },
                    { name: "Skip Counting by 5s" },
                    { name: "Skip Counting by 10s" },
                    { name: "Arrays" },
                    // Chapter 4: Measurement and Data
                    { name: "Measuring in Inches" },
                    { name: "Measuring in Centimeters" },
                    { name: "Comparing Lengths" },
                    { name: "Telling Time to the Quarter Hour" },
                    { name: "Telling Time to the Nearest 5 Minutes" },
                    { name: "Money: Counting Coins" },
                    { name: "Money: Bills and Coins" },
                    { name: "Reading a Bar Graph" },
                    { name: "Reading a Line Plot" },
                    // Chapter 5: Geometry
                    { name: "Identifying Quadrilaterals" },
                    { name: "Partitioning Shapes into Halves, Thirds, and Fourths" }
                ],
                standards: [
                    // Operations and Algebraic Thinking
                    { code: "2.OA.1", desc: "Use addition and subtraction within 100 to solve one- and two-step word problems involving situations of adding to, taking from, putting together, taking apart, and comparing." },
                    { code: "2.OA.2", desc: "Fluently add and subtract within 20 using mental strategies. By end of Grade 2, know from memory all sums of two one-digit numbers." },
                    { code: "2.OA.3", desc: "Determine whether a group of objects has an odd or even number of members; write an equation to express an even number as a sum of two equal addends." },
                    { code: "2.OA.4", desc: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns; write an equation to express the total." },
                    // Number and Operations in Base Ten
                    { code: "2.NBT.1", desc: "Understand that the three digits of a three-digit number represent amounts of hundreds, tens, and ones." },
                    { code: "2.NBT.3", desc: "Read and write numbers to 1000 using base-ten numerals, number names, and expanded form." },
                    { code: "2.NBT.4", desc: "Compare two three-digit numbers based on meanings of the hundreds, tens, and ones digits, using >, =, and < symbols." },
                    { code: "2.NBT.5", desc: "Fluently add and subtract within 100 using strategies based on place value, properties of operations, and/or the relationship between addition and subtraction." },
                    { code: "2.NBT.7", desc: "Add and subtract within 1000, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction." },
                    // Measurement and Data
                    { code: "2.MD.1", desc: "Measure the length of an object by selecting and using appropriate tools such as rulers, yardsticks, meter sticks, and measuring tapes." },
                    { code: "2.MD.7", desc: "Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m." },
                    { code: "2.MD.8", desc: "Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies, using $ and ¢ symbols appropriately." },
                    // Geometry
                    { code: "2.G.1", desc: "Recognize and draw shapes having specified attributes, such as a given number of angles or a given number of equal faces. Identify triangles, quadrilaterals, pentagons, hexagons, and cubes." },
                    { code: "2.G.3", desc: "Partition circles and rectangles into two, three, or four equal shares, describe the shares using the words halves, thirds, half of, a third of, etc." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 3rd Grade - Has BOTH skills (Spectrum) and standards (Common Core)
        3: {
            math: {
                type: "both",
                skills: [
                    // Chapter 1: Addition and Subtraction
                    { name: "Adding 4-Digit Numbers" },
                    { name: "Subtracting 4-Digit Numbers" },
                    { name: "Estimating Sums and Differences" },
                    { name: "Rounding to the Nearest 10 and 100" },
                    // Chapter 2: Multiplication
                    { name: "Multiplying by 0 and 1" },
                    { name: "Multiplying by 2 and 3" },
                    { name: "Multiplying by 4 and 5" },
                    { name: "Multiplying by 6 and 7" },
                    { name: "Multiplying by 8 and 9" },
                    { name: "Multiplying by 10, 11, and 12" },
                    { name: "Multiplication Properties" },
                    // Chapter 3: Division
                    { name: "Dividing by 2 and 3" },
                    { name: "Dividing by 4 and 5" },
                    { name: "Dividing by 6 and 7" },
                    { name: "Dividing by 8 and 9" },
                    { name: "Dividing by 10, 11, and 12" },
                    { name: "Fact Families: Multiplication and Division" },
                    // Chapter 4: Fractions
                    { name: "Understanding Fractions" },
                    { name: "Fractions on a Number Line" },
                    { name: "Equivalent Fractions" },
                    { name: "Comparing Fractions" },
                    // Chapter 5: Measurement and Data
                    { name: "Telling Time to the Minute" },
                    { name: "Elapsed Time" },
                    { name: "Measuring Liquid Volume" },
                    { name: "Measuring Mass" },
                    { name: "Perimeter" },
                    { name: "Area" },
                    { name: "Reading a Scaled Bar Graph" },
                    // Chapter 6: Geometry
                    { name: "Quadrilaterals" },
                    { name: "Partitioning Shapes into Equal Areas" }
                ],
                standards: [
                    // Operations and Algebraic Thinking
                    { code: "3.OA.1", desc: "Interpret products of whole numbers, e.g., interpret 5 × 7 as the total number of objects in 5 groups of 7 objects each." },
                    { code: "3.OA.3", desc: "Use multiplication and division within 100 to solve word problems in situations involving equal groups, arrays, and measurement quantities." },
                    { code: "3.OA.5", desc: "Apply properties of operations as strategies to multiply and divide (commutative, associative, and distributive properties)." },
                    { code: "3.OA.7", desc: "Fluently multiply and divide within 100, using strategies such as the relationship between multiplication and division. By the end of Grade 3, know from memory all products of two one-digit numbers." },
                    { code: "3.OA.8", desc: "Solve two-step word problems using the four operations. Represent these problems using equations with a letter standing for the unknown quantity." },
                    // Number and Operations in Base Ten
                    { code: "3.NBT.1", desc: "Use place value understanding to round whole numbers to the nearest 10 or 100." },
                    { code: "3.NBT.2", desc: "Fluently add and subtract within 1000 using strategies and algorithms based on place value, properties of operations, and/or the relationship between addition and subtraction." },
                    { code: "3.NBT.3", desc: "Multiply one-digit whole numbers by multiples of 10 in the range 10–90 using strategies based on place value and properties of operations." },
                    // Number and Operations — Fractions
                    { code: "3.NF.1", desc: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b." },
                    { code: "3.NF.2", desc: "Understand a fraction as a number on the number line; represent fractions on a number line diagram." },
                    { code: "3.NF.3", desc: "Explain equivalence of fractions in special cases, and compare fractions by reasoning about their size." },
                    // Measurement and Data
                    { code: "3.MD.1", desc: "Tell and write time to the nearest minute and measure time intervals in minutes. Solve word problems involving addition and subtraction of time intervals in minutes." },
                    { code: "3.MD.5", desc: "Recognize area as an attribute of plane figures and understand concepts of area measurement." },
                    { code: "3.MD.7", desc: "Relate area to the operations of multiplication and addition." },
                    { code: "3.MD.8", desc: "Solve real world and mathematical problems involving perimeters of polygons." },
                    // Geometry
                    { code: "3.G.1", desc: "Understand that shapes in different categories may share attributes, and that the shared attributes can define a larger category. Recognize rhombuses, rectangles, and squares as examples of quadrilaterals." }
                ]
            },
            ela: { type: "both", skills: [], standards: [] }
        },
        // 4th Grade - Has BOTH skills (Spectrum) and standards (Common Core)
        4: {
            math: {
                type: "both",
                skills: [
                    // Chapter 1: Place Value and Operations
                    { name: "Place Value to 1,000,000" },
                    { name: "Comparing and Ordering Large Numbers" },
                    { name: "Rounding to Larger Place Values" },
                    { name: "Adding Large Numbers" },
                    { name: "Subtracting Large Numbers" },
                    // Chapter 2: Multiplication and Division
                    { name: "Multiplying by 1-Digit Numbers" },
                    { name: "Multiplying by 2-Digit Numbers" },
                    { name: "Dividing by 1-Digit Numbers" },
                    { name: "Long Division" },
                    { name: "Division with Remainders" },
                    { name: "Multi-Step Word Problems" },
                    // Chapter 3: Fractions
                    { name: "Equivalent Fractions" },
                    { name: "Simplifying Fractions" },
                    { name: "Comparing Fractions" },
                    { name: "Adding Fractions with Like Denominators" },
                    { name: "Subtracting Fractions with Like Denominators" },
                    { name: "Mixed Numbers and Improper Fractions" },
                    // Chapter 4: Decimals
                    { name: "Tenths and Hundredths" },
                    { name: "Comparing Decimals" },
                    { name: "Adding and Subtracting Decimals" },
                    // Chapter 5: Measurement and Data
                    { name: "Customary Units of Length" },
                    { name: "Customary Units of Weight" },
                    { name: "Customary Units of Capacity" },
                    { name: "Metric Units" },
                    { name: "Perimeter and Area" },
                    { name: "Angles" },
                    { name: "Lines of Symmetry" },
                    // Chapter 6: Geometry
                    { name: "Types of Lines and Angles" },
                    { name: "Classifying Triangles" },
                    { name: "Classifying Quadrilaterals" }
                ],
                standards: [
                    // Operations and Algebraic Thinking
                    { code: "4.OA.1", desc: "Interpret a multiplication equation as a comparison, e.g., interpret 35 = 5 × 7 as a statement that 35 is 5 times as many as 7 and 7 times as many as 5." },
                    { code: "4.OA.3", desc: "Solve multistep word problems posed with whole numbers and having whole-number answers using the four operations, including problems in which remainders must be interpreted." },
                    { code: "4.OA.4", desc: "Find all factor pairs for a whole number in the range 1–100. Recognize that a whole number is a multiple of each of its factors. Determine whether a given whole number is prime or composite." },
                    // Number and Operations in Base Ten
                    { code: "4.NBT.1", desc: "Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right." },
                    { code: "4.NBT.4", desc: "Fluently add and subtract multi-digit whole numbers using the standard algorithm." },
                    { code: "4.NBT.5", desc: "Multiply a whole number of up to four digits by a one-digit whole number, and multiply two two-digit numbers, using strategies based on place value and the properties of operations." },
                    { code: "4.NBT.6", desc: "Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division." },
                    // Number and Operations — Fractions
                    { code: "4.NF.1", desc: "Explain why a fraction a/b is equivalent to a fraction (n × a)/(n × b) by using visual fraction models, with attention to how the number and size of the parts differ even though the two fractions themselves are the same size." },
                    { code: "4.NF.2", desc: "Compare two fractions with different numerators and different denominators by creating common denominators or numerators, or by comparing to a benchmark fraction such as 1/2." },
                    { code: "4.NF.3", desc: "Understand a fraction a/b with a > 1 as a sum of fractions 1/b. Add and subtract mixed numbers with like denominators." },
                    { code: "4.NF.6", desc: "Use decimal notation for fractions with denominators 10 or 100." },
                    // Measurement and Data
                    { code: "4.MD.1", desc: "Know relative sizes of measurement units within one system of units including km, m, cm; kg, g; lb, oz.; l, ml; hr, min, sec." },
                    { code: "4.MD.3", desc: "Apply the area and perimeter formulas for rectangles in real world and mathematical problems." },
                    { code: "4.MD.5", desc: "Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint, and understand concepts of angle measurement." },
                    // Geometry
                    { code: "4.G.1", desc: "Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines. Identify these in two-dimensional figures." },
                    { code: "4.G.2", desc: "Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size." }
                ]
            },
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
