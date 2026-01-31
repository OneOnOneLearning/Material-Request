/**
 * Standards Data by State and Grade
 *
 * Structure:
 * - Each state has its own standards (some states share Common Core)
 * - Standards are organized by subject (math, ela) and grade (K-12)
 * - Each standard has a code and description
 *
 * To add more states or standards, follow the existing pattern.
 */

const STANDARDS_DATA = {
    // Common Core States (used by many states)
    commonCore: {
        math: {
            'K': [
                { code: 'K.CC.1', desc: 'Count to 100 by ones and by tens' },
                { code: 'K.CC.2', desc: 'Count forward from a given number' },
                { code: 'K.CC.3', desc: 'Write numbers from 0 to 20' },
                { code: 'K.CC.4', desc: 'Understand relationship between numbers and quantities' },
                { code: 'K.CC.5', desc: 'Count to answer "how many?" questions' },
                { code: 'K.OA.1', desc: 'Represent addition and subtraction' },
                { code: 'K.OA.2', desc: 'Solve addition and subtraction word problems' },
                { code: 'K.NBT.1', desc: 'Compose and decompose numbers 11-19' },
                { code: 'K.G.1', desc: 'Describe objects using positional terms' },
                { code: 'K.G.2', desc: 'Name shapes regardless of orientation or size' }
            ],
            '1': [
                { code: '1.OA.1', desc: 'Solve addition and subtraction word problems within 20' },
                { code: '1.OA.2', desc: 'Solve word problems with three whole numbers' },
                { code: '1.OA.3', desc: 'Apply properties of operations' },
                { code: '1.OA.4', desc: 'Understand subtraction as unknown-addend problem' },
                { code: '1.OA.5', desc: 'Relate counting to addition and subtraction' },
                { code: '1.OA.6', desc: 'Add and subtract within 20' },
                { code: '1.NBT.1', desc: 'Count to 120 starting from any number' },
                { code: '1.NBT.2', desc: 'Understand place value (tens and ones)' },
                { code: '1.NBT.3', desc: 'Compare two-digit numbers' },
                { code: '1.MD.1', desc: 'Order three objects by length' }
            ],
            '2': [
                { code: '2.OA.1', desc: 'Solve one and two-step word problems' },
                { code: '2.OA.2', desc: 'Fluently add and subtract within 20' },
                { code: '2.OA.3', desc: 'Determine odd or even numbers' },
                { code: '2.NBT.1', desc: 'Understand place value (hundreds)' },
                { code: '2.NBT.2', desc: 'Count within 1000; skip-count by 5s, 10s, 100s' },
                { code: '2.NBT.3', desc: 'Read and write numbers to 1000' },
                { code: '2.NBT.4', desc: 'Compare two three-digit numbers' },
                { code: '2.NBT.5', desc: 'Fluently add and subtract within 100' },
                { code: '2.MD.1', desc: 'Measure length of an object' },
                { code: '2.G.1', desc: 'Recognize and draw shapes' }
            ],
            '3': [
                { code: '3.OA.1', desc: 'Interpret products of whole numbers' },
                { code: '3.OA.2', desc: 'Interpret quotients of whole numbers' },
                { code: '3.OA.3', desc: 'Solve multiplication and division word problems' },
                { code: '3.OA.4', desc: 'Determine unknown whole number in equations' },
                { code: '3.OA.5', desc: 'Apply properties of multiplication' },
                { code: '3.OA.6', desc: 'Understand division as unknown-factor problem' },
                { code: '3.OA.7', desc: 'Fluently multiply and divide within 100' },
                { code: '3.NF.1', desc: 'Understand fractions as parts of a whole' },
                { code: '3.NF.2', desc: 'Represent fractions on a number line' },
                { code: '3.MD.1', desc: 'Tell and write time to the nearest minute' }
            ],
            '4': [
                { code: '4.OA.1', desc: 'Interpret multiplication equations as comparisons' },
                { code: '4.OA.2', desc: 'Multiply or divide to solve word problems' },
                { code: '4.OA.3', desc: 'Solve multi-step word problems' },
                { code: '4.NBT.1', desc: 'Recognize place value relationships' },
                { code: '4.NBT.2', desc: 'Read and write multi-digit whole numbers' },
                { code: '4.NBT.3', desc: 'Round multi-digit whole numbers' },
                { code: '4.NBT.4', desc: 'Fluently add and subtract multi-digit numbers' },
                { code: '4.NBT.5', desc: 'Multiply whole numbers up to four digits' },
                { code: '4.NF.1', desc: 'Explain equivalent fractions' },
                { code: '4.NF.2', desc: 'Compare fractions with different denominators' }
            ],
            '5': [
                { code: '5.OA.1', desc: 'Use parentheses, brackets, or braces' },
                { code: '5.OA.2', desc: 'Write and interpret numerical expressions' },
                { code: '5.NBT.1', desc: 'Recognize place value pattern (10x)' },
                { code: '5.NBT.2', desc: 'Explain patterns in powers of 10' },
                { code: '5.NBT.3', desc: 'Read, write, and compare decimals' },
                { code: '5.NBT.4', desc: 'Round decimals to any place' },
                { code: '5.NBT.5', desc: 'Fluently multiply multi-digit whole numbers' },
                { code: '5.NF.1', desc: 'Add and subtract fractions with unlike denominators' },
                { code: '5.NF.2', desc: 'Solve word problems with fractions' },
                { code: '5.MD.1', desc: 'Convert measurement units' }
            ],
            '6': [
                { code: '6.RP.1', desc: 'Understand ratio concepts' },
                { code: '6.RP.2', desc: 'Understand unit rate concepts' },
                { code: '6.RP.3', desc: 'Use ratio and rate reasoning' },
                { code: '6.NS.1', desc: 'Interpret and compute quotients of fractions' },
                { code: '6.NS.2', desc: 'Fluently divide multi-digit numbers' },
                { code: '6.NS.3', desc: 'Fluently add, subtract, multiply, divide decimals' },
                { code: '6.NS.5', desc: 'Understand positive and negative numbers' },
                { code: '6.EE.1', desc: 'Write and evaluate numerical expressions' },
                { code: '6.EE.2', desc: 'Write, read, and evaluate expressions with variables' },
                { code: '6.G.1', desc: 'Find area of polygons' }
            ],
            '7': [
                { code: '7.RP.1', desc: 'Compute unit rates with ratios of fractions' },
                { code: '7.RP.2', desc: 'Recognize proportional relationships' },
                { code: '7.RP.3', desc: 'Solve multi-step ratio and percent problems' },
                { code: '7.NS.1', desc: 'Apply properties of operations to add/subtract rationals' },
                { code: '7.NS.2', desc: 'Apply properties to multiply/divide rationals' },
                { code: '7.NS.3', desc: 'Solve real-world problems with rationals' },
                { code: '7.EE.1', desc: 'Apply properties to add/subtract linear expressions' },
                { code: '7.EE.2', desc: 'Rewrite expressions in different forms' },
                { code: '7.EE.3', desc: 'Solve multi-step real-world problems' },
                { code: '7.G.1', desc: 'Solve problems with scale drawings' }
            ],
            '8': [
                { code: '8.NS.1', desc: 'Understand irrational numbers' },
                { code: '8.NS.2', desc: 'Approximate irrational numbers' },
                { code: '8.EE.1', desc: 'Know and apply properties of exponents' },
                { code: '8.EE.2', desc: 'Use square root and cube root symbols' },
                { code: '8.EE.3', desc: 'Use numbers in scientific notation' },
                { code: '8.EE.4', desc: 'Perform operations with scientific notation' },
                { code: '8.EE.5', desc: 'Graph proportional relationships' },
                { code: '8.EE.6', desc: 'Derive the equation y = mx + b' },
                { code: '8.F.1', desc: 'Understand that a function is a rule' },
                { code: '8.G.1', desc: 'Verify properties of rotations, reflections, translations' }
            ],
            '9': [
                { code: 'HSN.RN.1', desc: 'Explain properties of rational exponents' },
                { code: 'HSN.RN.2', desc: 'Rewrite expressions with radicals and rational exponents' },
                { code: 'HSA.SSE.1', desc: 'Interpret expressions' },
                { code: 'HSA.SSE.2', desc: 'Use structure of an expression' },
                { code: 'HSA.APR.1', desc: 'Add, subtract, and multiply polynomials' },
                { code: 'HSA.CED.1', desc: 'Create equations in one variable' },
                { code: 'HSA.CED.2', desc: 'Create equations in two or more variables' },
                { code: 'HSA.REI.1', desc: 'Explain each step in solving equations' },
                { code: 'HSA.REI.3', desc: 'Solve linear equations and inequalities' },
                { code: 'HSF.IF.1', desc: 'Understand function notation' }
            ],
            '10': [
                { code: 'HSG.CO.1', desc: 'Know precise definitions of geometric terms' },
                { code: 'HSG.CO.2', desc: 'Represent transformations' },
                { code: 'HSG.CO.6', desc: 'Use geometric descriptions of rigid motions' },
                { code: 'HSG.CO.9', desc: 'Prove theorems about lines and angles' },
                { code: 'HSG.SRT.1', desc: 'Verify properties of dilations' },
                { code: 'HSG.SRT.2', desc: 'Use similarity criteria for triangles' },
                { code: 'HSG.SRT.4', desc: 'Prove theorems about triangles' },
                { code: 'HSG.SRT.6', desc: 'Understand trigonometric ratios' },
                { code: 'HSG.C.1', desc: 'Prove all circles are similar' },
                { code: 'HSG.GPE.1', desc: 'Derive equation of a circle' }
            ],
            '11': [
                { code: 'HSF.TF.1', desc: 'Understand radian measure' },
                { code: 'HSF.TF.2', desc: 'Explain using unit circle' },
                { code: 'HSF.TF.5', desc: 'Model periodic phenomena with trig functions' },
                { code: 'HSF.TF.8', desc: 'Prove the Pythagorean identity' },
                { code: 'HSS.ID.1', desc: 'Represent data with plots' },
                { code: 'HSS.ID.2', desc: 'Use statistics to compare data sets' },
                { code: 'HSS.ID.3', desc: 'Interpret differences in shape and spread' },
                { code: 'HSS.ID.6', desc: 'Represent bivariate data on scatter plots' },
                { code: 'HSS.IC.1', desc: 'Understand statistics as inference' },
                { code: 'HSS.IC.3', desc: 'Recognize purposes of surveys/experiments' }
            ],
            '12': [
                { code: 'HSN.CN.1', desc: 'Know definition of complex numbers' },
                { code: 'HSN.CN.2', desc: 'Use i² = -1 to compute' },
                { code: 'HSN.CN.7', desc: 'Solve quadratics with complex solutions' },
                { code: 'HSN.VM.1', desc: 'Recognize vectors as magnitude and direction' },
                { code: 'HSN.VM.2', desc: 'Find components of a vector' },
                { code: 'HSS.CP.1', desc: 'Describe events as subsets' },
                { code: 'HSS.CP.2', desc: 'Understand independent events' },
                { code: 'HSS.CP.3', desc: 'Understand conditional probability' },
                { code: 'HSS.MD.1', desc: 'Define random variable' },
                { code: 'HSS.MD.5', desc: 'Calculate expected value' }
            ]
        },
        ela: {
            'K': [
                { code: 'K.RL.1', desc: 'Ask and answer questions about key details' },
                { code: 'K.RL.2', desc: 'Retell familiar stories with key details' },
                { code: 'K.RL.3', desc: 'Identify characters, settings, and major events' },
                { code: 'K.RI.1', desc: 'Ask and answer questions about key details in text' },
                { code: 'K.RF.1', desc: 'Demonstrate understanding of print concepts' },
                { code: 'K.RF.2', desc: 'Demonstrate understanding of spoken words and sounds' },
                { code: 'K.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: 'K.W.1', desc: 'Use drawing and writing to compose opinion pieces' },
                { code: 'K.W.2', desc: 'Use drawing and writing to compose informative texts' },
                { code: 'K.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '1': [
                { code: '1.RL.1', desc: 'Ask and answer questions about key details' },
                { code: '1.RL.2', desc: 'Retell stories and determine central message' },
                { code: '1.RL.3', desc: 'Describe characters, settings, and major events' },
                { code: '1.RI.1', desc: 'Ask and answer questions about key details' },
                { code: '1.RF.1', desc: 'Demonstrate understanding of print concepts' },
                { code: '1.RF.2', desc: 'Demonstrate understanding of phonemes' },
                { code: '1.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: '1.RF.4', desc: 'Read with fluency to support comprehension' },
                { code: '1.W.1', desc: 'Write opinion pieces with reasons' },
                { code: '1.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '2': [
                { code: '2.RL.1', desc: 'Ask and answer questions (who, what, where, when, why, how)' },
                { code: '2.RL.2', desc: 'Recount stories and determine central message' },
                { code: '2.RL.3', desc: 'Describe how characters respond to events' },
                { code: '2.RI.1', desc: 'Ask and answer questions about key details' },
                { code: '2.RI.2', desc: 'Identify the main topic of a text' },
                { code: '2.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: '2.RF.4', desc: 'Read with fluency to support comprehension' },
                { code: '2.W.1', desc: 'Write opinion pieces with supporting reasons' },
                { code: '2.W.2', desc: 'Write informative/explanatory texts' },
                { code: '2.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '3': [
                { code: '3.RL.1', desc: 'Ask and answer questions referring to text' },
                { code: '3.RL.2', desc: 'Recount stories and determine central message' },
                { code: '3.RL.3', desc: 'Describe characters and explain their actions' },
                { code: '3.RI.1', desc: 'Ask and answer questions referring to text' },
                { code: '3.RI.2', desc: 'Determine the main idea of a text' },
                { code: '3.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: '3.RF.4', desc: 'Read with fluency to support comprehension' },
                { code: '3.W.1', desc: 'Write opinion pieces with supporting reasons' },
                { code: '3.W.2', desc: 'Write informative/explanatory texts' },
                { code: '3.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '4': [
                { code: '4.RL.1', desc: 'Refer to details and examples when explaining text' },
                { code: '4.RL.2', desc: 'Determine theme and summarize text' },
                { code: '4.RL.3', desc: 'Describe character, setting, or event in depth' },
                { code: '4.RI.1', desc: 'Refer to details and examples in text' },
                { code: '4.RI.2', desc: 'Determine main idea and key details' },
                { code: '4.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: '4.RF.4', desc: 'Read with fluency to support comprehension' },
                { code: '4.W.1', desc: 'Write opinion pieces with supporting reasons' },
                { code: '4.W.2', desc: 'Write informative/explanatory texts' },
                { code: '4.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '5': [
                { code: '5.RL.1', desc: 'Quote accurately when explaining text' },
                { code: '5.RL.2', desc: 'Determine theme and summarize text' },
                { code: '5.RL.3', desc: 'Compare and contrast characters, settings, events' },
                { code: '5.RI.1', desc: 'Quote accurately when explaining text' },
                { code: '5.RI.2', desc: 'Determine two or more main ideas' },
                { code: '5.RF.3', desc: 'Know and apply phonics and word analysis' },
                { code: '5.RF.4', desc: 'Read with fluency to support comprehension' },
                { code: '5.W.1', desc: 'Write opinion pieces with logically ordered reasons' },
                { code: '5.W.2', desc: 'Write informative/explanatory texts' },
                { code: '5.L.1', desc: 'Demonstrate command of standard English grammar' }
            ],
            '6': [
                { code: '6.RL.1', desc: 'Cite textual evidence to support analysis' },
                { code: '6.RL.2', desc: 'Determine theme and summarize text' },
                { code: '6.RL.3', desc: 'Describe how plot unfolds' },
                { code: '6.RI.1', desc: 'Cite textual evidence to support analysis' },
                { code: '6.RI.2', desc: 'Determine central idea and key details' },
                { code: '6.W.1', desc: 'Write arguments with claims and evidence' },
                { code: '6.W.2', desc: 'Write informative/explanatory texts' },
                { code: '6.W.3', desc: 'Write narratives with effective techniques' },
                { code: '6.L.1', desc: 'Demonstrate command of standard English grammar' },
                { code: '6.L.2', desc: 'Demonstrate command of punctuation and spelling' }
            ],
            '7': [
                { code: '7.RL.1', desc: 'Cite several pieces of textual evidence' },
                { code: '7.RL.2', desc: 'Determine theme and analyze development' },
                { code: '7.RL.3', desc: 'Analyze how story elements interact' },
                { code: '7.RI.1', desc: 'Cite several pieces of textual evidence' },
                { code: '7.RI.2', desc: 'Determine two or more central ideas' },
                { code: '7.W.1', desc: 'Write arguments with claims and evidence' },
                { code: '7.W.2', desc: 'Write informative/explanatory texts' },
                { code: '7.W.3', desc: 'Write narratives with effective techniques' },
                { code: '7.L.1', desc: 'Demonstrate command of standard English grammar' },
                { code: '7.L.2', desc: 'Demonstrate command of punctuation and spelling' }
            ],
            '8': [
                { code: '8.RL.1', desc: 'Cite textual evidence that supports analysis' },
                { code: '8.RL.2', desc: 'Determine theme and analyze development' },
                { code: '8.RL.3', desc: 'Analyze how dialogue propels action' },
                { code: '8.RI.1', desc: 'Cite textual evidence that supports analysis' },
                { code: '8.RI.2', desc: 'Determine central idea and analyze development' },
                { code: '8.W.1', desc: 'Write arguments with clear reasons and evidence' },
                { code: '8.W.2', desc: 'Write informative/explanatory texts' },
                { code: '8.W.3', desc: 'Write narratives with effective techniques' },
                { code: '8.L.1', desc: 'Demonstrate command of standard English grammar' },
                { code: '8.L.2', desc: 'Demonstrate command of punctuation and spelling' }
            ],
            '9': [
                { code: '9-10.RL.1', desc: 'Cite strong textual evidence' },
                { code: '9-10.RL.2', desc: 'Determine theme and analyze development' },
                { code: '9-10.RL.3', desc: 'Analyze how complex characters develop' },
                { code: '9-10.RI.1', desc: 'Cite strong textual evidence' },
                { code: '9-10.RI.2', desc: 'Determine central idea and analyze development' },
                { code: '9-10.W.1', desc: 'Write arguments with valid reasoning' },
                { code: '9-10.W.2', desc: 'Write informative/explanatory texts' },
                { code: '9-10.W.3', desc: 'Write narratives using effective techniques' },
                { code: '9-10.L.1', desc: 'Demonstrate command of standard English grammar' },
                { code: '9-10.L.2', desc: 'Demonstrate command of punctuation and spelling' }
            ],
            '10': [
                { code: '9-10.RL.4', desc: 'Determine meaning of words and phrases' },
                { code: '9-10.RL.5', desc: 'Analyze how author structures text' },
                { code: '9-10.RL.6', desc: 'Analyze point of view or cultural experience' },
                { code: '9-10.RI.4', desc: 'Determine meaning of words and phrases' },
                { code: '9-10.RI.5', desc: 'Analyze how author structures text' },
                { code: '9-10.W.4', desc: 'Produce clear and coherent writing' },
                { code: '9-10.W.5', desc: 'Develop writing through planning and revising' },
                { code: '9-10.L.3', desc: 'Apply knowledge of language' },
                { code: '9-10.L.4', desc: 'Determine meaning of unknown words' },
                { code: '9-10.L.5', desc: 'Demonstrate understanding of figurative language' }
            ],
            '11': [
                { code: '11-12.RL.1', desc: 'Cite strong and thorough textual evidence' },
                { code: '11-12.RL.2', desc: 'Determine themes and analyze development' },
                { code: '11-12.RL.3', desc: 'Analyze impact of author choices' },
                { code: '11-12.RI.1', desc: 'Cite strong and thorough textual evidence' },
                { code: '11-12.RI.2', desc: 'Determine central ideas and analyze development' },
                { code: '11-12.W.1', desc: 'Write arguments with valid reasoning' },
                { code: '11-12.W.2', desc: 'Write informative/explanatory texts' },
                { code: '11-12.W.3', desc: 'Write narratives using effective techniques' },
                { code: '11-12.L.1', desc: 'Demonstrate command of standard English grammar' },
                { code: '11-12.L.2', desc: 'Demonstrate command of punctuation and spelling' }
            ],
            '12': [
                { code: '11-12.RL.4', desc: 'Determine meaning of words and phrases' },
                { code: '11-12.RL.5', desc: 'Analyze how author structures text' },
                { code: '11-12.RL.6', desc: 'Analyze multiple perspectives or cultural experience' },
                { code: '11-12.RI.4', desc: 'Determine meaning of words and phrases' },
                { code: '11-12.RI.5', desc: 'Analyze how author structures text' },
                { code: '11-12.W.4', desc: 'Produce clear and coherent writing' },
                { code: '11-12.W.5', desc: 'Develop writing through planning and revising' },
                { code: '11-12.L.3', desc: 'Apply knowledge of language' },
                { code: '11-12.L.4', desc: 'Determine meaning of unknown words' },
                { code: '11-12.L.5', desc: 'Demonstrate understanding of figurative language' }
            ]
        }
    },

    // Texas - TEKS Standards
    TX: {
        math: {
            'K': [
                { code: 'K.2A', desc: 'Count forward and backward to at least 20' },
                { code: 'K.2B', desc: 'Read, write, and represent whole numbers to 20' },
                { code: 'K.2C', desc: 'Count a set of objects up to 20' },
                { code: 'K.2D', desc: 'Recognize instantly the quantity of small sets' },
                { code: 'K.2E', desc: 'Generate a set with more or fewer objects' },
                { code: 'K.2F', desc: 'Compare sets using comparative language' },
                { code: 'K.2G', desc: 'Compare two numbers up to 20' },
                { code: 'K.3A', desc: 'Model addition and subtraction' },
                { code: 'K.3B', desc: 'Solve word problems using objects or drawings' },
                { code: 'K.3C', desc: 'Explain problem-solving strategies' }
            ],
            '1': [
                { code: '1.2A', desc: 'Recognize instantly small quantities' },
                { code: '1.2B', desc: 'Use concrete and pictorial models for whole numbers' },
                { code: '1.2C', desc: 'Use objects and pictorial models for place value' },
                { code: '1.2D', desc: 'Generate numbers less than or greater than a given number' },
                { code: '1.3A', desc: 'Use concrete and pictorial models for addition' },
                { code: '1.3B', desc: 'Use concrete and pictorial models for subtraction' },
                { code: '1.3C', desc: 'Compose and decompose 10' },
                { code: '1.3D', desc: 'Apply basic fact strategies to add within 20' },
                { code: '1.3E', desc: 'Explain strategies for basic addition and subtraction' },
                { code: '1.3F', desc: 'Generate and solve addition and subtraction problems' }
            ],
            '2': [
                { code: '2.2A', desc: 'Use concrete models for standard form notation' },
                { code: '2.2B', desc: 'Use standard, word, and expanded forms for numbers' },
                { code: '2.2C', desc: 'Generate numbers using comparative language' },
                { code: '2.2D', desc: 'Use place value to compare whole numbers' },
                { code: '2.4A', desc: 'Recall basic addition and subtraction facts' },
                { code: '2.4B', desc: 'Add up to four two-digit numbers' },
                { code: '2.4C', desc: 'Solve one-step and multi-step word problems' },
                { code: '2.4D', desc: 'Generate and solve problems with sums/differences' },
                { code: '2.6A', desc: 'Model, create, and describe contextual multiplication' },
                { code: '2.6B', desc: 'Model, create, and describe contextual division' }
            ],
            '3': [
                { code: '3.2A', desc: 'Compose and decompose numbers up to 100,000' },
                { code: '3.2B', desc: 'Describe value of digits using place value' },
                { code: '3.2C', desc: 'Represent numbers using expanded notation' },
                { code: '3.2D', desc: 'Compare and order whole numbers' },
                { code: '3.4A', desc: 'Solve one-step and two-step problems' },
                { code: '3.4B', desc: 'Round to the nearest 10 or 100' },
                { code: '3.4C', desc: 'Determine the value of coins and bills' },
                { code: 'TEKS 3.4D', desc: 'Determine the total value of a collection' },
                { code: '3.4E', desc: 'Represent multiplication facts using arrays' },
                { code: '3.4F', desc: 'Recall multiplication facts up to 10' }
            ],
            '4': [
                { code: '4.2A', desc: 'Interpret value of each place-value position' },
                { code: '4.2B', desc: 'Represent the value of a digit' },
                { code: '4.2C', desc: 'Compare and order whole numbers to 1 billion' },
                { code: '4.2D', desc: 'Round whole numbers to a given place value' },
                { code: '4.3A', desc: 'Represent a fraction as part of a whole' },
                { code: '4.3B', desc: 'Decompose a fraction' },
                { code: '4.3C', desc: 'Determine equivalent fractions' },
                { code: '4.3D', desc: 'Compare two fractions' },
                { code: '4.4A', desc: 'Add and subtract whole numbers' },
                { code: '4.4B', desc: 'Determine products of a number and 10 or 100' }
            ],
            '5': [
                { code: '5.2A', desc: 'Represent the value of decimals to thousandths' },
                { code: '5.2B', desc: 'Compare and order decimals to thousandths' },
                { code: '5.2C', desc: 'Round decimals to tenths or hundredths' },
                { code: '5.3A', desc: 'Estimate products and quotients' },
                { code: '5.3B', desc: 'Multiply with fluency' },
                { code: '5.3C', desc: 'Solve for quotients with dividends up to 4 digits' },
                { code: '5.3D', desc: 'Represent remainders as fractions or decimals' },
                { code: '5.3E', desc: 'Solve multi-step division problems' },
                { code: '5.3F', desc: 'Represent expression using an equation' },
                { code: '5.3G', desc: 'Use strategies to add and subtract fractions' }
            ],
            '6': [
                { code: '6.2A', desc: 'Classify whole numbers, integers, and rationals' },
                { code: '6.2B', desc: 'Identify a number and its opposite' },
                { code: '6.2C', desc: 'Locate, compare, and order integers and rationals' },
                { code: '6.2D', desc: 'Order a set of rational numbers' },
                { code: '6.2E', desc: 'Extend representations for division to include fractions' },
                { code: '6.3A', desc: 'Recognize that dividing by a rational is equivalent' },
                { code: '6.3B', desc: 'Determine with fluency equivalent fractions and decimals' },
                { code: '6.3C', desc: 'Represent ratios and percents' },
                { code: '6.3D', desc: 'Add, subtract, multiply, and divide integers' },
                { code: '6.3E', desc: 'Multiply and divide positive rational numbers' }
            ],
            '7': [
                { code: '7.2A', desc: 'Extend previous knowledge of sets and subsets' },
                { code: '7.3A', desc: 'Add, subtract, multiply, and divide rationals' },
                { code: '7.3B', desc: 'Apply and extend previous understandings' },
                { code: '7.4A', desc: 'Represent constant rates of change' },
                { code: '7.4B', desc: 'Calculate unit rates from rates' },
                { code: '7.4C', desc: 'Determine the constant of proportionality' },
                { code: '7.4D', desc: 'Solve problems involving ratios and proportions' },
                { code: '7.4E', desc: 'Convert between measurement systems' },
                { code: '7.6A', desc: 'Represent sample spaces using list, tables, and trees' },
                { code: '7.6B', desc: 'Calculate probabilities of events' }
            ],
            '8': [
                { code: '8.2A', desc: 'Extend previous knowledge of sets' },
                { code: '8.2B', desc: 'Approximate the value of an irrational number' },
                { code: '8.2C', desc: 'Convert between standard decimal notation and scientific notation' },
                { code: '8.2D', desc: 'Order sets of real numbers' },
                { code: '8.4A', desc: 'Use similar right triangles' },
                { code: '8.4B', desc: 'Graph proportional relationships' },
                { code: '8.4C', desc: 'Use data to determine the rate of change' },
                { code: '8.5A', desc: 'Represent linear proportional situations' },
                { code: '8.5B', desc: 'Represent linear non-proportional situations' },
                { code: '8.5C', desc: 'Contrast proportional and non-proportional linear relationships' }
            ],
            '9': [
                { code: 'A.2A', desc: 'Determine the domain and range of a linear function' },
                { code: 'A.2B', desc: 'Write linear equations in two variables' },
                { code: 'A.2C', desc: 'Write linear equations from a table of values' },
                { code: 'A.3A', desc: 'Determine the slope of a line' },
                { code: 'A.3B', desc: 'Calculate rate of change of a linear function' },
                { code: 'A.3C', desc: 'Graph linear functions on the coordinate plane' },
                { code: 'A.4A', desc: 'Calculate intercepts of a linear function' },
                { code: 'A.4B', desc: 'Write equations of lines given characteristics' },
                { code: 'A.4C', desc: 'Write a function that describes a relationship' },
                { code: 'A.5A', desc: 'Solve linear equations in one variable' }
            ],
            '10': [
                { code: 'G.2A', desc: 'Determine coordinates of a point' },
                { code: 'G.2B', desc: 'Derive and use the distance formula' },
                { code: 'G.2C', desc: 'Determine an equation for a line' },
                { code: 'G.3A', desc: 'Describe and perform transformations' },
                { code: 'G.3B', desc: 'Determine the image or pre-image' },
                { code: 'G.3C', desc: 'Identify the sequence of transformations' },
                { code: 'G.4A', desc: 'Distinguish between undefined terms' },
                { code: 'G.5A', desc: 'Investigate patterns to make conjectures' },
                { code: 'G.5B', desc: 'Construct congruent segments, angles, and bisectors' },
                { code: 'G.6A', desc: 'Verify theorems about angles' }
            ],
            '11': [
                { code: 'A2.2A', desc: 'Graph functions of the form f(x) = root, 1/x, x^3' },
                { code: 'A2.4A', desc: 'Write the quadratic function' },
                { code: 'A2.4B', desc: 'Write the equation of a parabola' },
                { code: 'A2.4C', desc: 'Determine the effect of parameter changes' },
                { code: 'A2.4D', desc: 'Transform a quadratic function' },
                { code: 'A2.4E', desc: 'Formulate quadratic equations' },
                { code: 'A2.4F', desc: 'Solve quadratic equations' },
                { code: 'A2.5A', desc: 'Determine the effects of parameter changes' },
                { code: 'A2.5B', desc: 'Formulate an equation of polynomial functions' },
                { code: 'A2.6A', desc: 'Determine the domain and range' }
            ],
            '12': [
                { code: 'P.2A', desc: 'Use the composition of functions' },
                { code: 'P.2B', desc: 'Describe symmetry of functions' },
                { code: 'P.2C', desc: 'Describe and analyze continuity of a function' },
                { code: 'P.2D', desc: 'Demonstrate understanding of limits' },
                { code: 'P.2E', desc: 'Determine asymptotic behavior of a function' },
                { code: 'P.3A', desc: 'Investigate properties of sequences' },
                { code: 'P.3B', desc: 'Represent arithmetic and geometric sequences' },
                { code: 'P.3C', desc: 'Calculate sums of finite series' },
                { code: 'P.3D', desc: 'Apply sequences and series to problems' },
                { code: 'P.4A', desc: 'Use trigonometric identities' }
            ]
        },
        ela: {
            'K': [
                { code: 'K.1A', desc: 'Listen actively and ask questions to understand' },
                { code: 'K.1B', desc: 'Restate and follow oral directions' },
                { code: 'K.1C', desc: 'Share information and ideas' },
                { code: 'K.2A', desc: 'Demonstrate phonological awareness' },
                { code: 'K.2B', desc: 'Identify and match sounds to letters' },
                { code: 'K.2C', desc: 'Demonstrate phonetic knowledge by producing sounds' },
                { code: 'K.3A', desc: 'Use print concepts' },
                { code: 'K.3B', desc: 'Identify upper- and lower-case letters' },
                { code: 'K.4A', desc: 'Develop vocabulary through read-alouds' },
                { code: 'K.5A', desc: 'Establish comprehension through listening' }
            ],
            '1': [
                { code: '1.1A', desc: 'Listen actively and ask questions' },
                { code: '1.1B', desc: 'Follow and restate oral directions' },
                { code: '1.1C', desc: 'Share information using appropriate vocabulary' },
                { code: '1.2A', desc: 'Demonstrate phonological awareness' },
                { code: '1.2B', desc: 'Demonstrate and apply phonetic knowledge' },
                { code: '1.2C', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '1.3A', desc: 'Use print concepts including letter formation' },
                { code: '1.4A', desc: 'Use letter-sound correspondences to decode' },
                { code: '1.5A', desc: 'Develop vocabulary through read-alouds' },
                { code: '1.6A', desc: 'Establish comprehension through reading' }
            ],
            '2': [
                { code: '2.1A', desc: 'Listen actively and ask questions' },
                { code: '2.1B', desc: 'Follow and restate oral directions' },
                { code: '2.2A', desc: 'Demonstrate phonetic knowledge by applying spelling' },
                { code: '2.2B', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '2.3A', desc: 'Use print concepts for reading and writing' },
                { code: '2.4A', desc: 'Use decoding skills to read words' },
                { code: '2.5A', desc: 'Develop vocabulary through reading' },
                { code: '2.6A', desc: 'Establish comprehension by monitoring' },
                { code: '2.6B', desc: 'Generate questions about text' },
                { code: '2.6C', desc: 'Make and confirm predictions' }
            ],
            '3': [
                { code: '3.1A', desc: 'Listen actively and ask questions' },
                { code: '3.1B', desc: 'Follow and restate oral directions' },
                { code: '3.2A', desc: 'Demonstrate and apply phonetic knowledge' },
                { code: '3.2B', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '3.3A', desc: 'Use print concepts for reading and writing' },
                { code: '3.4A', desc: 'Use decoding skills' },
                { code: '3.5A', desc: 'Develop vocabulary through reading' },
                { code: '3.6A', desc: 'Establish comprehension by monitoring' },
                { code: '3.6B', desc: 'Generate questions about text' },
                { code: '3.6C', desc: 'Make and correct predictions' }
            ],
            '4': [
                { code: '4.1A', desc: 'Listen actively and ask questions' },
                { code: '4.1B', desc: 'Follow and restate oral directions' },
                { code: '4.2A', desc: 'Demonstrate and apply phonetic knowledge' },
                { code: '4.2B', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '4.3A', desc: 'Use print concepts for fluent reading' },
                { code: '4.4A', desc: 'Develop vocabulary through reading' },
                { code: '4.5A', desc: 'Establish comprehension by monitoring' },
                { code: '4.5B', desc: 'Generate questions about text' },
                { code: '4.5C', desc: 'Make and correct predictions' },
                { code: '4.6A', desc: 'Describe personal connections to sources' }
            ],
            '5': [
                { code: '5.1A', desc: 'Listen actively and ask questions' },
                { code: '5.1B', desc: 'Follow and restate oral directions' },
                { code: '5.2A', desc: 'Demonstrate and apply phonetic knowledge' },
                { code: '5.2B', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '5.3A', desc: 'Use print concepts for fluent reading' },
                { code: '5.4A', desc: 'Develop vocabulary through reading' },
                { code: '5.5A', desc: 'Establish comprehension by monitoring' },
                { code: '5.5B', desc: 'Generate questions about text' },
                { code: '5.5C', desc: 'Make and correct predictions' },
                { code: '5.6A', desc: 'Describe personal connections to sources' }
            ],
            '6': [
                { code: '6.1A', desc: 'Listen actively and ask questions' },
                { code: '6.1B', desc: 'Follow and give oral instructions' },
                { code: '6.2A', desc: 'Demonstrate and apply phonetic knowledge' },
                { code: '6.2B', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '6.3A', desc: 'Develop vocabulary through reading' },
                { code: '6.4A', desc: 'Establish comprehension by monitoring' },
                { code: '6.4B', desc: 'Generate questions about text' },
                { code: '6.4C', desc: 'Make and correct predictions' },
                { code: '6.5A', desc: 'Describe personal connections to sources' },
                { code: '6.6A', desc: 'Describe plot elements' }
            ],
            '7': [
                { code: '7.1A', desc: 'Listen actively and ask questions' },
                { code: '7.1B', desc: 'Follow and give oral instructions' },
                { code: '7.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '7.3A', desc: 'Develop vocabulary through reading' },
                { code: '7.4A', desc: 'Establish comprehension by monitoring' },
                { code: '7.4B', desc: 'Generate questions about text' },
                { code: '7.4C', desc: 'Make and correct predictions' },
                { code: '7.5A', desc: 'Describe personal connections to sources' },
                { code: '7.6A', desc: 'Describe plot elements' },
                { code: '7.6B', desc: 'Analyze character development' }
            ],
            '8': [
                { code: '8.1A', desc: 'Listen actively and ask questions' },
                { code: '8.1B', desc: 'Follow and give oral instructions' },
                { code: '8.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: '8.3A', desc: 'Develop vocabulary through reading' },
                { code: '8.4A', desc: 'Establish comprehension by monitoring' },
                { code: '8.4B', desc: 'Generate questions about text' },
                { code: '8.4C', desc: 'Make and correct predictions' },
                { code: '8.5A', desc: 'Describe personal connections to sources' },
                { code: '8.6A', desc: 'Describe plot elements' },
                { code: '8.6B', desc: 'Analyze character development' }
            ],
            '9': [
                { code: 'E1.1A', desc: 'Engage in meaningful discourse' },
                { code: 'E1.1B', desc: 'Follow and give complex oral instructions' },
                { code: 'E1.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: 'E1.3A', desc: 'Develop vocabulary through reading' },
                { code: 'E1.4A', desc: 'Establish comprehension by monitoring' },
                { code: 'E1.4B', desc: 'Generate questions about text' },
                { code: 'E1.4C', desc: 'Make and correct predictions' },
                { code: 'E1.5A', desc: 'Describe personal connections to sources' },
                { code: 'E1.6A', desc: 'Analyze how themes develop' },
                { code: 'E1.6B', desc: 'Analyze characters and conflicts' }
            ],
            '10': [
                { code: 'E2.1A', desc: 'Engage in meaningful discourse' },
                { code: 'E2.1B', desc: 'Follow and give complex oral instructions' },
                { code: 'E2.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: 'E2.3A', desc: 'Develop vocabulary through reading' },
                { code: 'E2.4A', desc: 'Establish comprehension by monitoring' },
                { code: 'E2.4B', desc: 'Generate questions about text' },
                { code: 'E2.5A', desc: 'Describe personal connections to sources' },
                { code: 'E2.6A', desc: 'Analyze how themes develop' },
                { code: 'E2.6B', desc: 'Analyze characters and conflicts' },
                { code: 'E2.6C', desc: 'Analyze non-linear plot development' }
            ],
            '11': [
                { code: 'E3.1A', desc: 'Engage in meaningful discourse' },
                { code: 'E3.1B', desc: 'Follow and give complex oral instructions' },
                { code: 'E3.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: 'E3.3A', desc: 'Develop vocabulary through reading' },
                { code: 'E3.4A', desc: 'Establish comprehension by monitoring' },
                { code: 'E3.5A', desc: 'Describe personal connections to sources' },
                { code: 'E3.6A', desc: 'Analyze relationships among thematic development' },
                { code: 'E3.6B', desc: 'Analyze how authors develop characters' },
                { code: 'E3.6C', desc: 'Analyze isolated scenes and their contribution' },
                { code: 'E3.6D', desc: 'Analyze author use of language' }
            ],
            '12': [
                { code: 'E4.1A', desc: 'Engage in meaningful discourse' },
                { code: 'E4.1B', desc: 'Follow and give complex oral instructions' },
                { code: 'E4.2A', desc: 'Demonstrate and apply spelling knowledge' },
                { code: 'E4.3A', desc: 'Develop vocabulary through reading' },
                { code: 'E4.4A', desc: 'Establish comprehension by monitoring' },
                { code: 'E4.5A', desc: 'Describe personal connections to sources' },
                { code: 'E4.6A', desc: 'Analyze relationships among thematic development' },
                { code: 'E4.6B', desc: 'Analyze how authors develop characters' },
                { code: 'E4.6C', desc: 'Analyze isolated scenes and their contribution' },
                { code: 'E4.6D', desc: 'Analyze author use of language' }
            ]
        }
    }
};

// States that use Common Core standards
const COMMON_CORE_STATES = [
    'AL', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'GA', 'HI', 'ID', 'IL', 'IA',
    'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NV',
    'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OR', 'PA', 'RI', 'SD', 'TN',
    'UT', 'VT', 'WA', 'WV', 'WI', 'WY'
];

// All US States
const US_STATES = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'DC', name: 'District of Columbia' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' }
];

// Grade levels
const GRADE_LEVELS = [
    { value: 'K', label: 'Kindergarten' },
    { value: '1', label: '1st Grade' },
    { value: '2', label: '2nd Grade' },
    { value: '3', label: '3rd Grade' },
    { value: '4', label: '4th Grade' },
    { value: '5', label: '5th Grade' },
    { value: '6', label: '6th Grade' },
    { value: '7', label: '7th Grade' },
    { value: '8', label: '8th Grade' },
    { value: '9', label: '9th Grade' },
    { value: '10', label: '10th Grade' },
    { value: '11', label: '11th Grade' },
    { value: '12', label: '12th Grade' }
];

/**
 * Get standards for a specific state, subject, and grade
 * @param {string} stateCode - Two-letter state code
 * @param {string} subject - 'math' or 'ela'
 * @param {string} grade - Grade level (K, 1-12)
 * @returns {Array} Array of standards objects with code and desc
 */
function getStandards(stateCode, subject, grade) {
    // Check if state has specific standards
    if (STANDARDS_DATA[stateCode] &&
        STANDARDS_DATA[stateCode][subject] &&
        STANDARDS_DATA[stateCode][subject][grade]) {
        return STANDARDS_DATA[stateCode][subject][grade];
    }

    // Fall back to Common Core for states that use it
    if (COMMON_CORE_STATES.includes(stateCode) || !STANDARDS_DATA[stateCode]) {
        if (STANDARDS_DATA.commonCore[subject] &&
            STANDARDS_DATA.commonCore[subject][grade]) {
            return STANDARDS_DATA.commonCore[subject][grade];
        }
    }

    // Return empty array if no standards found
    return [];
}

/**
 * Get the standards framework name for a state
 * @param {string} stateCode - Two-letter state code
 * @returns {string} Name of the standards framework
 */
function getStandardsFramework(stateCode) {
    if (stateCode === 'TX') return 'TEKS';
    if (COMMON_CORE_STATES.includes(stateCode)) return 'Common Core';
    return 'State Standards';
}
