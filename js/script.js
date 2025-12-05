let levels = [];
let currentLevelIndex = 0;
let score = 0;
let lives = 3;
let timerInterval;
let timeLeft;
let questionPool = []; // Store fetched questions to avoid re-fetching if not needed, or re-fetch if empty

// DOM Elements
const startScreen = document.getElementById('start-screen');
const levelContainer = document.getElementById('level-container');
const resultScreen = document.getElementById('result-screen');
const livesDisplay = document.getElementById('lives-display');
const timerDisplay = document.getElementById('timer-display');
const progressBar = document.getElementById('progress-bar');
const levelType = document.getElementById('level-type');
const levelCounter = document.getElementById('level-counter');
const puzzleContent = document.getElementById('puzzle-content');
const levelInstruction = document.getElementById('level-instruction');
const optionsGrid = document.getElementById('options-grid');
const finalScore = document.getElementById('final-score');
const finalLevel = document.getElementById('final-level');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const resultIcon = document.getElementById('result-icon');

// Helper to decode HTML entities from API
function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// Shuffle array helper
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Original Logical Reasoning Questions
const logicalQuestions = [
    { category: "Pattern", question: "What comes next in the sequence: 2, 4, 8, 16, ...?", correct_answer: "32", incorrect_answers: ["24", "64", "20"] },
    { category: "Logic", question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops Lazzies?", correct_answer: "Yes", incorrect_answers: ["No", "Maybe", "Impossible to tell"] },
    { category: "Math Logic", question: "Which number replaces the question mark? 3, 5, 9, 17, ?", correct_answer: "33", incorrect_answers: ["25", "35", "29"] },
    { category: "Analogy", question: "Light is to Dark as Heat is to ...?", correct_answer: "Cold", incorrect_answers: ["Sun", "Fire", "Ice"] },
    { category: "Riddle", question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", correct_answer: "Echo", incorrect_answers: ["Ghost", "Cloud", "Shadow"] }
];

async function startGame() {
    // Show loading state
    const startButton = document.querySelector('.start-button');
    startButton.disabled = true;

    try {
        // Fetch 5 random questions from DB
        const selectedQuestions = await getRandomQuestions(5);

        if (selectedQuestions.length === 0) {
            alert("Failed to load questions. Please refresh.");
            startButton.disabled = false;
            return;
        }

        // Map to game format
        levels = selectedQuestions.map((q, index) => {
            // Options are already in the object, but we might want to shuffle them if they aren't already?
            // The input options A,B,C,D are usually fixed order, but let's shuffle them for the game UI
            // However, we need to track the correct answer.
            // The DB object has 'answer' which is the text of the correct option.

            const options = shuffleArray([...q.options]);

            // Time decreases as level increases: 30, 25, 20, 15, 10
            const time = 30 - (index * 5);

            return {
                level: index + 1,
                type: "Logic", // Default category since we didn't parse categories perfectly
                instruction: decodeHTML(q.question),
                options: options.map(opt => decodeHTML(opt)),
                answer: decodeHTML(q.answer),
                time: time
            };
        });

        startButton.disabled = false;

        currentLevelIndex = 0;
        score = 0;
        lives = 3;
        updateLives();
        startScreen.style.display = 'none';
        resultScreen.style.display = 'none';
        levelContainer.style.display = 'flex';
        loadLevel();
    } catch (e) {
        console.error(e);
        alert("Error starting game");
        startButton.disabled = false;
    }
}

function loadLevel() {
    if (currentLevelIndex >= levels.length) {
        endGame(true);
        return;
    }

    const currentLevel = levels[currentLevelIndex];

    // Update UI
    levelType.textContent = currentLevel.type;
    levelCounter.textContent = `0${currentLevel.level}`;
    puzzleContent.textContent = currentLevel.instruction; // Using instruction as main content for text-based puzzles
    levelInstruction.textContent = "Select the correct answer.";

    // Update Progress Bar
    const progress = ((currentLevelIndex) / levels.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Render Options
    optionsGrid.innerHTML = '';
    currentLevel.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-card';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsGrid.appendChild(button);
    });

    // Start Timer
    timeLeft = currentLevel.time;
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleWrongAnswer("Time's up!");
    }
}

function updateTimerDisplay() {
    timerDisplay.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
    // Optional: Add warning color if time is low
    if (timeLeft <= 5) {
        timerDisplay.style.color = '#ff4444';
    } else {
        timerDisplay.style.color = 'white'; // Or original color
    }
}

function checkAnswer(selectedOption) {
    clearInterval(timerInterval);
    const currentLevel = levels[currentLevelIndex];

    if (selectedOption === currentLevel.answer) {
        score += 100;
        currentLevelIndex++;
        loadLevel();
    } else {
        handleWrongAnswer("Wrong answer!");
    }
}

function handleWrongAnswer(reason) {
    lives--;
    updateLives();



    if (lives <= 0) {
        endGame(false);
    } else {

        alert(`${reason} You lost a life.`);
        loadLevel();
    }
}

function updateLives() {
    let hearts = "";
    for (let i = 0; i < lives; i++) {
        hearts += "❤";
    }
    livesDisplay.textContent = hearts;
}

function endGame(victory) {
    clearInterval(timerInterval);
    levelContainer.style.display = 'none';
    resultScreen.style.display = 'flex'; // Ensure flex

    if (victory) {
        resultTitle.textContent = "Victory!";
        resultMessage.textContent = "You are a Logic Master!";
        resultIcon.textContent = "🎉";
        finalLevel.textContent = "5/5";
    } else {
        resultTitle.textContent = "Game Over";
        resultMessage.textContent = "Better luck next time.";
        resultIcon.textContent = "💀";
        finalLevel.textContent = `${currentLevelIndex}/5`;
    }
    finalScore.textContent = score;
}

function resetGame() {
    startGame();
}
