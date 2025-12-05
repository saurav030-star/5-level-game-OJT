const initialQuestions = [
  {
    "id": 1,
    "question": "If all roses are flowers and some flowers fade quickly, can we conclude some roses fade quickly?",
    "options": [
      "Yes, always",
      "No, never",
      "Only if explicitly stated",
      "Only sometimes"
    ],
    "answerLetter": "C",
    "answer": "Only if explicitly stated"
  },
  {
    "id": 2,
    "question": "Which number comes next in the sequence: 2, 4, 6, 8, ?",
    "options": [
      "9",
      "10",
      "12",
      "14"
    ],
    "answerLetter": "B",
    "answer": "10"
  },
  {
    "id": 3,
    "question": "If John is taller than Mary and Mary is taller than Sam, who is the shortest?",
    "options": [
      "John",
      "Mary",
      "Sam",
      "Cannot determine"
    ],
    "answerLetter": "C",
    "answer": "Sam"
  },
  {
    "id": 4,
    "question": "Spot the odd one out: apple, banana, carrot, grape.",
    "options": [
      "Apple",
      "Banana",
      "Carrot",
      "Grape"
    ],
    "answerLetter": "C",
    "answer": "Carrot"
  },
  {
    "id": 5,
    "question": "If a train leaves at 2:00 PM and travels 60 km/h for 2 hours, how far does it go?",
    "options": [
      "60 km",
      "120 km",
      "90 km",
      "100 km"
    ],
    "answerLetter": "B",
    "answer": "120 km"
  },
  {
    "id": 6,
    "question": "Which shape does not belong: circle, square, triangle, cube?",
    "options": [
      "Circle",
      "Square",
      "Triangle",
      "Cube"
    ],
    "answerLetter": "D",
    "answer": "Cube"
  },
  {
    "id": 7,
    "question": "If A > B and B > C, which is true: A > C, A = C, or A < C?",
    "options": [
      "A > C",
      "A = C",
      "A < C",
      "Cannot determine"
    ],
    "answerLetter": "A",
    "answer": "A > C"
  },
  {
    "id": 8,
    "question": "Find the missing number: 5, 10, 15, __, 25.",
    "options": [
      "18",
      "20",
      "22",
      "24"
    ],
    "answerLetter": "B",
    "answer": "20"
  },
  {
    "id": 9,
    "question": "If all cats purr and Whiskers is a cat, does Whiskers purr?",
    "options": [
      "Yes",
      "No",
      "Only sometimes",
      "Cannot determine"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 10,
    "question": "Which word is the opposite of \"ascend\"?",
    "options": [
      "Rise",
      "Climb",
      "Descend",
      "Jump"
    ],
    "answerLetter": "C",
    "answer": "Descend"
  },
  {
    "id": 11,
    "question": "Complete the pattern: \u25b2 \u25bc \u25b2 \u25bc \u25b2 __",
    "options": [
      "\u25b2",
      "\u25bc",
      "\u25ef",
      "\u25a0"
    ],
    "answerLetter": "B",
    "answer": "\u25bc"
  },
  {
    "id": 12,
    "question": "If today is Monday, what day is two days after Thursday?",
    "options": [
      "Friday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "answerLetter": "B",
    "answer": "Saturday"
  },
  {
    "id": 13,
    "question": "Which is heavier: a kilogram of steel or a kilogram of feathers?",
    "options": [
      "Steel",
      "Feathers",
      "Equal",
      "Cannot determine"
    ],
    "answerLetter": "C",
    "answer": "Equal"
  },
  {
    "id": 14,
    "question": "If 3 pens cost $9, how much does 1 pen cost?",
    "options": [
      "$2",
      "$3",
      "$4",
      "$6"
    ],
    "answerLetter": "B",
    "answer": "$3"
  },
  {
    "id": 15,
    "question": "Rearrange the letters \"ELPPA\" to make a word.",
    "options": [
      "APPLE",
      "PEOPLE",
      "PALE",
      "LEAP"
    ],
    "answerLetter": "A",
    "answer": "APPLE"
  },
  {
    "id": 16,
    "question": "If it rains, the ground gets wet. The ground is wet. Can we be certain it rained?",
    "options": [
      "Yes",
      "No",
      "Only if no other sources of water",
      "Only if forecast predicted rain"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 17,
    "question": "Which comes next: J, F, M, A, M, __ ?",
    "options": [
      "J",
      "S",
      "JF",
      "L"
    ],
    "answerLetter": "A",
    "answer": "J"
  },
  {
    "id": 18,
    "question": "If six people sit in a row, how many people are at the ends?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answerLetter": "B",
    "answer": "2"
  },
  {
    "id": 19,
    "question": "When you mix red and blue, what color do you get?",
    "options": [
      "Green",
      "Purple",
      "Orange",
      "Brown"
    ],
    "answerLetter": "B",
    "answer": "Purple"
  },
  {
    "id": 20,
    "question": "Find the odd number: 2, 3, 5, 8, 11.",
    "options": [
      "2",
      "3",
      "8",
      "11"
    ],
    "answerLetter": "C",
    "answer": "8"
  },
  {
    "id": 21,
    "question": "Which of these is a prime number: 4, 6, 7, 9?",
    "options": [
      "4",
      "6",
      "7",
      "9"
    ],
    "answerLetter": "C",
    "answer": "7"
  },
  {
    "id": 22,
    "question": "If a store sells 5 apples for $10, how many apples can you buy with $40?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answerLetter": "C",
    "answer": "20"
  },
  {
    "id": 23,
    "question": "Which completes the analogy: Bird is to Fly as Fish is to __.",
    "options": [
      "Walk",
      "Swim",
      "Fly",
      "Run"
    ],
    "answerLetter": "B",
    "answer": "Swim"
  },
  {
    "id": 24,
    "question": "If today is the 10th, what will be the date after 3 days?",
    "options": [
      "12th",
      "13th",
      "14th",
      "15th"
    ],
    "answerLetter": "B",
    "answer": "13th"
  },
  {
    "id": 25,
    "question": "Solve the riddle: I have keys but no locks. What am I?",
    "options": [
      "Car",
      "Keyboard",
      "House",
      "Map"
    ],
    "answerLetter": "B",
    "answer": "Keyboard"
  },
  {
    "id": 26,
    "question": "If there are 4 red and 6 blue balls, what fraction are red?",
    "options": [
      "1/2",
      "2/5",
      "4/10",
      "4/6"
    ],
    "answerLetter": "B",
    "answer": "2/5"
  },
  {
    "id": 27,
    "question": "What is the next in series: A, C, E, G, __?",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "answerLetter": "B",
    "answer": "I"
  },
  {
    "id": 28,
    "question": "If two angles of a triangle are 40\u00b0 and 60\u00b0, what is the third?",
    "options": [
      "60\u00b0",
      "80\u00b0",
      "90\u00b0",
      "100\u00b0"
    ],
    "answerLetter": "A",
    "answer": "60\u00b0"
  },
  {
    "id": 29,
    "question": "Which word does not belong: table, chair, lamp, cucumber?",
    "options": [
      "Table",
      "Chair",
      "Lamp",
      "Cucumber"
    ],
    "answerLetter": "D",
    "answer": "Cucumber"
  },
  {
    "id": 30,
    "question": "If a isn't equal to b and b equals c, is a equal to c?",
    "options": [
      "Yes",
      "No",
      "Sometimes",
      "Cannot determine"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 31,
    "question": "Which number is both even and a multiple of 3?",
    "options": [
      "6",
      "9",
      "7",
      "5"
    ],
    "answerLetter": "A",
    "answer": "6"
  },
  {
    "id": 32,
    "question": "If you divide 100 by 4, what do you get?",
    "options": [
      "20",
      "25",
      "30",
      "40"
    ],
    "answerLetter": "B",
    "answer": "25"
  },
  {
    "id": 33,
    "question": "Choose the correct mirror image of the letter 'L'.",
    "options": [
      "\u2142",
      "L",
      "\u0393",
      "\u2510"
    ],
    "answerLetter": "A",
    "answer": "\u2142"
  },
  {
    "id": 34,
    "question": "If the code CAT = 312, DOG = 415, what is the code for GOD?",
    "options": [
      "415",
      "514",
      "451",
      "145"
    ],
    "answerLetter": "C",
    "answer": "451"
  },
  {
    "id": 35,
    "question": "How many sides does a hexagon have?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerLetter": "B",
    "answer": "6"
  },
  {
    "id": 36,
    "question": "Which two letters complete the sequence: M, T, W, T, F, __, __ ?",
    "options": [
      "S, S",
      "S, M",
      "F, S",
      "M, T"
    ],
    "answerLetter": "A",
    "answer": "S, S"
  },
  {
    "id": 37,
    "question": "If every A is B and every B is C, is every C an A?",
    "options": [
      "Yes",
      "No",
      "Only if sets are equal",
      "Cannot determine"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 38,
    "question": "What follows in series: 1, 1, 2, 3, 5, __?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answerLetter": "C",
    "answer": "8"
  },
  {
    "id": 39,
    "question": "If a box contains only apples, are all fruits in the box apples?",
    "options": [
      "Yes",
      "No",
      "Only sometimes",
      "Cannot determine"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 40,
    "question": "Which of the following is a verb: quickly, jump, blue, very?",
    "options": [
      "Quickly",
      "Jump",
      "Blue",
      "Very"
    ],
    "answerLetter": "B",
    "answer": "Jump"
  },
  {
    "id": 41,
    "question": "What does noon come before: morning, afternoon, or evening?",
    "options": [
      "Morning",
      "Afternoon",
      "Evening",
      "Night"
    ],
    "answerLetter": "B",
    "answer": "Afternoon"
  },
  {
    "id": 42,
    "question": "If a = 2 and b = 3 in the expression a + b, what\u2019s the value?",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "answerLetter": "B",
    "answer": "5"
  },
  {
    "id": 43,
    "question": "Find the next number: 10, 20, 40, 80, __",
    "options": [
      "100",
      "160",
      "120",
      "200"
    ],
    "answerLetter": "B",
    "answer": "160"
  },
  {
    "id": 44,
    "question": "Which is largest: 0.5, 0.75, 0.25, 0.9?",
    "options": [
      "0.5",
      "0.75",
      "0.25",
      "0.9"
    ],
    "answerLetter": "D",
    "answer": "0.9"
  },
  {
    "id": 45,
    "question": "If you remove one letter from \"stone\" to make a fruit, which is it?",
    "options": [
      "S",
      "T",
      "O",
      "E"
    ],
    "answerLetter": "C",
    "answer": "O"
  },
  {
    "id": 46,
    "question": "What is the logical opposite of 'always'?",
    "options": [
      "Never",
      "Sometimes",
      "Often",
      "Rarely"
    ],
    "answerLetter": "A",
    "answer": "Never"
  },
  {
    "id": 47,
    "question": "If a basket holds 8 eggs and 3 break, how many remain unbroken?",
    "options": [
      "3",
      "5",
      "8",
      "11"
    ],
    "answerLetter": "B",
    "answer": "5"
  },
  {
    "id": 48,
    "question": "Spot the pattern: red, blue, red, blue, red, __",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "answerLetter": "B",
    "answer": "Blue"
  },
  {
    "id": 49,
    "question": "If a map scale says 1 cm = 10 km, how many km is 3 cm?",
    "options": [
      "10 km",
      "20 km",
      "30 km",
      "40 km"
    ],
    "answerLetter": "C",
    "answer": "30 km"
  },
  {
    "id": 50,
    "question": "If two statements are both true, the combined statement is __.",
    "options": [
      "True",
      "False",
      "Undetermined",
      "Contradiction"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 51,
    "question": "If 7 + x = 12, what is x?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerLetter": "C",
    "answer": "5"
  },
  {
    "id": 52,
    "question": "Which animal is known to be a marsupial: kangaroo, horse, elephant?",
    "options": [
      "Kangaroo",
      "Horse",
      "Elephant",
      "All"
    ],
    "answerLetter": "A",
    "answer": "Kangaroo"
  },
  {
    "id": 53,
    "question": "If every student passed the test, did any student fail?",
    "options": [
      "Yes",
      "No",
      "Only some",
      "Cannot determine"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 54,
    "question": "What is the synonym of 'quick'?",
    "options": [
      "Slow",
      "Rapid",
      "Late",
      "Weak"
    ],
    "answerLetter": "B",
    "answer": "Rapid"
  },
  {
    "id": 55,
    "question": "Which number is missing: 3, 6, 9, __, 15?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answerLetter": "C",
    "answer": "12"
  },
  {
    "id": 56,
    "question": "Which shape has all sides equal and all angles 90\u00b0?",
    "options": [
      "Square",
      "Rectangle",
      "Rhombus",
      "Parallelogram"
    ],
    "answerLetter": "A",
    "answer": "Square"
  },
  {
    "id": 57,
    "question": "If you have five 1-dollar bills, how many dollars do you have?",
    "options": [
      "1",
      "5",
      "10",
      "0"
    ],
    "answerLetter": "B",
    "answer": "5"
  },
  {
    "id": 58,
    "question": "Complete the analogy: Pen is to Write as Knife is to __.",
    "options": [
      "Cut",
      "Eat",
      "Cook",
      "Draw"
    ],
    "answerLetter": "A",
    "answer": "Cut"
  },
  {
    "id": 59,
    "question": "If a glass is half full, would an optimist say half full or half empty?",
    "options": [
      "Half empty",
      "Half full",
      "Neither",
      "Both"
    ],
    "answerLetter": "B",
    "answer": "Half full"
  },
  {
    "id": 60,
    "question": "If 12 eggs are packed in 3 trays equally, how many eggs per tray?",
    "options": [
      "3",
      "4",
      "6",
      "12"
    ],
    "answerLetter": "B",
    "answer": "4"
  },
  {
    "id": 61,
    "question": "If all A are B, some B are C, can we conclude some A are C?",
    "options": [
      "Yes",
      "No",
      "Only if overlap exists",
      "Always false"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 62,
    "question": "Find the missing number: 4, 9, 16, 25, __",
    "options": [
      "30",
      "36",
      "49",
      "35"
    ],
    "answerLetter": "B",
    "answer": "36"
  },
  {
    "id": 63,
    "question": "If Q is before R and R before S, what is the order from left to right?",
    "options": [
      "S R Q",
      "Q R S",
      "R Q S",
      "Q S R"
    ],
    "answerLetter": "B",
    "answer": "Q R S"
  },
  {
    "id": 64,
    "question": "A says: \"I always lie.\" Is A's statement logically consistent?",
    "options": [
      "Yes",
      "No",
      "Sometimes",
      "Only if others lie"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 65,
    "question": "Choose the next: 3, 7, 15, 31, __",
    "options": [
      "47",
      "63",
      "64",
      "32"
    ],
    "answerLetter": "A",
    "answer": "47"
  },
  {
    "id": 66,
    "question": "If two trains approach each other at 80 km/h and 120 km/h, closing speed is __ km/h.",
    "options": [
      "40",
      "80",
      "200",
      "120"
    ],
    "answerLetter": "C",
    "answer": "200"
  },
  {
    "id": 67,
    "question": "Which of these completes the series: 2, 6, 12, 20, 30, __",
    "options": [
      "36",
      "42",
      "56",
      "72"
    ],
    "answerLetter": "A",
    "answer": "36"
  },
  {
    "id": 68,
    "question": "If a square and a rectangle have same area but different side ratios, do they have same shape?",
    "options": [
      "Yes",
      "No",
      "Only if sides equal",
      "Only sometimes"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 69,
    "question": "What comes next: Z, X, V, T, __",
    "options": [
      "R",
      "S",
      "P",
      "Q"
    ],
    "answerLetter": "A",
    "answer": "R"
  },
  {
    "id": 70,
    "question": "If a jar has red, green, and blue marbles of equal count, probability of picking red is __.",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "1/6"
    ],
    "answerLetter": "B",
    "answer": "1/3"
  },
  {
    "id": 71,
    "question": "If P \u21d2 Q and Q \u21d2 R, what can be inferred about P and R?",
    "options": [
      "P \u21d2 R",
      "R \u21d2 P",
      "P \u21d4 R",
      "No relation"
    ],
    "answerLetter": "A",
    "answer": "P \u21d2 R"
  },
  {
    "id": 72,
    "question": "If 5 workers build a wall in 10 days, how many days for 10 workers (same rate)?",
    "options": [
      "20 days",
      "5 days",
      "2 days",
      "10 days"
    ],
    "answerLetter": "B",
    "answer": "5 days"
  },
  {
    "id": 73,
    "question": "Complete the analogy: King is to Queen as Prince is to __.",
    "options": [
      "Princess",
      "Duke",
      "Earl",
      "Knight"
    ],
    "answerLetter": "A",
    "answer": "Princess"
  },
  {
    "id": 74,
    "question": "Which is a valid syllogism: All M are N; Some N are O; therefore some M are O? True/False.",
    "options": [
      "True",
      "False",
      "Sometimes",
      "Always"
    ],
    "answerLetter": "B",
    "answer": "False"
  },
  {
    "id": 75,
    "question": "If a clock shows 3:15, what angle between hour and minute hands?",
    "options": [
      "0\u00b0",
      "7.5\u00b0",
      "52.5\u00b0",
      "90\u00b0"
    ],
    "answerLetter": "C",
    "answer": "52.5\u00b0"
  },
  {
    "id": 76,
    "question": "Which number replaces the question mark: 7, 14, 28, 56, ?",
    "options": [
      "70",
      "112",
      "84",
      "64"
    ],
    "answerLetter": "B",
    "answer": "112"
  },
  {
    "id": 77,
    "question": "If two statements contradict each other, can both be true?",
    "options": [
      "Yes",
      "No",
      "Only in modal logic",
      "Only sometimes"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 78,
    "question": "Rearrange letters \"LISTEN\" to form another meaningful word.",
    "options": [
      "SILENT",
      "LISTNE",
      "INSTEL",
      "TELLIN"
    ],
    "answerLetter": "A",
    "answer": "SILENT"
  },
  {
    "id": 79,
    "question": "Given the code: 1=A, 2=B..., what word is 3-1-20?",
    "options": [
      "CAT",
      "DOG",
      "BAT",
      "RAT"
    ],
    "answerLetter": "A",
    "answer": "CAT"
  },
  {
    "id": 80,
    "question": "If the sum of two consecutive integers is 27, what are the integers?",
    "options": [
      "13 and 14",
      "12 and 15",
      "14 and 13",
      "10 and 17"
    ],
    "answerLetter": "A",
    "answer": "13 and 14"
  },
  {
    "id": 81,
    "question": "Find the next: 0, 1, 1, 2, 3, 5, 8, __",
    "options": [
      "10",
      "11",
      "13",
      "15"
    ],
    "answerLetter": "C",
    "answer": "13"
  },
  {
    "id": 82,
    "question": "If the opposite of 'cold' is 'hot', what is the opposite of 'ascend'?",
    "options": [
      "Climb",
      "Descend",
      "Rise",
      "Soar"
    ],
    "answerLetter": "B",
    "answer": "Descend"
  },
  {
    "id": 83,
    "question": "Which completes the pattern: 9, 7, 5, 3, __",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "answerLetter": "A",
    "answer": "1"
  },
  {
    "id": 84,
    "question": "A box has 3 red, 4 blue, 5 green balls. What fraction are blue?",
    "options": [
      "4/12",
      "1/3",
      "1/4",
      "5/12"
    ],
    "answerLetter": "A",
    "answer": "4/12"
  },
  {
    "id": 85,
    "question": "If statement A is necessary for B, can B occur without A?",
    "options": [
      "Yes",
      "No",
      "Only sometimes",
      "Depends on context"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 86,
    "question": "Find the odd one: 14, 21, 28, 36, 42.",
    "options": [
      "14",
      "21",
      "28",
      "36"
    ],
    "answerLetter": "D",
    "answer": "36"
  },
  {
    "id": 87,
    "question": "If Monday is day 1, what weekday is day 365 in a non-leap year?",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "answerLetter": "C",
    "answer": "Wednesday"
  },
  {
    "id": 88,
    "question": "Which is heavier: 2 kg of feathers or 2000 g of stones?",
    "options": [
      "Feathers",
      "Stones",
      "Equal",
      "Cannot determine"
    ],
    "answerLetter": "C",
    "answer": "Equal"
  },
  {
    "id": 89,
    "question": "If three people share a bill equally of $90, how much each?",
    "options": [
      "$20",
      "$30",
      "$40",
      "$45"
    ],
    "answerLetter": "B",
    "answer": "$30"
  },
  {
    "id": 90,
    "question": "Solve the puzzle: I speak without a mouth and hear without ears. What am I?",
    "options": [
      "Echo",
      "Wind",
      "Radio",
      "Shadow"
    ],
    "answerLetter": "A",
    "answer": "Echo"
  },
  {
    "id": 91,
    "question": "If the pattern multiplies by 3 then subtracts 1, next after 4 is __.",
    "options": [
      "11",
      "12",
      "13",
      "10"
    ],
    "answerLetter": "A",
    "answer": "11"
  },
  {
    "id": 92,
    "question": "Which completes the analogy: Nose is to Smell as Eye is to __.",
    "options": [
      "Taste",
      "Hear",
      "See",
      "Touch"
    ],
    "answerLetter": "C",
    "answer": "See"
  },
  {
    "id": 93,
    "question": "If angle A in a triangle is 90\u00b0, is the triangle right-angled, obtuse, or acute?",
    "options": [
      "Right-angled",
      "Obtuse",
      "Acute",
      "Equilateral"
    ],
    "answerLetter": "A",
    "answer": "Right-angled"
  },
  {
    "id": 94,
    "question": "If the average of five numbers is 10, their sum is __.",
    "options": [
      "10",
      "50",
      "100",
      "5"
    ],
    "answerLetter": "B",
    "answer": "50"
  },
  {
    "id": 95,
    "question": "Determine next: 1, 4, 9, 16, 25, __",
    "options": [
      "30",
      "36",
      "49",
      "35"
    ],
    "answerLetter": "B",
    "answer": "36"
  },
  {
    "id": 96,
    "question": "If statements are 'If A then B' and 'If not B then not A', what is this called?",
    "options": [
      "Contrapositive",
      "Converse",
      "Inverse",
      "Biconditional"
    ],
    "answerLetter": "A",
    "answer": "Contrapositive"
  },
  {
    "id": 97,
    "question": "Which word is a synonym of 'obvious'?",
    "options": [
      "Clear",
      "Hidden",
      "Complex",
      "Subtle"
    ],
    "answerLetter": "A",
    "answer": "Clear"
  },
  {
    "id": 98,
    "question": "If a deck has 52 cards, probability of drawing an Ace is __.",
    "options": [
      "1/13",
      "1/4",
      "1/52",
      "1/26"
    ],
    "answerLetter": "A",
    "answer": "1/13"
  },
  {
    "id": 99,
    "question": "If Sally is older than Tom and Tom is older than Anne, who is oldest?",
    "options": [
      "Sally",
      "Tom",
      "Anne",
      "Cannot determine"
    ],
    "answerLetter": "A",
    "answer": "Sally"
  },
  {
    "id": 100,
    "question": "A bus leaves at 8:00 and arrives at 10:30; travel time is __ hours and minutes.",
    "options": [
      "2 hours",
      "2 hours 30 minutes",
      "3 hours",
      "1 hour 30 minutes"
    ],
    "answerLetter": "B",
    "answer": "2 hours 30 minutes"
  },
  {
    "id": 101,
    "question": "If x + x + x = 30, what is x?",
    "options": [
      "10",
      "9",
      "15",
      "30"
    ],
    "answerLetter": "A",
    "answer": "10"
  },
  {
    "id": 102,
    "question": "Which number is both square and cube between 1 and 1000?",
    "options": [
      "64",
      "36",
      "216",
      "729"
    ],
    "answerLetter": "A",
    "answer": "64"
  },
  {
    "id": 103,
    "question": "If a statement is probable but not certain, what kind of reasoning is used: deductive or inductive?",
    "options": [
      "Deductive",
      "Inductive",
      "Both",
      "Neither"
    ],
    "answerLetter": "B",
    "answer": "Inductive"
  },
  {
    "id": 104,
    "question": "If the product of two numbers is 36 and one is 4, the other is __.",
    "options": [
      "9",
      "8",
      "7",
      "10"
    ],
    "answerLetter": "A",
    "answer": "9"
  },
  {
    "id": 105,
    "question": "What comes next: 2, 3, 5, 7, 11, __",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answerLetter": "B",
    "answer": "13"
  },
  {
    "id": 106,
    "question": "If all dogs bark and Rover doesn't, is Rover a dog?",
    "options": [
      "Yes",
      "No",
      "Maybe",
      "Cannot determine"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 107,
    "question": "Choose the missing letter: B, D, G, K, __",
    "options": [
      "O",
      "N",
      "P",
      "M"
    ],
    "answerLetter": "A",
    "answer": "O"
  },
  {
    "id": 108,
    "question": "If you flip a fair coin twice, probability of two heads is __.",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "1/6"
    ],
    "answerLetter": "C",
    "answer": "1/4"
  },
  {
    "id": 109,
    "question": "If a > 0 and b > 0 and a + b = 10, maximum product occurs when a = b = __.",
    "options": [
      "5",
      "4",
      "6",
      "10"
    ],
    "answerLetter": "A",
    "answer": "5"
  },
  {
    "id": 110,
    "question": "Spot the logic: If it snows, school closes. It didn't snow. Can we conclude school didn't close?",
    "options": [
      "Yes",
      "No",
      "Only if no other reasons",
      "Always"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 111,
    "question": "If 2x = 18, x equals __.",
    "options": [
      "9",
      "18",
      "8",
      "12"
    ],
    "answerLetter": "A",
    "answer": "9"
  },
  {
    "id": 112,
    "question": "Which completes series: 5, 10, 30, 120, __ (pattern)",
    "options": [
      "600",
      "360",
      "240",
      "720"
    ],
    "answerLetter": "A",
    "answer": "600"
  },
  {
    "id": 113,
    "question": "If a statement implies its negation, what logical problem arises?",
    "options": [
      "Consistency",
      "Contradiction",
      "Tautology",
      "Independence"
    ],
    "answerLetter": "B",
    "answer": "Contradiction"
  },
  {
    "id": 114,
    "question": "If there are four houses in a row and Sam lives next to the bakery which is at one end, which house could Sam be in?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answerLetter": "B",
    "answer": "Second"
  },
  {
    "id": 115,
    "question": "Given letters CODE, which rearrangement forms a real word?",
    "options": [
      "DECO",
      "ODEC",
      "CDOE",
      "EOCD"
    ],
    "answerLetter": "A",
    "answer": "DECO"
  },
  {
    "id": 116,
    "question": "If three coins show at least one tail, what\u2019s probability at least one head?",
    "options": [
      "3/4",
      "2/3",
      "7/8",
      "1/2"
    ],
    "answerLetter": "B",
    "answer": "2/3"
  },
  {
    "id": 117,
    "question": "Which of these is an implication: \"If P then Q\" or \"P and Q\"?",
    "options": [
      "If P then Q",
      "P and Q",
      "Both",
      "Neither"
    ],
    "answerLetter": "A",
    "answer": "If P then Q"
  },
  {
    "id": 118,
    "question": "A says B is lying. B says C is lying. C says A is lying. Can all three be telling truth?",
    "options": [
      "Yes",
      "No",
      "Only two",
      "Only one"
    ],
    "answerLetter": "B",
    "answer": "No"
  },
  {
    "id": 119,
    "question": "Find the missing number: 100, 90, 81, 73, __",
    "options": [
      "66",
      "65",
      "64",
      "67"
    ],
    "answerLetter": "A",
    "answer": "66"
  },
  {
    "id": 120,
    "question": "If the ratio of red to blue marbles is 2:3, in 25 marbles how many are red?",
    "options": [
      "10",
      "12",
      "8",
      "15"
    ],
    "answerLetter": "A",
    "answer": "10"
  },
  {
    "id": 121,
    "question": "If a function doubles input, output for 7 is __.",
    "options": [
      "7",
      "14",
      "21",
      "28"
    ],
    "answerLetter": "B",
    "answer": "14"
  },
  {
    "id": 122,
    "question": "Which completes the analogy: Hand is to Glove as Foot is to __.",
    "options": [
      "Sock",
      "Shoe",
      "Hat",
      "Glove"
    ],
    "answerLetter": "B",
    "answer": "Shoe"
  },
  {
    "id": 123,
    "question": "If a coin is biased so P(head)=0.6, probability of tail is __.",
    "options": [
      "0.6",
      "0.4",
      "0.5",
      "0.3"
    ],
    "answerLetter": "B",
    "answer": "0.4"
  },
  {
    "id": 124,
    "question": "If the sum of angles in a quadrilateral is 360\u00b0, each angle of a square is __.",
    "options": [
      "60\u00b0",
      "90\u00b0",
      "80\u00b0",
      "100\u00b0"
    ],
    "answerLetter": "B",
    "answer": "90\u00b0"
  },
  {
    "id": 125,
    "question": "Which of the following is a contradiction: \"All swans are white\" and \"There exists a black swan\"? (explain)",
    "options": [
      "Yes",
      "No",
      "Only if in same domain",
      "Depends on definitions"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 126,
    "question": "If three numbers are in arithmetic progression and sum to 27, middle number is __.",
    "options": [
      "9",
      "8",
      "10",
      "7"
    ],
    "answerLetter": "A",
    "answer": "9"
  },
  {
    "id": 127,
    "question": "Spot the pattern: 1, 2, 6, 24, 120, __",
    "options": [
      "600",
      "720",
      "840",
      "144"
    ],
    "answerLetter": "B",
    "answer": "720"
  },
  {
    "id": 128,
    "question": "If the truth table of implication is known, what is value of (True \u21d2 False)?",
    "options": [
      "True",
      "False",
      "Undefined",
      "Both"
    ],
    "answerLetter": "B",
    "answer": "False"
  },
  {
    "id": 129,
    "question": "Which completes series: 1A, 2B, 3C, 4D, __",
    "options": [
      "5E",
      "5D",
      "6F",
      "4E"
    ],
    "answerLetter": "A",
    "answer": "5E"
  },
  {
    "id": 130,
    "question": "If x^2 = 49 and x is positive, x = __.",
    "options": [
      "-7",
      "7",
      "0",
      "49"
    ],
    "answerLetter": "B",
    "answer": "7"
  },
  {
    "id": 131,
    "question": "Which two words are antonyms: ascend/descend, small/tiny?",
    "options": [
      "Ascend/Descend",
      "Small/Tiny",
      "Both",
      "Neither"
    ],
    "answerLetter": "A",
    "answer": "Ascend/Descend"
  },
  {
    "id": 132,
    "question": "If a statement is tautology, is it always true or sometimes true?",
    "options": [
      "Always true",
      "Sometimes true",
      "Never true",
      "Only under conditions"
    ],
    "answerLetter": "A",
    "answer": "Always true"
  },
  {
    "id": 133,
    "question": "If two angles are supplementary and one is 110\u00b0, the other is __.",
    "options": [
      "80\u00b0",
      "70\u00b0",
      "60\u00b0",
      "100\u00b0"
    ],
    "answerLetter": "B",
    "answer": "70\u00b0"
  },
  {
    "id": 134,
    "question": "Choose the odd word: peace, quiet, noise, silence.",
    "options": [
      "Peace",
      "Quiet",
      "Noise",
      "Silence"
    ],
    "answerLetter": "C",
    "answer": "Noise"
  },
  {
    "id": 135,
    "question": "If probability of rain is 0.2, chance it doesn't rain is __.",
    "options": [
      "0.2",
      "0.8",
      "0.5",
      "0.9"
    ],
    "answerLetter": "B",
    "answer": "0.8"
  },
  {
    "id": 136,
    "question": "If velocity = distance/time, what is time when distance is 100 km and velocity 50 km/h?",
    "options": [
      "1 hour",
      "2 hours",
      "0.5 hour",
      "3 hours"
    ],
    "answerLetter": "B",
    "answer": "2 hours"
  },
  {
    "id": 137,
    "question": "Which completes the series: 16, 8, 4, 2, __",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "answerLetter": "A",
    "answer": "1"
  },
  {
    "id": 138,
    "question": "If the population doubles every year, after 3 years it is multiplied by __.",
    "options": [
      "3",
      "6",
      "8",
      "9"
    ],
    "answerLetter": "C",
    "answer": "8"
  },
  {
    "id": 139,
    "question": "If every member of a club is over 18 and Alice is in the club, what can be said about Alice's age?",
    "options": [
      "Under 18",
      "Over 18",
      "Exactly 18",
      "Cannot determine"
    ],
    "answerLetter": "B",
    "answer": "Over 18"
  },
  {
    "id": 140,
    "question": "If x+y=10 and x\u2212y=2, what are x and y?",
    "options": [
      "x=6, y=4",
      "x=4, y=6",
      "x=5, y=5",
      "x=7, y=3"
    ],
    "answerLetter": "A",
    "answer": "x=6, y=4"
  },
  {
    "id": 141,
    "question": "Three people \u2014 Alan, Brian, Chloe \u2014 each have different favorite colors among red, blue, green. Alan doesn't like red. Brian doesn't like green. Who likes which color?",
    "options": [
      "Alan-blue, Brian-red, Chloe-green",
      "Alan-green, Brian-red, Chloe-blue",
      "Alan-blue, Brian-green, Chloe-red",
      "Alan-red, Brian-blue, Chloe-green"
    ],
    "answerLetter": "B",
    "answer": "Alan-green, Brian-red, Chloe-blue"
  },
  {
    "id": 142,
    "question": "If a statement is both necessary and sufficient, what does that mean? Give an example.",
    "options": [
      "It is only necessary",
      "It is only sufficient",
      "It is equivalent",
      "It is unrelated"
    ],
    "answerLetter": "C",
    "answer": "It is equivalent"
  },
  {
    "id": 143,
    "question": "Find next in sequence: 1, 2, 6, 24, 120, 720, __",
    "options": [
      "5040",
      "4320",
      "7200",
      "1440"
    ],
    "answerLetter": "A",
    "answer": "5040"
  },
  {
    "id": 144,
    "question": "In a tournament round-robin of 6 teams, how many matches are played?",
    "options": [
      "12",
      "15",
      "18",
      "30"
    ],
    "answerLetter": "B",
    "answer": "15"
  },
  {
    "id": 145,
    "question": "If P iff Q is true, and P is false, what is Q?",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Both"
    ],
    "answerLetter": "B",
    "answer": "False"
  },
  {
    "id": 146,
    "question": "In a town, 60% always lie and 40% always tell truth. You meet someone and they say \"I always lie.\" What can you deduce?",
    "options": [
      "They tell truth",
      "They lie",
      "Statement impossible",
      "They are a liar telling truth"
    ],
    "answerLetter": "B",
    "answer": "They lie"
  },
  {
    "id": 147,
    "question": "Given a 3\u00d73 magic square uses numbers 1\u20139, what is the magic constant?",
    "options": [
      "9",
      "15",
      "18",
      "21"
    ],
    "answerLetter": "B",
    "answer": "15"
  },
  {
    "id": 148,
    "question": "If the matrix of implications is cyclic, can you have consistent truth assignments? Explain with example.",
    "options": [
      "Always",
      "Never",
      "Sometimes",
      "Only if cycle length is even"
    ],
    "answerLetter": "C",
    "answer": "Sometimes"
  },
  {
    "id": 149,
    "question": "There are 100 coins; one is counterfeit and lighter. Using a balance scale, minimum weighings to find it?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerLetter": "B",
    "answer": "6"
  },
  {
    "id": 150,
    "question": "If f(x)=ax+b is bijective on real numbers, what\u2019s required for a and b?",
    "options": [
      "a=0",
      "a\u22600",
      "b=0",
      "a=1"
    ],
    "answerLetter": "B",
    "answer": "a\u22600"
  },
  {
    "id": 151,
    "question": "Logic grid puzzle: Four houses in different colors, four owners with different pets and drinks \u2014 create one solvable constraint set and ask for the solution.",
    "options": [
      "Provide puzzle",
      "Not solvable",
      "Multiple solutions",
      "Unique solution"
    ],
    "answerLetter": "D",
    "answer": "Unique solution"
  },
  {
    "id": 152,
    "question": "Given five statements where exactly two are true, construct a consistent set. Is this possible?",
    "options": [
      "Yes",
      "No",
      "Only with contradictions",
      "Only if three are false"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 153,
    "question": "If a sequence is defined by a_n = a_{n-1} + n, with a_1 = 1, find a_10.",
    "options": [
      "55",
      "46",
      "66",
      "45"
    ],
    "answerLetter": "A",
    "answer": "55"
  },
  {
    "id": 154,
    "question": "River crossing: Wolf, goat, cabbage. Minimal steps to cross safely?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answerLetter": "B",
    "answer": "5"
  },
  {
    "id": 155,
    "question": "If three numbers are pairwise relatively prime and multiply to 2310, what are the numbers (assume >1)?",
    "options": [
      "2, 3, 385",
      "2, 3, 5, 7, 11",
      "2, 3, 5, 7, 11 (factorization)",
      "2, 3, 5, 7, 11 combined differently"
    ],
    "answerLetter": "C",
    "answer": "2, 3, 5, 7, 11 (factorization)"
  },
  {
    "id": 156,
    "question": "If (A \u2228 B) true, (\u00acA \u2228 C) true, (\u00acB \u2228 \u00acC) true, what possible truth values exist?",
    "options": [
      "A=True,B=False,C=True",
      "A=False,B=True,C=False",
      "A=True,B=True,C=False",
      "Multiple assignments"
    ],
    "answerLetter": "D",
    "answer": "Multiple assignments"
  },
  {
    "id": 157,
    "question": "8-queens problem on 8\u00d78 board \u2014 how many solutions exist?",
    "options": [
      "92",
      "64",
      "128",
      "256"
    ],
    "answerLetter": "A",
    "answer": "92"
  },
  {
    "id": 158,
    "question": "If P(A|B)=0.6 and P(B)=0.5, P(A\u2227B) equals __.",
    "options": [
      "0.6",
      "0.3",
      "0.5",
      "0.1"
    ],
    "answerLetter": "B",
    "answer": "0.3"
  },
  {
    "id": 159,
    "question": "Partition numbers 1\u20139 into three sets with equal sums \u2014 is it possible?",
    "options": [
      "Yes",
      "No",
      "Only with repeats",
      "Only with zeros"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 160,
    "question": "Determine the next term: 2, 3, 5, 11, 31, 127, __",
    "options": [
      "509",
      "257",
      "1023",
      "2047"
    ],
    "answerLetter": "A",
    "answer": "509"
  },
  {
    "id": 161,
    "question": "If a function is continuous and strictly increasing on R, is it invertible?",
    "options": [
      "Yes",
      "No",
      "Only if surjective",
      "Only if differentiable"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 162,
    "question": "Truth-tellers/liars puzzle about neighbors \u2014 can you construct and solve one?",
    "options": [
      "Yes",
      "No",
      "Only with three people",
      "Only with four people"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 163,
    "question": "Toss three biased coins with p,q,r heads \u2014 probability of exactly two heads?",
    "options": [
      "pqr",
      "pq(1-r)+pr(1-q)+qr(1-p)",
      "p+q+r",
      "1-(p+q+r)"
    ],
    "answerLetter": "B",
    "answer": "pq(1-r)+pr(1-q)+qr(1-p)"
  },
  {
    "id": 164,
    "question": "Statement: \"At least one of the statements is false\" \u2014 variant of liar paradox, is it resolvable?",
    "options": [
      "Yes",
      "No",
      "Depends",
      "Paradoxical"
    ],
    "answerLetter": "D",
    "answer": "Paradoxical"
  },
  {
    "id": 165,
    "question": "If deck is shuffled, expected number of fixed points when mapping positions to suits?",
    "options": [
      "1",
      "13",
      "4",
      "Depends on permutation"
    ],
    "answerLetter": "A",
    "answer": "1"
  },
  {
    "id": 166,
    "question": "If more variables than independent equations, describe solution set.",
    "options": [
      "Unique",
      "Infinite",
      "None",
      "Always integer"
    ],
    "answerLetter": "B",
    "answer": "Infinite"
  },
  {
    "id": 167,
    "question": "Bolzano\u2013Weierstrass: If sequence bounded then has convergent subsequence \u2014 is it true?",
    "options": [
      "True",
      "False",
      "Only in R^n",
      "Only for monotone sequences"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 168,
    "question": "Using AND, OR, NOT, express implication: which formula?",
    "options": [
      "(A \u21d2 B) = (A \u2228 B)",
      "(A \u21d2 B) = (\u00acA \u2228 B)",
      "(A \u21d2 B) = (A \u2227 \u00acB)",
      "(A \u21d2 B) = (\u00acA \u2227 B)"
    ],
    "answerLetter": "B",
    "answer": "(A \u21d2 B) = (\u00acA \u2228 B)"
  },
  {
    "id": 169,
    "question": "Contrapositive and inverse \u2014 which are equivalent?",
    "options": [
      "Contrapositive equivalent to original",
      "Inverse equivalent to original",
      "Contrapositive equivalent to inverse",
      "None"
    ],
    "answerLetter": "A",
    "answer": "Contrapositive equivalent to original"
  },
  {
    "id": 170,
    "question": "2^n \u2212 1 prime (Mersenne) \u2014 first four n values producing primes?",
    "options": [
      "2,3,5,7",
      "2,3,5,11",
      "2,3,7,13",
      "2,3,5,13"
    ],
    "answerLetter": "A",
    "answer": "2,3,5,7"
  },
  {
    "id": 171,
    "question": "Five people in a line with hat colors constraints \u2014 solvable?",
    "options": [
      "Yes",
      "No",
      "Multiple solutions",
      "Depends"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 172,
    "question": "If graph is bipartite, what about cycles?",
    "options": [
      "No odd cycles",
      "No cycles at all",
      "Only triangles",
      "Only even cycles"
    ],
    "answerLetter": "A",
    "answer": "No odd cycles"
  },
  {
    "id": 173,
    "question": "Monty Hall \u2014 optimal strategy is to:",
    "options": [
      "Stay",
      "Switch",
      "Either",
      "Random"
    ],
    "answerLetter": "B",
    "answer": "Switch"
  },
  {
    "id": 174,
    "question": "If g(x)=g(\u2212x) for all x, g is:",
    "options": [
      "Odd",
      "Even",
      "Periodic",
      "Constant"
    ],
    "answerLetter": "B",
    "answer": "Even"
  },
  {
    "id": 175,
    "question": "Three boxes (GG, SS, GS). You draw a gold coin from a random box; probability other coin is gold?",
    "options": [
      "1/2",
      "2/3",
      "1/3",
      "3/4"
    ],
    "answerLetter": "B",
    "answer": "2/3"
  },
  {
    "id": 176,
    "question": "If two events independent, are complements independent?",
    "options": [
      "Yes",
      "No",
      "Only if events disjoint",
      "Only if probabilities equal"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 177,
    "question": "Create 4\u00d74 Sudoku-like puzzle with unique solution \u2014 possible?",
    "options": [
      "Yes",
      "No",
      "Only with givens",
      "Only with solver"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 178,
    "question": "Integer solutions to x^2 \u2212 y^2 = 21 exist? Find them.",
    "options": [
      "(11,10)",
      "(11,10) and (-11,-10)",
      "(6,3)",
      "Multiple pairs"
    ],
    "answerLetter": "D",
    "answer": "Multiple pairs"
  },
  {
    "id": 179,
    "question": "Show equivalence: \"If A then B\" \u2261 \"Not A or B\" \u2014 is this true?",
    "options": [
      "True",
      "False",
      "Only sometimes",
      "Depends on logic"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 180,
    "question": "How many ways to choose 3 people from 10 when order matters vs not?",
    "options": [
      "120 vs 120",
      "720 vs 120",
      "720 vs 720",
      "120 vs 60"
    ],
    "answerLetter": "B",
    "answer": "720 vs 120"
  },
  {
    "id": 181,
    "question": "If matrix A invertible, show det(A) \u2260 0 and converse \u2014 true?",
    "options": [
      "True",
      "False",
      "Only for diagonal",
      "Only for symmetric"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 182,
    "question": "Strong vs weak induction \u2014 which differs?",
    "options": [
      "Strong uses assumption for all \u2264k",
      "Weak uses only k",
      "Both same",
      "Neither"
    ],
    "answerLetter": "A",
    "answer": "Strong uses assumption for all \u2264k"
  },
  {
    "id": 183,
    "question": "0.999... equals 1 \u2014 is it true?",
    "options": [
      "Yes",
      "No",
      "Only approximately",
      "Depends on base"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 184,
    "question": "Seven weights, determine one heavier with balance scale minimal weighings?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answerLetter": "B",
    "answer": "3"
  },
  {
    "id": 185,
    "question": "Existential instantiation valid when?",
    "options": [
      "Always",
      "Never",
      "When domain non-empty",
      "Only with unique"
    ],
    "answerLetter": "C",
    "answer": "When domain non-empty"
  },
  {
    "id": 186,
    "question": "If distribution mean \u00b5 and variance \u03c3^2, shifting data by c changes mean and variance how?",
    "options": [
      "Mean+ c, variance same",
      "Mean same, variance+ c",
      "Mean+ c, variance+ c",
      "Both same"
    ],
    "answerLetter": "A",
    "answer": "Mean+ c, variance same"
  },
  {
    "id": 187,
    "question": "Four cards A K 4 7, rule \"If vowel then even\" \u2014 which to flip?",
    "options": [
      "A and 4",
      "A and 7",
      "K and 7",
      "4 and 7"
    ],
    "answerLetter": "B",
    "answer": "A and 7"
  },
  {
    "id": 188,
    "question": "If two sequences converge to L and M, show limit of their sum is L+M \u2014 true?",
    "options": [
      "True",
      "False",
      "Only if bounded",
      "Only for monotone"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 189,
    "question": "Logic puzzle involving time zones and flights \u2014 solvable?",
    "options": [
      "Yes",
      "No",
      "Only with map",
      "Only with dates"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 190,
    "question": "Knowing only sum of two numbers is 10, what about product? Find max/min.",
    "options": [
      "Max 25, min unbounded",
      "Max 25, min 0",
      "Max 25, min -infty",
      "Max 25, min -infty (no lower bound)"
    ],
    "answerLetter": "D",
    "answer": "Max 25, min -infty (no lower bound)"
  },
  {
    "id": 191,
    "question": "Pairwise independence does not imply mutual independence \u2014 provide counterexample?",
    "options": [
      "Yes",
      "No",
      "Only for three vars",
      "Only for four"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 192,
    "question": "Expected number of trials to get first success with prob p each trial?",
    "options": [
      "1/p",
      "p",
      "(1-p)/p",
      "p/(1-p)"
    ],
    "answerLetter": "A",
    "answer": "1/p"
  },
  {
    "id": 193,
    "question": "Random integer from 1 to N, expected value tends to what as N\u2192\u221e?",
    "options": [
      "Infinity",
      "0",
      "0.5",
      "Undefined"
    ],
    "answerLetter": "A",
    "answer": "Infinity"
  },
  {
    "id": 194,
    "question": "Directed acyclic graph has what ordering?",
    "options": [
      "Eulerian",
      "Hamiltonian",
      "Topological",
      "Lexicographic"
    ],
    "answerLetter": "C",
    "answer": "Topological"
  },
  {
    "id": 195,
    "question": "Knights and Knaves puzzle \u2014 can you create and solve one?",
    "options": [
      "Yes",
      "No",
      "Only trivial",
      "Only complex"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 196,
    "question": "If propositions inconsistent, explosion principle yields?",
    "options": [
      "Anything follows",
      "Nothing follows",
      "Only contradictions",
      "Only tautologies"
    ],
    "answerLetter": "A",
    "answer": "Anything follows"
  },
  {
    "id": 197,
    "question": "3\u00d73 matrix with row/column sums given, find entries \u2014 solvable?",
    "options": [
      "Yes",
      "No",
      "Only if consistent",
      "Only if integers"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 198,
    "question": "Sum of two independent normal variables is normal \u2014 true?",
    "options": [
      "True",
      "False",
      "Only if same variance",
      "Only if zero mean"
    ],
    "answerLetter": "A",
    "answer": "True"
  },
  {
    "id": 199,
    "question": "Design a logic puzzle requiring multi-step deduction \u2014 possible?",
    "options": [
      "Yes",
      "No",
      "Only with computers",
      "Only with many people"
    ],
    "answerLetter": "A",
    "answer": "Yes"
  },
  {
    "id": 200,
    "question": "Propose a new original logical reasoning puzzle and give its answer and explanation.",
    "options": [
      "Create one",
      "Not possible",
      "Only with time",
      "Only with group"
    ],
    "answerLetter": "A",
    "answer": "Create one"
  },
  {
    "id": 201,
    "question": "Which number comes next: 11, 22, 44, 88, __?",
    "options": [
      "100",
      "110",
      "132",
      "176"
    ],
    "answerLetter": "B",
    "answer": "110"
  },
  {
    "id": 202,
    "question": "If all squares are rectangles but not all rectangles are squares, which is true?",
    "options": [
      "All rectangles are squares",
      "Some rectangles are squares",
      "No rectangle is square",
      "Squares and rectangles are the same"
    ],
    "answerLetter": "B",
    "answer": "Some rectangles are squares"
  },
  {
    "id": 203,
    "question": "Which word fits: Dog is to Bark as Cat is to __?",
    "options": [
      "Meow",
      "Roar",
      "Chirp",
      "Hiss"
    ],
    "answerLetter": "A",
    "answer": "Meow"
  },
  {
    "id": 204,
    "question": "Find the missing number: 3, 9, 27, 81, __",
    "options": [
      "243",
      "162",
      "108",
      "324"
    ],
    "answerLetter": "A",
    "answer": "243"
  },
  {
    "id": 205,
    "question": "If a shop sells 12 pencils for $24, what is the price of 1 pencil?",
    "options": [
      "$1",
      "$2",
      "$3",
      "$4"
    ],
    "answerLetter": "B",
    "answer": "$2"
  },
  {
    "id": 206,
    "question": "Which shape has no straight sides?",
    "options": [
      "Triangle",
      "Square",
      "Circle",
      "Pentagon"
    ],
    "answerLetter": "C",
    "answer": "Circle"
  },
  {
    "id": 207,
    "question": "Complete the analogy: Leg is to Walk as Wing is to __.",
    "options": [
      "Jump",
      "Fly",
      "Run",
      "Swim"
    ],
    "answerLetter": "B",
    "answer": "Fly"
  },
  {
    "id": 208,
    "question": "Which is the odd one out: Lion, Tiger, Elephant, Leopard?",
    "options": [
      "Lion",
      "Tiger",
      "Elephant",
      "Leopard"
    ],
    "answerLetter": "C",
    "answer": "Elephant"
  },
  {
    "id": 209,
    "question": "If today is Friday, what day will it be after 10 days?",
    "options": [
      "Monday",
      "Sunday",
      "Tuesday",
      "Wednesday"
    ],
    "answerLetter": "D",
    "answer": "Wednesday"
  },
  {
    "id": 210,
    "question": "Which number is prime?",
    "options": [
      "21",
      "33",
      "37",
      "49"
    ],
    "answerLetter": "C",
    "answer": "37"
  },
  {
    "id": 211,
    "question": "What comes next: 2, 5, 10, 17, 26, __?",
    "options": [
      "35",
      "37",
      "40",
      "30"
    ],
    "answerLetter": "A",
    "answer": "35"
  },
  {
    "id": 212,
    "question": "If all teachers are educated and some educated people are athletes, which is necessarily true?",
    "options": [
      "Some teachers are athletes",
      "All teachers are athletes",
      "Some athletes are educated",
      "No teachers are athletes"
    ],
    "answerLetter": "C",
    "answer": "Some athletes are educated"
  },
  {
    "id": 213,
    "question": "Find the odd one: 4, 16, 25, 36, 49",
    "options": [
      "16",
      "25",
      "49",
      "4"
    ],
    "answerLetter": "D",
    "answer": "4"
  },
  {
    "id": 214,
    "question": "If 8 + x = 20, x = __.",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "answerLetter": "C",
    "answer": "12"
  }
];