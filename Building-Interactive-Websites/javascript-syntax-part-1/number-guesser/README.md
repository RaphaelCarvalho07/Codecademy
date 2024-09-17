# Number Guesser

## Overview
This project is a challenge project from Codecademy where you will build a small guessing game using JavaScript. The project requirements are open-ended, and you are encouraged to use various resources to solve any problems you encounter. The game will run in the browser, and you can use the browser's console to test your functions and view any syntax errors.

## Project Goals
In this project, you will write JavaScript functions to power a small guessing game. Your code will run in the browser instead of the terminal, and you can use your browser’s console to help you test your functions and view any syntax errors.

## Project Requirements
You will write four functions in `script.js`. Additional JavaScript code in `game.js` will call your functions based on user interactions. Do not edit `game.js` if you want your project to work as intended. Ensure that all your functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. Your JavaScript functions will be incorporated into a website that also uses HTML/CSS.

## Tasks

### Task 1
Create a `generateTarget()` function. This function should return a random integer between 0 and 9. The purpose of this function is to be called at the start of each new round to generate the new secret target number.

### Task 2
Create a `compareGuesses()` function. This function:
- Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
- Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
- Returns `true` if the human player wins, and `false` if the computer player wins.

The purpose of this function is to be called each round to determine which guess is closest to the target number.

### Task 3
Create an `updateScore()` function. This function:
- Has a single parameter. This parameter will be a string value representing the winner.
- Increases the score variable (`humanScore` or `computerScore`) by 1 depending on the winner passed in to `updateScore`. The string passed in will be either 'human' or 'computer'.
- Does not need to return any value.

The purpose of this function is to be used to correctly increase the winner’s score after each round.

### Task 4
Create an `advanceRound()` function. This function should increase the value of `currentRoundNumber` by 1. The purpose of this function is to be used to update the round number after each round.

### Task 5
Test that your code is working properly by invoking your newly written functions within `script.js` with sample inputs. You can delete this code once you’re convinced that everything is working as it should.

### Task 6
Great work! If you’d like to see the solution, move to the next task. If you’d like to extend your project on your own, you could consider the following:
- You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate `getAbsoluteDistance()` function that takes two numbers and returns the distance, and then use that inside your `compareGuesses()` function.

## Project Structure
```zsh
number-guesser/
├── css/
│   └── style.css
│
├── js/
│   ├── game.js
│   └── script.js
│
├── index.html
└── README.md
```


## Files Description
- `index.html`: The main HTML file that structures the web page.
- `css/style.css`: The CSS file that styles the web page.
- `js/game.js`: Contains the game logic and calls the functions you will write.
- `js/script.js`: Contains the functions you will write to power the game.
- `README.md`: This file, which contains the project description, goals, requirements, and structure.

## How to Run the Project
1. Open [`index.html`] in a web browser.
2. Use the browser's console to test and debug your functions in `script.js`.
3. Follow the instructions on the web page to play the game.