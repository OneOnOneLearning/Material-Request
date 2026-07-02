/**
 * Common Core State Standards (CCSS) — Math & ELA, Grades K–8
 * Format: { code: "K.CC.A.1", desc: "Description text." }
 */

const CC_MATH_STANDARDS = {
    K: [
        // Counting & Cardinality
        { code: "K.CC.A.1", desc: "Count to 100 by ones and by tens." },
        { code: "K.CC.A.2", desc: "Count forward beginning from a given number within the known sequence (instead of having to begin at 1)." },
        { code: "K.CC.A.3", desc: "Write numbers from 0 to 20. Represent a number of objects with a written numeral 0–20 (with 0 representing a count of no objects)." },
        { code: "K.CC.B.4", desc: "Understand the relationship between numbers and quantities; connect counting to cardinality." },
        { code: "K.CC.B.5", desc: "Count to answer 'how many?' questions about as many as 20 things arranged in a line, rectangular array, or circle, or as many as 10 things in a scattered configuration." },
        { code: "K.CC.C.6", desc: "Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group (e.g., by using matching and counting strategies)." },
        { code: "K.CC.C.7", desc: "Compare two numbers between 1 and 10 presented as written numerals." },
        // Operations & Algebraic Thinking
        { code: "K.OA.A.1", desc: "Represent addition and subtraction with objects, fingers, mental images, drawings, sounds, acting out situations, verbal explanations, expressions, or equations." },
        { code: "K.OA.A.2", desc: "Solve addition and subtraction word problems, and add and subtract within 10, e.g., by using objects or drawings to represent the problem." },
        { code: "K.OA.A.3", desc: "Decompose numbers less than or equal to 10 into pairs in more than one way, e.g., by using objects or drawings, and record each decomposition by a drawing or equation." },
        { code: "K.OA.A.4", desc: "For any number from 1 to 9, find the number that makes 10 when added to the given number, e.g., by using objects or drawings, and record the answer with a drawing or equation." },
        { code: "K.OA.A.5", desc: "Fluently add and subtract within 5." },
        // Number & Operations in Base Ten
        { code: "K.NBT.A.1", desc: "Compose and decompose numbers from 11 to 19 into ten ones and some further ones, e.g., by using objects or drawings, and record each composition or decomposition by a drawing or equation." },
        // Measurement & Data
        { code: "K.MD.A.1", desc: "Describe measurable attributes of objects, such as length or weight. Describe several measurable attributes of a single object." },
        { code: "K.MD.A.2", desc: "Directly compare two objects with a measurable attribute in common, to see which object has 'more of'/'less of' the attribute, and describe the difference." },
        { code: "K.MD.B.3", desc: "Classify objects into given categories; count the numbers of objects in each category and sort the categories by count." },
        // Geometry
        { code: "K.G.A.1", desc: "Describe objects in the environment using names of shapes, and describe the relative positions of these objects using terms such as above, below, beside, in front of, behind, and next to." },
        { code: "K.G.A.2", desc: "Correctly name shapes regardless of their orientations or overall size." },
        { code: "K.G.A.3", desc: "Identify shapes as two-dimensional (lying in a plane, 'flat') or three-dimensional ('solid')." },
        { code: "K.G.B.4", desc: "Analyze and compare two- and three-dimensional shapes, in different sizes and orientations, using informal language to describe their similarities, differences, parts, and other attributes." },
        { code: "K.G.B.5", desc: "Model shapes in the world by building shapes from components (e.g., sticks and clay balls) and drawing shapes." },
        { code: "K.G.B.6", desc: "Compose simple shapes to form larger shapes." }
    ],
    "1": [
        // Operations & Algebraic Thinking
        { code: "1.OA.A.1", desc: "Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions." },
        { code: "1.OA.A.2", desc: "Solve word problems that call for addition of three whole numbers whose sum is less than or equal to 20, e.g., by using objects, drawings, and equations." },
        { code: "1.OA.B.3", desc: "Apply properties of operations as strategies to add and subtract (commutative and associative properties)." },
        { code: "1.OA.B.4", desc: "Understand subtraction as an unknown-addend problem (e.g., subtract 10 – 8 by finding the number that makes 10 when added to 8)." },
        { code: "1.OA.C.5", desc: "Relate counting to addition and subtraction (e.g., by counting on 2 to add 2)." },
        { code: "1.OA.C.6", desc: "Add and subtract within 20, demonstrating fluency for addition and subtraction within 10. Use strategies such as making ten and decomposing a number leading to a ten." },
        { code: "1.OA.D.7", desc: "Understand the meaning of the equal sign, and determine if equations involving addition and subtraction are true or false." },
        { code: "1.OA.D.8", desc: "Determine the unknown whole number in an addition or subtraction equation relating three whole numbers." },
        // Number & Operations in Base Ten
        { code: "1.NBT.A.1", desc: "Count to 120, starting at any number less than 120. Read and write numerals and represent a number of objects with a written numeral." },
        { code: "1.NBT.B.2", desc: "Understand that the two digits of a two-digit number represent amounts of tens and ones." },
        { code: "1.NBT.B.3", desc: "Compare two two-digit numbers based on meanings of the tens and ones digits, recording the results of comparisons with the symbols >, =, and <." },
        { code: "1.NBT.C.4", desc: "Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10." },
        { code: "1.NBT.C.5", desc: "Given a two-digit number, mentally find 10 more or 10 less than the number, without having to count." },
        { code: "1.NBT.C.6", desc: "Subtract multiples of 10 in the range 10–90 from multiples of 10 in the range 10–90 (positive or zero differences), using concrete models or drawings." },
        // Measurement & Data
        { code: "1.MD.A.1", desc: "Order three objects by length; compare the lengths of two objects indirectly by using a third object." },
        { code: "1.MD.A.2", desc: "Express the length of an object as a whole number of length units, by laying multiple copies of a shorter object (the length unit) end to end." },
        { code: "1.MD.B.3", desc: "Tell and write time in hours and half-hours using analog and digital clocks." },
        { code: "1.MD.C.4", desc: "Organize, represent, and interpret data with up to three categories; ask and answer questions about the total number of data points, how many in each category, and how many more or less." },
        // Geometry
        { code: "1.G.A.1", desc: "Distinguish between defining attributes (e.g., triangles are closed and three-sided) versus non-defining attributes (e.g., color, orientation, overall size); build and draw shapes to possess defining attributes." },
        { code: "1.G.A.2", desc: "Compose two-dimensional shapes or three-dimensional shapes to create a composite shape, and compose new shapes from the composite shape." },
        { code: "1.G.A.3", desc: "Partition circles and rectangles into two and four equal shares; describe the shares using the words halves, fourths, and quarters." }
    ],
    "2": [
        // Operations & Algebraic Thinking
        { code: "2.OA.A.1", desc: "Use addition and subtraction within 100 to solve one- and two-step word problems involving situations of adding to, taking from, putting together, taking apart, and comparing." },
        { code: "2.OA.B.2", desc: "Fluently add and subtract within 20 using mental strategies. By end of Grade 2, know from memory all sums of two one-digit numbers." },
        { code: "2.OA.C.3", desc: "Determine whether a group of objects (up to 20) has an odd or even number of members, e.g., by pairing objects or counting them by 2s." },
        { code: "2.OA.C.4", desc: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns; write an equation to express the total as a sum of equal addends." },
        // Number & Operations in Base Ten
        { code: "2.NBT.A.1", desc: "Understand that the three digits of a three-digit number represent amounts of hundreds, tens, and ones." },
        { code: "2.NBT.A.2", desc: "Count within 1000; skip-count by 5s, 10s, and 100s." },
        { code: "2.NBT.A.3", desc: "Read and write numbers to 1000 using base-ten numerals, number names, and expanded form." },
        { code: "2.NBT.A.4", desc: "Compare two three-digit numbers based on meanings of the hundreds, tens, and ones digits, using >, =, and < symbols to record the results of comparisons." },
        { code: "2.NBT.B.5", desc: "Fluently add and subtract within 100 using strategies based on place value, properties of operations, and/or the relationship between addition and subtraction." },
        { code: "2.NBT.B.6", desc: "Add up to four two-digit numbers using strategies based on place value and properties of operations." },
        { code: "2.NBT.B.7", desc: "Add and subtract within 1000, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction." },
        { code: "2.NBT.B.8", desc: "Mentally add 10 or 100 to a given number 100–900, and mentally subtract 10 or 100 from a given number 100–900." },
        { code: "2.NBT.B.9", desc: "Explain why addition and subtraction strategies work, using place value and the properties of operations." },
        // Measurement & Data
        { code: "2.MD.A.1", desc: "Measure the length of an object by selecting and using appropriate tools such as rulers, yardsticks, meter sticks, and measuring tapes." },
        { code: "2.MD.A.2", desc: "Measure the length of an object twice, using length units of different lengths for the two measurements; describe how the two measurements relate to the size of the unit chosen." },
        { code: "2.MD.A.3", desc: "Estimate lengths using units of inches, feet, centimeters, and meters." },
        { code: "2.MD.A.4", desc: "Measure to determine how much longer one object is than another, expressing the length difference in terms of a standard length unit." },
        { code: "2.MD.B.5", desc: "Use addition and subtraction within 100 to solve word problems involving lengths that are given in the same units." },
        { code: "2.MD.B.6", desc: "Represent whole numbers as lengths from 0 on a number line diagram with equally spaced points corresponding to the numbers 0, 1, 2, …, and represent whole-number sums and differences within 100 on a number line diagram." },
        { code: "2.MD.C.7", desc: "Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m." },
        { code: "2.MD.C.8", desc: "Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies, using $ and ¢ symbols appropriately." },
        { code: "2.MD.D.9", desc: "Generate measurement data by measuring lengths of several objects to the nearest whole unit, or by making repeated measurements of the same object." },
        { code: "2.MD.D.10", desc: "Draw a picture graph and a bar graph (with single-unit scale) to represent a data set with up to four categories. Solve simple put-together, take-apart, and compare problems using information presented in a bar graph." },
        // Geometry
        { code: "2.G.A.1", desc: "Recognize and draw shapes having specified attributes, such as a given number of angles or a given number of equal faces. Identify triangles, quadrilaterals, pentagons, hexagons, and cubes." },
        { code: "2.G.A.2", desc: "Partition a rectangle into rows and columns of same-size squares and count to find the total number of them." },
        { code: "2.G.A.3", desc: "Partition circles and rectangles into two, three, or four equal shares; describe the shares using the words halves, thirds, half of, a third of, etc." }
    ],
    "3": [
        // Operations & Algebraic Thinking
        { code: "3.OA.A.1", desc: "Interpret products of whole numbers, e.g., interpret 5 × 7 as the total number of objects in 5 groups of 7 objects each." },
        { code: "3.OA.A.2", desc: "Interpret whole-number quotients of whole numbers, e.g., interpret 56 ÷ 8 as the number of objects in each share when 56 objects are partitioned equally into 8 shares." },
        { code: "3.OA.A.3", desc: "Use multiplication and division within 100 to solve word problems in situations involving equal groups, arrays, and measurement quantities." },
        { code: "3.OA.A.4", desc: "Determine the unknown whole number in a multiplication or division equation relating three whole numbers." },
        { code: "3.OA.B.5", desc: "Apply properties of operations as strategies to multiply and divide (commutative, associative, and distributive properties)." },
        { code: "3.OA.B.6", desc: "Understand division as an unknown-factor problem. For example, find 32 ÷ 8 by finding the number that makes 32 when multiplied by 8." },
        { code: "3.OA.C.7", desc: "Fluently multiply and divide within 100, using strategies. By the end of Grade 3, know from memory all products of two one-digit numbers." },
        { code: "3.OA.D.8", desc: "Solve two-step word problems using the four operations. Represent these problems using equations with a letter standing for the unknown quantity." },
        { code: "3.OA.D.9", desc: "Identify arithmetic patterns (including patterns in the addition table or multiplication table) and explain them using properties of operations." },
        // Number & Operations in Base Ten
        { code: "3.NBT.A.1", desc: "Use place value understanding to round whole numbers to the nearest 10 or 100." },
        { code: "3.NBT.A.2", desc: "Fluently add and subtract within 1000 using strategies and algorithms based on place value, properties of operations, and/or the relationship between addition and subtraction." },
        { code: "3.NBT.A.3", desc: "Multiply one-digit whole numbers by multiples of 10 in the range 10–90 (e.g., 9 × 80, 5 × 60) using strategies based on place value and properties of operations." },
        // Number & Operations — Fractions
        { code: "3.NF.A.1", desc: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b." },
        { code: "3.NF.A.2", desc: "Understand a fraction as a number on the number line; represent fractions on a number line diagram." },
        { code: "3.NF.A.3", desc: "Explain equivalence of fractions in special cases, and compare fractions by reasoning about their size." },
        // Measurement & Data
        { code: "3.MD.A.1", desc: "Tell and write time to the nearest minute and measure time intervals in minutes. Solve word problems involving addition and subtraction of time intervals in minutes." },
        { code: "3.MD.A.2", desc: "Measure and estimate liquid volumes and masses of objects using standard units of grams, kilograms, and liters. Add, subtract, multiply, or divide to solve one-step word problems involving masses or volumes." },
        { code: "3.MD.B.3", desc: "Draw a scaled picture graph and a scaled bar graph to represent a data set with several categories. Solve one- and two-step 'how many more' and 'how many less' problems using information presented in scaled bar graphs." },
        { code: "3.MD.B.4", desc: "Generate measurement data by measuring lengths using rulers marked with halves and fourths of an inch. Show the data by making a line plot." },
        { code: "3.MD.C.5", desc: "Recognize area as an attribute of plane figures and understand concepts of area measurement." },
        { code: "3.MD.C.6", desc: "Measure areas by counting unit squares (square cm, square m, square in, square ft, and improvised units)." },
        { code: "3.MD.C.7", desc: "Relate area to the operations of multiplication and addition." },
        { code: "3.MD.D.8", desc: "Solve real world and mathematical problems involving perimeters of polygons, including finding the perimeter given the side lengths, finding an unknown side length, and exhibiting rectangles with the same perimeter and different areas." },
        // Geometry
        { code: "3.G.A.1", desc: "Understand that shapes in different categories may share attributes, and that the shared attributes can define a larger category. Recognize rhombuses, rectangles, and squares as examples of quadrilaterals." },
        { code: "3.G.A.2", desc: "Partition shapes into parts with equal areas. Express the area of each part as a unit fraction of the whole." }
    ],
    "4": [
        // Operations & Algebraic Thinking
        { code: "4.OA.A.1", desc: "Interpret a multiplication equation as a comparison, e.g., interpret 35 = 5 × 7 as a statement that 35 is 5 times as many as 7 and 7 times as many as 5." },
        { code: "4.OA.A.2", desc: "Multiply or divide to solve word problems involving multiplicative comparison, e.g., by using drawings and equations with a symbol for the unknown number." },
        { code: "4.OA.A.3", desc: "Solve multistep word problems posed with whole numbers and having whole-number answers using the four operations, including problems in which remainders must be interpreted." },
        { code: "4.OA.B.4", desc: "Find all factor pairs for a whole number in the range 1–100. Recognize that a whole number is a multiple of each of its factors. Determine whether a given whole number is prime or composite." },
        { code: "4.OA.C.5", desc: "Generate a number or shape pattern that follows a given rule. Identify apparent features of the pattern that were not explicit in the rule itself." },
        // Number & Operations in Base Ten
        { code: "4.NBT.A.1", desc: "Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right." },
        { code: "4.NBT.A.2", desc: "Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form. Compare two multi-digit numbers based on meanings of the digits in each place, using >, =, and < symbols." },
        { code: "4.NBT.A.3", desc: "Use place value understanding to round multi-digit whole numbers to any place." },
        { code: "4.NBT.B.4", desc: "Fluently add and subtract multi-digit whole numbers using the standard algorithm." },
        { code: "4.NBT.B.5", desc: "Multiply a whole number of up to four digits by a one-digit whole number, and multiply two two-digit numbers, using strategies based on place value and the properties of operations." },
        { code: "4.NBT.B.6", desc: "Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division." },
        // Number & Operations — Fractions
        { code: "4.NF.A.1", desc: "Explain why a fraction a/b is equivalent to a fraction (n × a)/(n × b) by using visual fraction models, with attention to how the number and size of the parts differ even though the two fractions themselves are the same size." },
        { code: "4.NF.A.2", desc: "Compare two fractions with different numerators and different denominators, e.g., by creating common denominators or numerators, or by comparing to a benchmark fraction such as 1/2." },
        { code: "4.NF.B.3", desc: "Understand a fraction a/b with a > 1 as a sum of fractions 1/b. Decompose a fraction into a sum of fractions with the same denominator. Add and subtract mixed numbers with like denominators." },
        { code: "4.NF.B.4", desc: "Apply and extend previous understandings of multiplication to multiply a fraction by a whole number." },
        { code: "4.NF.C.5", desc: "Express a fraction with denominator 10 as an equivalent fraction with denominator 100, and use this technique to add two fractions with respective denominators 10 and 100." },
        { code: "4.NF.C.6", desc: "Use decimal notation for fractions with denominators 10 or 100." },
        { code: "4.NF.C.7", desc: "Compare two decimals to hundredths by reasoning about their size. Recognize that comparisons are valid only when the two decimals refer to the same whole." },
        // Measurement & Data
        { code: "4.MD.A.1", desc: "Know relative sizes of measurement units within one system of units including km, m, cm; kg, g; lb, oz.; l, ml; hr, min, sec. Within a single system of measurement, express measurements in a larger unit in terms of a smaller unit." },
        { code: "4.MD.A.2", desc: "Use the four operations to solve word problems involving distances, intervals of time, liquid volumes, masses of objects, and money, including problems involving simple fractions or decimals." },
        { code: "4.MD.A.3", desc: "Apply the area and perimeter formulas for rectangles in real world and mathematical problems." },
        { code: "4.MD.B.4", desc: "Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8). Solve problems involving addition and subtraction of fractions by using information presented in line plots." },
        { code: "4.MD.C.5", desc: "Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint, and understand concepts of angle measurement." },
        { code: "4.MD.C.6", desc: "Measure angles in whole-number degrees using a protractor. Sketch angles of specified measure." },
        { code: "4.MD.C.7", desc: "Recognize angle measure as additive. When an angle is decomposed into non-overlapping parts, the angle measure of the whole is the sum of the angle measures of the parts." },
        // Geometry
        { code: "4.G.A.1", desc: "Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines. Identify these in two-dimensional figures." },
        { code: "4.G.A.2", desc: "Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size." },
        { code: "4.G.A.3", desc: "Recognize a line of symmetry for a two-dimensional figure as a line across the figure such that the figure can be folded along the line into matching parts. Identify line-symmetric figures and draw lines of symmetry." }
    ],
    "5": [
        // Operations & Algebraic Thinking
        { code: "5.OA.A.1", desc: "Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions with these symbols." },
        { code: "5.OA.A.2", desc: "Write simple expressions that record calculations with numbers, and interpret numerical expressions without evaluating them." },
        { code: "5.OA.B.3", desc: "Generate two numerical patterns using two given rules. Identify apparent relationships between corresponding terms. Form ordered pairs and graph them on a coordinate plane." },
        // Number & Operations in Base Ten
        { code: "5.NBT.A.1", desc: "Recognize that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right and 1/10 of what it represents in the place to its left." },
        { code: "5.NBT.A.2", desc: "Explain patterns in the number of zeros of the product when multiplying a number by powers of 10, and explain patterns in the placement of the decimal point when a decimal is multiplied or divided by a power of 10." },
        { code: "5.NBT.A.3", desc: "Read, write, and compare decimals to thousandths." },
        { code: "5.NBT.A.4", desc: "Use place value understanding to round decimals to any place." },
        { code: "5.NBT.B.5", desc: "Fluently multiply multi-digit whole numbers using the standard algorithm." },
        { code: "5.NBT.B.6", desc: "Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division." },
        { code: "5.NBT.B.7", desc: "Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction." },
        // Number & Operations — Fractions
        { code: "5.NF.A.1", desc: "Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions in such a way as to produce an equivalent sum or difference of fractions with like denominators." },
        { code: "5.NF.A.2", desc: "Solve word problems involving addition and subtraction of fractions referring to the same whole, including cases of unlike denominators." },
        { code: "5.NF.B.3", desc: "Interpret a fraction as division of the numerator by the denominator (a/b = a ÷ b). Solve word problems involving division of whole numbers leading to answers in the form of fractions or mixed numbers." },
        { code: "5.NF.B.4", desc: "Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction." },
        { code: "5.NF.B.5", desc: "Interpret multiplication as scaling (resizing), by comparing the size of a product to the size of one factor on the basis of the size of the other factor, without performing the indicated multiplication." },
        { code: "5.NF.B.6", desc: "Solve real world problems involving multiplication of fractions and mixed numbers, e.g., by using visual fraction models or equations to represent the problem." },
        { code: "5.NF.B.7", desc: "Apply and extend previous understandings of division to divide unit fractions by whole numbers and whole numbers by unit fractions." },
        // Measurement & Data
        { code: "5.MD.A.1", desc: "Convert among different-sized standard measurement units within a given measurement system, and use these conversions in solving multi-step, real world problems." },
        { code: "5.MD.B.2", desc: "Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8). Use operations on fractions for this grade to solve problems involving information presented in line plots." },
        { code: "5.MD.C.3", desc: "Recognize volume as an attribute of solid figures and understand concepts of volume measurement." },
        { code: "5.MD.C.4", desc: "Measure volumes by counting unit cubes, using cubic cm, cubic in, cubic ft, and improvised units." },
        { code: "5.MD.C.5", desc: "Relate volume to the operations of multiplication and addition and solve real world and mathematical problems involving volume." },
        // Geometry
        { code: "5.G.A.1", desc: "Use a pair of perpendicular number lines, called axes, to define a coordinate system, with the intersection of the lines (the origin) arranged to coincide with the 0 on each line and a given point in the plane located by using an ordered pair of numbers, called its coordinates." },
        { code: "5.G.A.2", desc: "Represent real world and mathematical problems by graphing points in the first quadrant of the coordinate plane, and interpret coordinate values of points in the context of the situation." },
        { code: "5.G.B.3", desc: "Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category." },
        { code: "5.G.B.4", desc: "Classify two-dimensional figures in a hierarchy based on properties." }
    ],
    "6": [
        // Ratios & Proportional Relationships
        { code: "6.RP.A.1", desc: "Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities." },
        { code: "6.RP.A.2", desc: "Understand the concept of a unit rate a/b associated with a ratio a:b with b ≠ 0, and use rate language in the context of a ratio relationship." },
        { code: "6.RP.A.3", desc: "Use ratio and rate reasoning to solve real-world and mathematical problems, e.g., by reasoning about tables of equivalent ratios, tape diagrams, double number line diagrams, or equations." },
        // The Number System
        { code: "6.NS.A.1", desc: "Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions." },
        { code: "6.NS.B.2", desc: "Fluently divide multi-digit numbers using the standard algorithm." },
        { code: "6.NS.B.3", desc: "Fluently add, subtract, multiply, and divide multi-digit decimals using the standard algorithm for each operation." },
        { code: "6.NS.B.4", desc: "Find the greatest common factor of two whole numbers less than or equal to 100 and the least common multiple of two whole numbers less than or equal to 12." },
        { code: "6.NS.C.5", desc: "Understand that positive and negative numbers are used together to describe quantities having opposite directions or values." },
        { code: "6.NS.C.6", desc: "Understand a rational number as a point on the number line. Extend number line diagrams and coordinate axes to represent points on the line and in the plane with negative number coordinates." },
        { code: "6.NS.C.7", desc: "Understand ordering and absolute value of rational numbers." },
        { code: "6.NS.C.8", desc: "Solve real-world and mathematical problems by graphing points in all four quadrants of the coordinate plane." },
        // Expressions & Equations
        { code: "6.EE.A.1", desc: "Write and evaluate numerical expressions involving whole-number exponents." },
        { code: "6.EE.A.2", desc: "Write, read, and evaluate expressions in which letters stand for numbers." },
        { code: "6.EE.A.3", desc: "Apply the properties of operations to generate equivalent expressions." },
        { code: "6.EE.A.4", desc: "Identify when two expressions are equivalent (i.e., when the two expressions name the same number regardless of which value is substituted into them)." },
        { code: "6.EE.B.5", desc: "Understand solving an equation or inequality as a process of answering a question: which values from a specified set, if any, make the equation or inequality true?" },
        { code: "6.EE.B.6", desc: "Use variables to represent numbers and write expressions when solving a real-world or mathematical problem; understand that a variable can represent an unknown number." },
        { code: "6.EE.B.7", desc: "Solve real-world and mathematical problems by writing and solving equations of the form x + p = q and px = q for cases in which p, q and x are all nonnegative rational numbers." },
        { code: "6.EE.B.8", desc: "Write an inequality of the form x > c or x < c to represent a constraint or condition in a real-world or mathematical problem. Recognize that inequalities of the form x > c or x < c have infinitely many solutions." },
        { code: "6.EE.C.9", desc: "Use variables to represent two quantities in a real-world problem that change in relationship to one another; write an equation to express one quantity in terms of the other quantity." },
        // Geometry
        { code: "6.G.A.1", desc: "Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles and other shapes." },
        { code: "6.G.A.2", desc: "Find the volume of a right rectangular prism with fractional edge lengths by packing it with unit cubes of the appropriate unit fraction edge lengths." },
        { code: "6.G.A.3", desc: "Draw polygons in the coordinate plane given coordinates for the vertices; use coordinates to find the length of a side joining points with the same first coordinate or the same second coordinate." },
        { code: "6.G.A.4", desc: "Represent three-dimensional figures using nets made up of rectangles and triangles, and use the nets to find the surface area of these figures." },
        // Statistics & Probability
        { code: "6.SP.A.1", desc: "Recognize a statistical question as one that anticipates variability in the data related to the question and accounts for it in the answers." },
        { code: "6.SP.A.2", desc: "Understand that a set of data collected to answer a statistical question has a distribution which can be described by its center, spread, and overall shape." },
        { code: "6.SP.A.3", desc: "Recognize that a measure of center for a numerical data set summarizes all of its values with a single number, while a measure of variation describes how its values vary with a single number." },
        { code: "6.SP.B.4", desc: "Display numerical data in plots on a number line, including dot plots, histograms, and box plots." },
        { code: "6.SP.B.5", desc: "Summarize numerical data sets in relation to their context, such as by reporting the number of observations, describing the nature of the attribute under investigation, giving quantitative measures of center and variability." }
    ],
    "7": [
        // Ratios & Proportional Relationships
        { code: "7.RP.A.1", desc: "Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units." },
        { code: "7.RP.A.2", desc: "Recognize and represent proportional relationships between quantities." },
        { code: "7.RP.A.3", desc: "Use proportional relationships to solve multistep ratio and percent problems (simple interest, tax, markups and markdowns, gratuities and commissions, fees, percent increase and decrease, percent error)." },
        // The Number System
        { code: "7.NS.A.1", desc: "Apply and extend previous understandings of addition and subtraction to add and subtract rational numbers; represent addition and subtraction on a horizontal or vertical number line diagram." },
        { code: "7.NS.A.2", desc: "Apply and extend previous understandings of multiplication and division and of fractions to multiply and divide rational numbers." },
        { code: "7.NS.A.3", desc: "Solve real-world and mathematical problems involving the four operations with rational numbers." },
        // Expressions & Equations
        { code: "7.EE.A.1", desc: "Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients." },
        { code: "7.EE.A.2", desc: "Rewrite an expression in different forms in a problem context to shed light on the problem and how the quantities in it are related." },
        { code: "7.EE.B.3", desc: "Solve multi-step real-life and mathematical problems posed with positive and negative rational numbers in any form (whole numbers, fractions, and decimals), using tools strategically." },
        { code: "7.EE.B.4", desc: "Use variables to represent quantities in a real-world or mathematical problem, and construct simple equations and inequalities to solve problems by reasoning about the quantities." },
        // Geometry
        { code: "7.G.A.1", desc: "Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale." },
        { code: "7.G.A.2", desc: "Draw (freehand, with ruler and protractor, and with technology) geometric shapes with given conditions. Focus on constructing triangles from three measures of angles or sides." },
        { code: "7.G.A.3", desc: "Describe the two-dimensional figures that result from slicing three-dimensional figures, as in plane sections of right rectangular prisms and right rectangular pyramids." },
        { code: "7.G.B.4", desc: "Know the formulas for the area and circumference of a circle and use them to solve problems; give an informal derivation of the relationship between the circumference and area of a circle." },
        { code: "7.G.B.5", desc: "Use facts about supplementary, complementary, vertical, and adjacent angles in a multi-step problem to write and solve simple equations for an unknown angle in a figure." },
        { code: "7.G.B.6", desc: "Solve real-world and mathematical problems involving area, volume and surface area of two- and three-dimensional objects composed of triangles, quadrilaterals, polygons, cubes, and right prisms." },
        // Statistics & Probability
        { code: "7.SP.A.1", desc: "Understand that statistics can be used to gain information about a population by examining a sample of the population; generalizations about a population from a sample are valid only if the sample is representative of that population." },
        { code: "7.SP.A.2", desc: "Use data from a random sample to draw inferences about a population with an unknown characteristic of interest." },
        { code: "7.SP.B.3", desc: "Informally assess the degree of visual overlap of two numerical data distributions with similar variabilities, measuring the difference between the centers by expressing it as a multiple of a measure of variability." },
        { code: "7.SP.B.4", desc: "Use measures of center and measures of variability for numerical data from random samples to draw informal comparative inferences about two populations." },
        { code: "7.SP.C.5", desc: "Understand that the probability of a chance event is a number between 0 and 1 that expresses the likelihood of the event occurring. A probability near 0 indicates an unlikely event, a probability around 1/2 indicates neither unlikely nor likely." },
        { code: "7.SP.C.6", desc: "Approximate the probability of a chance event by collecting data on the chance process that produces it and observing its long-run relative frequency." },
        { code: "7.SP.C.7", desc: "Develop a probability model and use it to find probabilities of events. Compare probabilities from a model to observed frequencies." },
        { code: "7.SP.C.8", desc: "Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation." }
    ],
    "8": [
        // The Number System
        { code: "8.NS.A.1", desc: "Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion; for rational numbers show that the decimal expansion repeats eventually." },
        { code: "8.NS.A.2", desc: "Use rational approximations of irrational numbers to compare the size of irrational numbers, locate them approximately on a number line diagram, and estimate the value of expressions." },
        // Expressions & Equations
        { code: "8.EE.A.1", desc: "Know and apply the properties of integer exponents to generate equivalent numerical expressions." },
        { code: "8.EE.A.2", desc: "Use square root and cube root symbols to represent solutions to equations of the form x² = p and x³ = p, where p is a positive rational number." },
        { code: "8.EE.A.3", desc: "Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities, and to express how many times as much one is than the other." },
        { code: "8.EE.A.4", desc: "Perform operations with numbers expressed in scientific notation, including problems where both decimal and scientific notation are used." },
        { code: "8.EE.B.5", desc: "Graph proportional relationships, interpreting the unit rate as the slope of the graph. Compare two different proportional relationships represented in different ways." },
        { code: "8.EE.B.6", desc: "Use similar triangles to explain why the slope m is the same between any two distinct points on a non-vertical line in the coordinate plane." },
        { code: "8.EE.C.7", desc: "Solve linear equations in one variable." },
        { code: "8.EE.C.8", desc: "Analyze and solve pairs of simultaneous linear equations." },
        // Functions
        { code: "8.F.A.1", desc: "Understand that a function is a rule that assigns to each input exactly one output. The graph of a function is the set of ordered pairs consisting of an input and the corresponding output." },
        { code: "8.F.A.2", desc: "Compare properties of two functions each represented in a different way (algebraically, graphically, numerically in tables, or by verbal descriptions)." },
        { code: "8.F.A.3", desc: "Interpret the equation y = mx + b as defining a linear function, whose graph is a straight line; give examples of functions that are not linear." },
        { code: "8.F.B.4", desc: "Construct a function to model a linear relationship between two quantities. Determine the rate of change and initial value of the function from a description of a relationship or from two (x, y) values, including reading these from a table or from a graph." },
        { code: "8.F.B.5", desc: "Describe qualitatively the functional relationship between two quantities by analyzing a graph (e.g., where the function is increasing or decreasing, linear or nonlinear)." },
        // Geometry
        { code: "8.G.A.1", desc: "Verify experimentally the properties of rotations, reflections, and translations." },
        { code: "8.G.A.2", desc: "Understand that a two-dimensional figure is congruent to another if the second can be obtained from the first by a sequence of rotations, reflections, and translations." },
        { code: "8.G.A.3", desc: "Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinates." },
        { code: "8.G.A.4", desc: "Understand that a two-dimensional figure is similar to another if the second can be obtained from the first by a sequence of rotations, reflections, translations, and dilations." },
        { code: "8.G.A.5", desc: "Use informal arguments to establish facts about the angle sum and exterior angle of triangles, about the angles created when parallel lines are cut by a transversal, and the angle-angle criterion for similarity of triangles." },
        { code: "8.G.B.6", desc: "Explain a proof of the Pythagorean Theorem and its converse." },
        { code: "8.G.B.7", desc: "Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions." },
        { code: "8.G.B.8", desc: "Apply the Pythagorean Theorem to find the distance between two points in a coordinate system." },
        { code: "8.G.C.9", desc: "Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve real-world and mathematical problems." },
        // Statistics & Probability
        { code: "8.SP.A.1", desc: "Construct and interpret scatter plots for bivariate measurement data to investigate patterns of association between two quantities. Describe patterns such as clustering, outliers, positive or negative association, linear association, and nonlinear association." },
        { code: "8.SP.A.2", desc: "Know that straight lines are widely used to model relationships between two quantitative variables. For scatter plots that suggest a linear association, informally fit a straight line." },
        { code: "8.SP.A.3", desc: "Use the equation of a linear model to solve problems in the context of bivariate measurement data, interpreting the slope and intercept." },
        { code: "8.SP.A.4", desc: "Understand that patterns of association can also be seen in bivariate categorical data by displaying frequencies and relative frequencies in a two-way table." }
    ]
};

const CC_ELA_STANDARDS = {
    K: [
        // Reading: Literature (RL.K)
        { code: "RL.K.1", desc: "With prompting and support, ask and answer questions about key details in a text." },
        { code: "RL.K.2", desc: "With prompting and support, retell familiar stories, including key details." },
        { code: "RL.K.3", desc: "With prompting and support, identify characters, settings, and major events in a story." },
        { code: "RL.K.4", desc: "Ask and answer questions about unknown words in a text." },
        { code: "RL.K.5", desc: "Recognize common types of texts (e.g., storybooks, poems)." },
        { code: "RL.K.6", desc: "With prompting and support, name the author and illustrator of a story and define the role of each in telling the story." },
        { code: "RL.K.7", desc: "With prompting and support, describe the relationship between illustrations and the story in which they appear." },
        { code: "RL.K.9", desc: "With prompting and support, compare and contrast the adventures and experiences of characters in familiar stories." },
        // Reading: Informational Text (RI.K)
        { code: "RI.K.1", desc: "With prompting and support, ask and answer questions about key details in a text." },
        { code: "RI.K.2", desc: "With prompting and support, identify the main topic and retell key details of a text." },
        { code: "RI.K.3", desc: "With prompting and support, describe the connection between two individuals, events, ideas, or pieces of information in a text." },
        { code: "RI.K.4", desc: "With prompting and support, ask and answer questions about unknown words in a text." },
        { code: "RI.K.5", desc: "Identify the front cover, back cover, and title page of a book." },
        { code: "RI.K.6", desc: "Name the author and illustrator of a text and define the role of each in presenting the ideas or information in a text." },
        { code: "RI.K.7", desc: "With prompting and support, describe the relationship between illustrations and the text in which they appear." },
        { code: "RI.K.8", desc: "With prompting and support, identify the reasons an author gives to support points in a text." },
        { code: "RI.K.9", desc: "With prompting and support, identify basic similarities in and differences between two texts on the same topic." },
        // Reading: Foundational Skills (RF.K)
        { code: "RF.K.1", desc: "Demonstrate understanding of the organization and basic features of print." },
        { code: "RF.K.2", desc: "Demonstrate understanding of spoken words, syllables, and sounds (phonemes)." },
        { code: "RF.K.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.K.4", desc: "Read emergent-reader texts with purpose and understanding." },
        // Writing (W.K)
        { code: "W.K.1", desc: "Use a combination of drawing, dictating, and writing to compose opinion pieces in which they tell a reader the topic or the name of the book they are writing about and state an opinion or preference about the topic or book." },
        { code: "W.K.2", desc: "Use a combination of drawing, dictating, and writing to compose informative/explanatory texts in which they name what they are writing about and supply some information about the topic." },
        { code: "W.K.3", desc: "Use a combination of drawing, dictating, and writing to narrate a single event or several loosely linked events, tell about the events in the order in which they occurred, and provide a reaction to what happened." },
        { code: "W.K.5", desc: "With guidance and support from adults, respond to questions and suggestions from peers and add details to strengthen writing as needed." },
        { code: "W.K.7", desc: "Participate in shared research and writing projects (e.g., explore a number of books by a favorite author and express opinions about them)." },
        { code: "W.K.8", desc: "With guidance and support from adults, recall information from experiences or gather information from provided sources to answer a question." },
        // Speaking & Listening (SL.K)
        { code: "SL.K.1", desc: "Participate in collaborative conversations with diverse partners about kindergarten topics and texts with peers and adults in small and larger groups." },
        { code: "SL.K.2", desc: "Confirm understanding of a text read aloud or information presented orally or through other media by asking and answering questions about key details and requesting clarification if something is not understood." },
        { code: "SL.K.3", desc: "Ask and answer questions in order to seek help, get information, or clarify something that is not understood." },
        { code: "SL.K.4", desc: "Describe familiar people, places, things, and events and, with prompting and support, provide additional detail." },
        { code: "SL.K.6", desc: "Speak audibly and express thoughts, feelings, and ideas clearly." },
        // Language (L.K)
        { code: "L.K.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.K.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.K.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on kindergarten reading and content." },
        { code: "L.K.5", desc: "With guidance and support from adults, explore word relationships and nuances in word meanings." },
        { code: "L.K.6", desc: "Use words and phrases acquired through conversations, reading and being read to, and responding to texts." }
    ],
    "1": [
        // Reading: Literature (RL.1)
        { code: "RL.1.1", desc: "Ask and answer questions about key details in a text." },
        { code: "RL.1.2", desc: "Retell stories, including key details, and demonstrate understanding of their central message or lesson." },
        { code: "RL.1.3", desc: "Describe characters, settings, and major events in a story, using key details." },
        { code: "RL.1.4", desc: "Identify words and phrases in stories or poems that suggest feelings or appeal to the senses." },
        { code: "RL.1.5", desc: "Explain major differences between books that tell stories and books that give information, drawing on a wide reading of a range of text types." },
        { code: "RL.1.6", desc: "Identify who is telling the story at various points in a text." },
        { code: "RL.1.7", desc: "Use illustrations and details in a story to describe its characters, setting, or events." },
        { code: "RL.1.9", desc: "Compare and contrast the adventures and experiences of characters in stories." },
        // Reading: Informational Text (RI.1)
        { code: "RI.1.1", desc: "Ask and answer questions about key details in a text." },
        { code: "RI.1.2", desc: "Identify the main topic and retell key details of a text." },
        { code: "RI.1.3", desc: "Describe the connection between two individuals, events, ideas, or pieces of information in a text." },
        { code: "RI.1.4", desc: "Ask and answer questions to help determine or clarify the meaning of words and phrases in a text." },
        { code: "RI.1.5", desc: "Know and use various text features (e.g., headings, tables of contents, glossaries, electronic menus, icons) to locate key facts or information in a text." },
        { code: "RI.1.6", desc: "Distinguish between information provided by pictures or other illustrations and information provided by the words in a text." },
        { code: "RI.1.7", desc: "Use the illustrations and details in a text to describe its key ideas." },
        { code: "RI.1.8", desc: "Identify the reasons an author gives to support points in a text." },
        { code: "RI.1.9", desc: "Identify basic similarities in and differences between two texts on the same topic." },
        // Reading: Foundational Skills (RF.1)
        { code: "RF.1.2", desc: "Demonstrate understanding of spoken words, syllables, and sounds (phonemes)." },
        { code: "RF.1.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.1.4", desc: "Read with sufficient accuracy and fluency to support comprehension." },
        // Writing (W.1)
        { code: "W.1.1", desc: "Write opinion pieces in which they introduce the topic or name the book they are writing about, state an opinion, supply a reason for the opinion, and provide some sense of closure." },
        { code: "W.1.2", desc: "Write informative/explanatory texts in which they name a topic, supply some facts about the topic, and provide some sense of closure." },
        { code: "W.1.3", desc: "Write narratives in which they recount two or more appropriately sequenced events, include some details regarding what happened, use temporal words to signal event order, and provide some sense of closure." },
        { code: "W.1.5", desc: "With guidance and support from adults, focus on a topic, respond to questions and suggestions from peers, and add details to strengthen writing as needed." },
        { code: "W.1.7", desc: "Participate in shared research and writing projects (e.g., explore a number of 'how-to' books on a given topic and use them to write a sequence of instructions)." },
        { code: "W.1.8", desc: "With guidance and support from adults, recall information from experiences or gather information from provided sources to answer a question." },
        // Speaking & Listening (SL.1)
        { code: "SL.1.1", desc: "Participate in collaborative conversations with diverse partners about grade 1 topics and texts with peers and adults in small and larger groups." },
        { code: "SL.1.2", desc: "Ask and answer questions about key details in a text read aloud or information presented orally or through other media." },
        { code: "SL.1.3", desc: "Ask and answer questions about what a speaker says in order to gather additional information or clarify something that is not understood." },
        { code: "SL.1.4", desc: "Describe people, places, things, and events with relevant details, expressing ideas and feelings clearly." },
        { code: "SL.1.6", desc: "Produce complete sentences when appropriate to task and situation." },
        // Language (L.1)
        { code: "L.1.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.1.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.1.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 1 reading and content." },
        { code: "L.1.5", desc: "With guidance and support from adults, demonstrate understanding of figurative language, word relationships and nuances in word meanings." },
        { code: "L.1.6", desc: "Use words and phrases acquired through conversations, reading and being read to, and responding to texts, including using frequently occurring conjunctions to signal simple relationships." }
    ],
    "2": [
        // Reading: Literature (RL.2)
        { code: "RL.2.1", desc: "Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text." },
        { code: "RL.2.2", desc: "Recount stories, including fables and folktales from diverse cultures, and determine their central message, lesson, or moral." },
        { code: "RL.2.3", desc: "Describe how characters in a story respond to major events and challenges." },
        { code: "RL.2.4", desc: "Describe how words and phrases (e.g., regular beats, alliteration, rhymes, repeated lines) supply rhythm and meaning in a story, poem, or song." },
        { code: "RL.2.5", desc: "Describe the overall structure of a story, including describing how the beginning introduces the story and the ending concludes the action." },
        { code: "RL.2.6", desc: "Acknowledge differences in the points of view of characters, including by speaking in a different voice for each character when reading dialogue aloud." },
        { code: "RL.2.7", desc: "Use information gained from the illustrations and words in a print or digital text to demonstrate understanding of its characters, setting, or plot." },
        { code: "RL.2.9", desc: "Compare and contrast two or more versions of the same story (e.g., Cinderella stories) by different authors or from different cultures." },
        // Reading: Informational Text (RI.2)
        { code: "RI.2.1", desc: "Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text." },
        { code: "RI.2.2", desc: "Identify the main topic of a multiparagraph text as well as the focus of specific paragraphs within the text." },
        { code: "RI.2.3", desc: "Describe the connection between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text." },
        { code: "RI.2.4", desc: "Determine the meaning of words and phrases in a text relevant to a grade 2 topic or subject area." },
        { code: "RI.2.5", desc: "Know and use various text features (e.g., captions, bold print, subheadings, glossaries, indexes, electronic menus, icons) to locate key facts or information in a text efficiently." },
        { code: "RI.2.6", desc: "Identify the main purpose of a text, including what the author wants to answer, explain, or describe." },
        { code: "RI.2.7", desc: "Explain how specific images (e.g., a diagram showing how a machine works) contribute to and clarify a text." },
        { code: "RI.2.8", desc: "Describe how reasons support specific points the author makes in a text." },
        { code: "RI.2.9", desc: "Compare and contrast the most important points presented by two texts on the same topic." },
        // Reading: Foundational Skills (RF.2)
        { code: "RF.2.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.2.4", desc: "Read with sufficient accuracy and fluency to support comprehension." },
        // Writing (W.2)
        { code: "W.2.1", desc: "Write opinion pieces in which they introduce the topic or book they are writing about, state an opinion, supply reasons that support the opinion, use linking words to connect opinion and reasons, and provide a concluding statement or section." },
        { code: "W.2.2", desc: "Write informative/explanatory texts in which they introduce a topic, use facts and definitions to develop points, and provide a concluding statement or section." },
        { code: "W.2.3", desc: "Write narratives in which they recount a well-elaborated event or short sequence of events, include details to describe actions, thoughts, and feelings, use temporal words to signal event order, and provide a sense of closure." },
        { code: "W.2.5", desc: "With guidance and support from adults and peers, focus on a topic and strengthen writing as needed by revising and editing." },
        { code: "W.2.7", desc: "Participate in shared research and writing projects (e.g., read a number of books on a single topic to produce a report; record science observations)." },
        { code: "W.2.8", desc: "Recall information from experiences or gather information from provided sources to answer a question." },
        // Speaking & Listening (SL.2)
        { code: "SL.2.1", desc: "Participate in collaborative conversations with diverse partners about grade 2 topics and texts with peers and adults in small and larger groups." },
        { code: "SL.2.2", desc: "Recount or describe key ideas or details from a text read aloud or information presented orally or through other media." },
        { code: "SL.2.3", desc: "Ask and answer questions about what a speaker says in order to clarify comprehension, gather additional information, or deepen understanding of a topic or issue." },
        { code: "SL.2.4", desc: "Tell a story or recount an experience with appropriate facts and relevant, descriptive details, speaking audibly in coherent sentences." },
        { code: "SL.2.6", desc: "Produce complete sentences when appropriate to task and situation in order to provide requested detail or clarification." },
        // Language (L.2)
        { code: "L.2.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.2.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.2.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.2.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 2 reading and content." },
        { code: "L.2.5", desc: "Demonstrate understanding of word relationships and nuances in word meanings." },
        { code: "L.2.6", desc: "Use words and phrases acquired through conversations, reading and being read to, and responding to texts, including using adjectives and adverbs to describe." }
    ],
    "3": [
        // Reading: Literature (RL.3)
        { code: "RL.3.1", desc: "Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers." },
        { code: "RL.3.2", desc: "Recount stories, including fables, folktales, and myths from diverse cultures; determine the central message, lesson, or moral and explain how it is conveyed through key details in the text." },
        { code: "RL.3.3", desc: "Describe characters in a story (e.g., their traits, motivations, or feelings) and explain how their actions contribute to the sequence of events." },
        { code: "RL.3.4", desc: "Determine the meaning of words and phrases as they are used in a text, distinguishing literal from nonliteral language." },
        { code: "RL.3.5", desc: "Refer to parts of stories, dramas, and poems when writing or speaking about a text, using terms such as chapter, scene, and stanza." },
        { code: "RL.3.6", desc: "Distinguish their own point of view from that of the narrator or those of the characters." },
        { code: "RL.3.7", desc: "Explain how specific aspects of a text's illustrations contribute to what is conveyed by the words in a story (e.g., create mood, emphasize aspects of a character or setting)." },
        { code: "RL.3.9", desc: "Compare and contrast the themes, settings, and plots of stories written by the same author about the same or similar characters." },
        // Reading: Informational Text (RI.3)
        { code: "RI.3.1", desc: "Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers." },
        { code: "RI.3.2", desc: "Determine the main idea of a text; recount the key details and explain how they support the main idea." },
        { code: "RI.3.3", desc: "Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text, using language that pertains to time, sequence, and cause/effect." },
        { code: "RI.3.4", desc: "Determine the meaning of general academic and domain-specific words and phrases in a text relevant to a grade 3 topic or subject area." },
        { code: "RI.3.5", desc: "Use text features and search tools (e.g., key words, sidebars, hyperlinks) to locate information relevant to a given topic efficiently." },
        { code: "RI.3.6", desc: "Distinguish their own point of view from that of the author of a text." },
        { code: "RI.3.7", desc: "Use information gained from illustrations (e.g., maps, photographs) and the words in a text to demonstrate understanding of the text." },
        { code: "RI.3.8", desc: "Describe the logical connection between particular sentences and paragraphs in a text (e.g., comparison, cause/effect, first/second/third in a sequence)." },
        { code: "RI.3.9", desc: "Compare and contrast the most important points and key details presented in two texts on the same topic." },
        // Reading: Foundational Skills (RF.3)
        { code: "RF.3.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.3.4", desc: "Read with sufficient accuracy and fluency to support comprehension." },
        // Writing (W.3)
        { code: "W.3.1", desc: "Write opinion pieces on topics or texts, supporting a point of view with reasons." },
        { code: "W.3.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas and information clearly." },
        { code: "W.3.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences." },
        { code: "W.3.4", desc: "With guidance and support from adults, produce writing in which the development and organization are appropriate to task and purpose." },
        { code: "W.3.5", desc: "With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, and editing." },
        { code: "W.3.7", desc: "Conduct short research projects that build knowledge about a topic." },
        { code: "W.3.8", desc: "Recall information from experiences or gather information from print and digital sources; take brief notes on sources and sort evidence into provided categories." },
        // Speaking & Listening (SL.3)
        { code: "SL.3.1", desc: "Engage effectively in a range of collaborative discussions (one-on-one, in groups, and teacher-led) with diverse partners on grade 3 topics and texts." },
        { code: "SL.3.2", desc: "Determine the main ideas and supporting details of a text read aloud or information presented in diverse media and formats." },
        { code: "SL.3.3", desc: "Ask and answer questions about information from a speaker, offering appropriate elaboration and detail." },
        { code: "SL.3.4", desc: "Report on a topic or text, tell a story, or recount an experience with appropriate facts and relevant, descriptive details, speaking clearly at an understandable pace." },
        { code: "SL.3.6", desc: "Speak in complete sentences when appropriate to task and situation in order to provide requested detail or clarification." },
        // Language (L.3)
        { code: "L.3.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.3.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.3.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.3.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 3 reading and content." },
        { code: "L.3.5", desc: "Demonstrate understanding of figurative language, word relationships and nuances in word meanings." },
        { code: "L.3.6", desc: "Acquire and use accurately grade-appropriate conversational, general academic, and domain-specific words and phrases, including those that signal spatial and temporal relationships." }
    ],
    "4": [
        // Reading: Literature (RL.4)
        { code: "RL.4.1", desc: "Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text." },
        { code: "RL.4.2", desc: "Determine a theme of a story, drama, or poem from details in the text; summarize the text." },
        { code: "RL.4.3", desc: "Describe in depth a character, setting, or event in a story or drama, drawing on specific details in the text (e.g., a character's thoughts, words, or actions)." },
        { code: "RL.4.4", desc: "Determine the meaning of words and phrases as they are used in a text, including those that allude to significant characters found in mythology." },
        { code: "RL.4.5", desc: "Explain major differences between poems, drama, and prose, and refer to the structural elements of poems and drama when writing or speaking about a text." },
        { code: "RL.4.6", desc: "Compare and contrast the point of view from which different stories are narrated, including the difference between first- and third-person narrations." },
        { code: "RL.4.7", desc: "Make connections between the text of a story or drama and a visual or oral presentation of the text, identifying where each version reflects specific descriptions and directions in the text." },
        { code: "RL.4.9", desc: "Compare and contrast the treatment of similar themes and topics (e.g., opposition of good and evil) and patterns of events in stories, myths, and traditional literature from different cultures." },
        // Reading: Informational Text (RI.4)
        { code: "RI.4.1", desc: "Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text." },
        { code: "RI.4.2", desc: "Determine the main idea of a text and explain how it is supported by key details; summarize the text." },
        { code: "RI.4.3", desc: "Explain events, procedures, ideas, or concepts in a historical, scientific, or technical text, including what happened and why, based on specific information in the text." },
        { code: "RI.4.4", desc: "Determine the meaning of general academic and domain-specific words or phrases in a text relevant to a grade 4 topic or subject area." },
        { code: "RI.4.5", desc: "Describe the overall structure (e.g., chronology, comparison, cause/effect, problem/solution) of events, ideas, concepts, or information in a text or part of a text." },
        { code: "RI.4.6", desc: "Compare and contrast a firsthand and secondhand account of the same event or topic; describe the differences in focus and the information provided." },
        { code: "RI.4.7", desc: "Interpret information presented visually, orally, or quantitatively and explain how the information contributes to an understanding of the text in which it appears." },
        { code: "RI.4.8", desc: "Explain how an author uses reasons and evidence to support particular points in a text." },
        { code: "RI.4.9", desc: "Integrate information from two texts on the same topic in order to write or speak about the subject knowledgeably." },
        // Reading: Foundational Skills (RF.4)
        { code: "RF.4.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.4.4", desc: "Read with sufficient accuracy and fluency to support comprehension." },
        // Writing (W.4)
        { code: "W.4.1", desc: "Write opinion pieces on topics or texts, supporting a point of view with reasons and information." },
        { code: "W.4.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas and information clearly." },
        { code: "W.4.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences." },
        { code: "W.4.4", desc: "Produce clear and coherent writing in which the development and organization are appropriate to task, purpose, and audience." },
        { code: "W.4.5", desc: "With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, and editing." },
        { code: "W.4.7", desc: "Conduct short research projects that build knowledge through investigation of different aspects of a topic." },
        { code: "W.4.8", desc: "Recall relevant information from experiences or gather relevant information from print and digital sources; take notes and categorize information, and provide a list of sources." },
        { code: "W.4.9", desc: "Draw evidence from literary or informational texts to support analysis, reflection, and research." },
        // Speaking & Listening (SL.4)
        { code: "SL.4.1", desc: "Engage effectively in a range of collaborative discussions with diverse partners on grade 4 topics and texts, building on others' ideas and expressing their own clearly." },
        { code: "SL.4.2", desc: "Paraphrase portions of a text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally." },
        { code: "SL.4.3", desc: "Identify the reasons and evidence a speaker provides to support particular points." },
        { code: "SL.4.4", desc: "Report on a topic or text, tell a story, or recount an experience in an organized manner, using appropriate facts and relevant, descriptive details to support main ideas or themes." },
        { code: "SL.4.6", desc: "Differentiate between contexts that call for formal English and situations where informal discourse is appropriate; use formal English when appropriate to task and situation." },
        // Language (L.4)
        { code: "L.4.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.4.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.4.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.4.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 4 reading and content." },
        { code: "L.4.5", desc: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings." },
        { code: "L.4.6", desc: "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases, including those that signal precise actions, emotions, or states of being." }
    ],
    "5": [
        // Reading: Literature (RL.5)
        { code: "RL.5.1", desc: "Quote accurately from a text when explaining what the text says explicitly and when drawing inferences from the text." },
        { code: "RL.5.2", desc: "Determine a theme of a story, drama, or poem from details in the text, including how characters in a story or drama respond to challenges or how the speaker in a poem reflects upon a topic; summarize the text." },
        { code: "RL.5.3", desc: "Compare and contrast two or more characters, settings, or events in a story or drama, drawing on specific details in the text." },
        { code: "RL.5.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative language such as metaphors and similes." },
        { code: "RL.5.5", desc: "Explain how a series of chapters, scenes, or stanzas fits together to provide the overall structure of a particular story, drama, or poem." },
        { code: "RL.5.6", desc: "Describe how a narrator's or speaker's point of view influences how events are described." },
        { code: "RL.5.7", desc: "Analyze how visual and multimedia elements contribute to the meaning, tone, or beauty of a text (e.g., graphic novel, multimedia presentation of fiction, folktale, myth, poem)." },
        { code: "RL.5.9", desc: "Compare and contrast stories in the same genre (e.g., mysteries and adventure stories) on their approaches to similar themes and topics." },
        // Reading: Informational Text (RI.5)
        { code: "RI.5.1", desc: "Quote accurately from a text when explaining what the text says explicitly and when drawing inferences from the text." },
        { code: "RI.5.2", desc: "Determine two or more main ideas of a text and explain how they are supported by key details; summarize the text." },
        { code: "RI.5.3", desc: "Explain the relationships or interactions between two or more individuals, events, ideas, or concepts in a text based on specific information in the text." },
        { code: "RI.5.4", desc: "Determine the meaning of general academic and domain-specific words and phrases in a text relevant to a grade 5 topic or subject area." },
        { code: "RI.5.5", desc: "Compare and contrast the overall structure of events, ideas, concepts, or information in two or more texts." },
        { code: "RI.5.6", desc: "Analyze multiple accounts of the same event or topic, noting important similarities and differences in the point of view they represent." },
        { code: "RI.5.7", desc: "Draw on information from multiple print or digital sources, demonstrating the ability to locate an answer to a question quickly or to solve a problem efficiently." },
        { code: "RI.5.8", desc: "Explain how an author uses reasons and evidence to support particular points in a text, identifying which reasons and evidence support which point(s)." },
        { code: "RI.5.9", desc: "Integrate information from several texts on the same topic in order to write or speak about the subject knowledgeably." },
        // Reading: Foundational Skills (RF.5)
        { code: "RF.5.3", desc: "Know and apply grade-level phonics and word analysis skills in decoding words." },
        { code: "RF.5.4", desc: "Read with sufficient accuracy and fluency to support comprehension." },
        // Writing (W.5)
        { code: "W.5.1", desc: "Write opinion pieces on topics or texts, supporting a point of view with reasons and information." },
        { code: "W.5.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas and information clearly." },
        { code: "W.5.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences." },
        { code: "W.5.4", desc: "Produce clear and coherent writing in which the development and organization are appropriate to task, purpose, and audience." },
        { code: "W.5.5", desc: "With guidance and support from peers and adults, develop and strengthen writing as needed by planning, drafting, revising, editing, rewriting, or trying a new approach." },
        { code: "W.5.7", desc: "Conduct short research projects that use several sources to build knowledge through investigation of different aspects of a topic." },
        { code: "W.5.8", desc: "Recall relevant information from experiences or gather relevant information from print and digital sources; summarize or paraphrase information in notes and finished work." },
        { code: "W.5.9", desc: "Draw evidence from literary or informational texts to support analysis, reflection, and research." },
        // Speaking & Listening (SL.5)
        { code: "SL.5.1", desc: "Engage effectively in a range of collaborative discussions with diverse partners on grade 5 topics and texts, building on others' ideas and expressing their own clearly." },
        { code: "SL.5.2", desc: "Summarize a written text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally." },
        { code: "SL.5.3", desc: "Summarize the points a speaker makes and explain how each claim is supported by reasons and evidence." },
        { code: "SL.5.4", desc: "Report on a topic or text or present an opinion, sequencing ideas logically and using appropriate facts and relevant, descriptive details to support main ideas or themes." },
        { code: "SL.5.6", desc: "Adapt speech to a variety of contexts and tasks, using formal English when appropriate to task and situation." },
        // Language (L.5)
        { code: "L.5.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.5.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.5.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.5.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 5 reading and content." },
        { code: "L.5.5", desc: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings." },
        { code: "L.5.6", desc: "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases, including those that signal contrast, addition, and other logical relationships." }
    ],
    "6": [
        // Reading: Literature (RL.6)
        { code: "RL.6.1", desc: "Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RL.6.2", desc: "Determine a theme or central idea of a text and how it is conveyed through particular details; provide a summary of the text distinct from personal opinions or judgments." },
        { code: "RL.6.3", desc: "Describe how a particular story's or drama's plot unfolds in a series of episodes as well as how the characters respond or change as the plot moves toward a resolution." },
        { code: "RL.6.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyze the impact of a specific word choice on meaning and tone." },
        { code: "RL.6.5", desc: "Analyze how a particular sentence, chapter, scene, or stanza fits into the overall structure of a text and contributes to the development of the theme, setting, or plot." },
        { code: "RL.6.6", desc: "Explain how an author develops the point of view of the narrator or speaker in a text." },
        { code: "RL.6.7", desc: "Compare and contrast the experience of reading a story, drama, or poem to listening to or viewing an audio, video, or live version of the text." },
        { code: "RL.6.9", desc: "Compare and contrast texts in different forms or genres in terms of their approaches to similar themes and topics." },
        // Reading: Informational Text (RI.6)
        { code: "RI.6.1", desc: "Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RI.6.2", desc: "Determine a central idea of a text and how it is conveyed through particular details; provide a summary of the text distinct from personal opinions or judgments." },
        { code: "RI.6.3", desc: "Analyze in detail how a key individual, event, or idea is introduced, illustrated, and elaborated in a text (e.g., through examples or anecdotes)." },
        { code: "RI.6.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings." },
        { code: "RI.6.5", desc: "Analyze how a particular sentence, paragraph, chapter, or section fits into the overall structure of a text and contributes to the development of the ideas." },
        { code: "RI.6.6", desc: "Determine an author's point of view or purpose in a text and explain how it is conveyed in the text." },
        { code: "RI.6.7", desc: "Integrate information presented in different media or formats (e.g., visually, quantitatively) as well as in words to develop a coherent understanding of a topic or issue." },
        { code: "RI.6.8", desc: "Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not." },
        { code: "RI.6.9", desc: "Compare and contrast one author's presentation of events with that of another (e.g., a memoir written by and a biography on the same person)." },
        // Writing (W.6)
        { code: "W.6.1", desc: "Write arguments to support claims with clear reasons and relevant evidence." },
        { code: "W.6.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection, organization, and analysis of relevant content." },
        { code: "W.6.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, relevant descriptive details, and well-structured event sequences." },
        { code: "W.6.4", desc: "Produce clear and coherent writing in which the development, organization, and style are appropriate to task, purpose, and audience." },
        { code: "W.6.5", desc: "With some guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, editing, rewriting, or trying a new approach." },
        { code: "W.6.7", desc: "Conduct short research projects to answer a question, drawing on several sources and refocusing the inquiry when appropriate." },
        { code: "W.6.8", desc: "Gather relevant information from multiple print and digital sources; assess the credibility of each source; and quote or paraphrase the data and conclusions of others." },
        { code: "W.6.9", desc: "Draw evidence from literary or informational texts to support analysis, reflection, and research." },
        // Speaking & Listening (SL.6)
        { code: "SL.6.1", desc: "Engage effectively in a range of collaborative discussions with diverse partners on grade 6 topics, texts, and issues, building on others' ideas and expressing their own clearly." },
        { code: "SL.6.2", desc: "Interpret information presented in diverse media and formats (e.g., visually, quantitatively, orally) and explain how it contributes to a topic, text, or issue under study." },
        { code: "SL.6.3", desc: "Delineate a speaker's argument and specific claims, distinguishing claims that are supported by reasons and evidence from claims that are not." },
        { code: "SL.6.4", desc: "Present claims and findings, sequencing ideas logically and using pertinent descriptions, facts, and details to accentuate main ideas or themes." },
        { code: "SL.6.6", desc: "Adapt speech to a variety of contexts and tasks, demonstrating command of formal English when indicated or appropriate." },
        // Language (L.6)
        { code: "L.6.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.6.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.6.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.6.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 6 reading and content." },
        { code: "L.6.5", desc: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings." },
        { code: "L.6.6", desc: "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases; gather vocabulary knowledge when considering a word or phrase important to comprehension or expression." }
    ],
    "7": [
        // Reading: Literature (RL.7)
        { code: "RL.7.1", desc: "Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RL.7.2", desc: "Determine a theme or central idea of a text and analyze its development over the course of the text; provide an objective summary of the text." },
        { code: "RL.7.3", desc: "Analyze how particular elements of a story or drama interact (e.g., how setting shapes the characters or plot)." },
        { code: "RL.7.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyze the impact of rhymes and other repetitions of sounds on a specific verse or stanza of a poem or section of a story or drama." },
        { code: "RL.7.5", desc: "Analyze how a drama's or poem's form or structure (e.g., soliloquy, sonnet) contributes to its meaning." },
        { code: "RL.7.6", desc: "Analyze how an author develops and contrasts the points of view of different characters or narrators in a text." },
        { code: "RL.7.7", desc: "Compare and contrast a written story, drama, or poem to its audio, filmed, staged, or multimedia version, analyzing the effects of techniques unique to each medium." },
        { code: "RL.7.9", desc: "Compare and contrast a fictional portrayal of a time, place, or character and a historical account of the same period as a means of understanding how authors of fiction use or alter history." },
        // Reading: Informational Text (RI.7)
        { code: "RI.7.1", desc: "Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RI.7.2", desc: "Determine two or more central ideas in a text and analyze their development over the course of the text; provide an objective summary of the text." },
        { code: "RI.7.3", desc: "Analyze the interactions between individuals, events, and ideas in a text (e.g., how ideas influence individuals or events, or how individuals influence ideas or events)." },
        { code: "RI.7.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings; analyze the impact of a specific word choice on meaning and tone." },
        { code: "RI.7.5", desc: "Analyze the structure an author uses to organize a text, including how the major sections contribute to the whole and to the development of the ideas." },
        { code: "RI.7.6", desc: "Determine an author's point of view or purpose in a text and analyze how the author distinguishes his or her position from others." },
        { code: "RI.7.7", desc: "Compare and contrast a text to an audio, video, or multimedia version of the text, analyzing each medium's portrayal of the subject (e.g., how the delivery of a speech affects the impact of the words)." },
        { code: "RI.7.8", desc: "Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient to support the claims." },
        { code: "RI.7.9", desc: "Analyze how two or more authors writing about the same topic shape their presentations of key information by emphasizing different evidence or advancing different interpretations of facts." },
        // Writing (W.7)
        { code: "W.7.1", desc: "Write arguments to support claims with clear reasons and relevant evidence." },
        { code: "W.7.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection, organization, and analysis of relevant content." },
        { code: "W.7.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, relevant descriptive details, and well-structured event sequences." },
        { code: "W.7.4", desc: "Produce clear and coherent writing in which the development, organization, and style are appropriate to task, purpose, and audience." },
        { code: "W.7.5", desc: "With some guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, editing, rewriting, or trying a new approach." },
        { code: "W.7.7", desc: "Conduct short research projects to answer a question, drawing on several sources and generating additional related, focused questions for further research and investigation." },
        { code: "W.7.8", desc: "Gather relevant information from multiple print and digital sources; assess the credibility of each source; quote or paraphrase the data and conclusions of others while avoiding plagiarism." },
        { code: "W.7.9", desc: "Draw evidence from literary or informational texts to support analysis, reflection, and research." },
        // Speaking & Listening (SL.7)
        { code: "SL.7.1", desc: "Engage effectively in a range of collaborative discussions with diverse partners on grade 7 topics, texts, and issues, building on others' ideas and expressing their own clearly." },
        { code: "SL.7.2", desc: "Analyze the main ideas and supporting details presented in diverse media and formats (e.g., visually, quantitatively, orally) and explain how the ideas clarify a topic, text, or issue under study." },
        { code: "SL.7.3", desc: "Delineate a speaker's argument and specific claims, evaluating the soundness of the reasoning and the relevance and sufficiency of the evidence." },
        { code: "SL.7.4", desc: "Present claims and findings, emphasizing salient points in a focused, coherent manner with pertinent descriptions, facts, details, and examples." },
        { code: "SL.7.6", desc: "Adapt speech to a variety of contexts and tasks, demonstrating command of formal English when indicated or appropriate." },
        // Language (L.7)
        { code: "L.7.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.7.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.7.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.7.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 7 reading and content." },
        { code: "L.7.5", desc: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings." },
        { code: "L.7.6", desc: "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases; gather vocabulary knowledge when considering a word or phrase important to comprehension or expression." }
    ],
    "8": [
        // Reading: Literature (RL.8)
        { code: "RL.8.1", desc: "Cite the textual evidence that most strongly supports an analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RL.8.2", desc: "Determine a theme or central idea of a text and analyze its development over the course of the text, including its relationship to the characters, setting, and plot; provide an objective summary of the text." },
        { code: "RL.8.3", desc: "Analyze how particular lines of dialogue or incidents in a story or drama propel the action, reveal aspects of a character, or provoke a decision." },
        { code: "RL.8.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyze the impact of specific word choices on meaning and tone, including analogies or allusions to other texts." },
        { code: "RL.8.5", desc: "Compare and contrast the structure of two or more texts and analyze how the differing structure of each text contributes to its meaning and style." },
        { code: "RL.8.6", desc: "Analyze how differences in the points of view of the characters and the audience or reader create effects such as suspense or humor." },
        { code: "RL.8.7", desc: "Analyze the extent to which a filmed or live production of a story or drama stays faithful to or departs from the text or script, evaluating the choices made by the director or actors." },
        { code: "RL.8.9", desc: "Analyze how a modern work of fiction draws on themes, patterns of events, or character types from myths, traditional stories, or religious works such as the Bible, including describing how the material is rendered new." },
        // Reading: Informational Text (RI.8)
        { code: "RI.8.1", desc: "Cite the textual evidence that most strongly supports an analysis of what the text says explicitly as well as inferences drawn from the text." },
        { code: "RI.8.2", desc: "Determine a central idea of a text and analyze its development over the course of the text, including its relationship to supporting ideas; provide an objective summary of the text." },
        { code: "RI.8.3", desc: "Analyze how a text makes connections among and distinctions between individuals, ideas, or events (e.g., through comparisons, analogies, or categories)." },
        { code: "RI.8.4", desc: "Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings; analyze the impact of specific word choices on meaning and tone." },
        { code: "RI.8.5", desc: "Analyze in detail the structure of a specific paragraph in a text, including the role of particular sentences in developing and refining a key concept." },
        { code: "RI.8.6", desc: "Determine an author's point of view or purpose in a text and analyze how the author acknowledges and responds to conflicting evidence or viewpoints." },
        { code: "RI.8.7", desc: "Evaluate the advantages and disadvantages of using different mediums (e.g., print or digital text, video, multimedia) to present a particular topic or idea." },
        { code: "RI.8.8", desc: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient; recognize when irrelevant evidence is introduced." },
        { code: "RI.8.9", desc: "Analyze a case in which two or more texts provide conflicting information on the same topic and identify where the texts disagree on matters of fact or interpretation." },
        // Writing (W.8)
        { code: "W.8.1", desc: "Write arguments to support claims with clear reasons and relevant evidence." },
        { code: "W.8.2", desc: "Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection, organization, and analysis of relevant content." },
        { code: "W.8.3", desc: "Write narratives to develop real or imagined experiences or events using effective technique, relevant descriptive details, and well-structured event sequences." },
        { code: "W.8.4", desc: "Produce clear and coherent writing in which the development, organization, and style are appropriate to task, purpose, and audience." },
        { code: "W.8.5", desc: "With some guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, editing, rewriting, or trying a new approach." },
        { code: "W.8.7", desc: "Conduct short research projects to answer a question (including a self-generated question), drawing on several sources and generating additional related, focused questions." },
        { code: "W.8.8", desc: "Gather relevant information from multiple print and digital sources, using search terms effectively; assess the credibility and accuracy of each source; and quote or paraphrase the data and conclusions of others." },
        { code: "W.8.9", desc: "Draw evidence from literary or informational texts to support analysis, reflection, and research." },
        // Speaking & Listening (SL.8)
        { code: "SL.8.1", desc: "Engage effectively in a range of collaborative discussions with diverse partners on grade 8 topics, texts, and issues, building on others' ideas and expressing their own clearly." },
        { code: "SL.8.2", desc: "Analyze the purpose of information presented in diverse media and formats (e.g., visually, quantitatively, orally) and evaluate the motives (e.g., social, commercial, political) behind its presentation." },
        { code: "SL.8.3", desc: "Delineate a speaker's argument and specific claims, evaluating the soundness of the reasoning and relevance and sufficiency of the evidence and identifying when irrelevant evidence is introduced." },
        { code: "SL.8.4", desc: "Present claims and findings, emphasizing salient points in a focused, coherent manner with relevant evidence, sound valid reasoning, and well-chosen details." },
        { code: "SL.8.6", desc: "Adapt speech to a variety of contexts and tasks, demonstrating command of formal English when indicated or appropriate." },
        // Language (L.8)
        { code: "L.8.1", desc: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking." },
        { code: "L.8.2", desc: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing." },
        { code: "L.8.3", desc: "Use knowledge of language and its conventions when writing, speaking, reading, or listening." },
        { code: "L.8.4", desc: "Determine or clarify the meaning of unknown and multiple-meaning words or phrases based on grade 8 reading and content." },
        { code: "L.8.5", desc: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings." },
        { code: "L.8.6", desc: "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases; gather vocabulary knowledge when considering a word or phrase important to comprehension or expression." }
    ]
};

/**
 * Get Common Core standards data for a given subject and grade
 * @param {string} subject - "math" or "ela"
 * @param {string} grade - Grade level ("K", "1"–"8")
 * @returns {Object} { type: "standards", items: [...] }
 */
function getCCStandardsData(subject, grade) {
    const map = subject === 'math' ? CC_MATH_STANDARDS : CC_ELA_STANDARDS;
    const items = map[grade] || [];
    return { type: "standards", items };
}
