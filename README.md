# Logic Master Game - Red & Black Theme

## Description
Logic Master is a brain training game designed to test your reasoning skills across 5 levels of increasing difficulty. The game features a sleek red and black theme and challenges players with various types of logic puzzles, including patterns, analogies, math logic, and riddles.

## Features
- **5 Levels of Difficulty**: Progress through 5 levels, each with a unique logic puzzle.
- **Timer**: Race against the clock! Time decreases as you advance through the levels (30s, 25s, 20s, 15s, 10s).
- **Lives System**: You have 3 lives. Wrong answers or running out of time cost a life.
- **Dynamic Question Bank**: Questions are fetched from a local IndexedDB, which is populated from a comprehensive question bank.
- **Responsive Design**: Playable on various screen sizes.
- **Visual Feedback**: Interactive UI with progress bars, timer display, and result screens.

## Technologies Used
- **HTML5**: For the game structure.
- **CSS3**: For styling, including the red and black theme and animations.
- **JavaScript (ES6+)**: For game logic, state management, and IndexedDB interaction.
- **IndexedDB**: For storing and retrieving questions locally.

## Setup Instructions
1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd 5-level-game-OJT
    ```
3.  **Open `index.html`**:
    Simply open the `index.html` file in your preferred web browser. No server is required for basic functionality, although a local server is recommended for better performance and to avoid CORS issues with some browsers (though this project uses local JS files).

## How to Play
1.  Click **"Start Challenge"** on the main screen.
2.  Read the question and instruction carefully.
3.  Select the correct answer from the options provided.
4.  Complete all 5 levels to win!
5.  Be careful: you only have 3 lives and limited time for each level.

## Project Structure
-   `index.html`: Main game interface.
-   `css/style.css`: Stylesheet for the game.
-   `js/script.js`: Main game logic (timer, scoring, level management).
-   `js/db.js`: Handles IndexedDB operations (init, fetch questions).
-   `js/questionBank.js`: Contains the raw data for the questions.
