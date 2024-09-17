let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => {
    return Math.abs(guess - target);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDifference = getAbsoluteDistance(humanGuess, target);
  const computerDifference = getAbsoluteDistance(computerGuess - target);
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
    return winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++;