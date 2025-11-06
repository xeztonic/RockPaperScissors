function getComputerChoice() {
    let choises = ['rock', 'paper', 'scissors'];
    return choises[Math.floor(Math.random() * choises.length)];
}

let computerScore = 0;
let humanScore = 0;
let gameOver = false;

const resultsDiv = document.querySelector('#results');
const buttons = document.querySelector('.choice');

// play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        return `Tie! you both picked ${humanChoice}`;
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You won this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lost this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

// handle button click
buttons.addEventListener('click', () => {
    if (gameOver) return;

    const humanChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);

    let scoreText = `Score — You: ${humanScore} | Computer: ${computerScore}`;

    let message = `
        You chose: ${humanChoice}<br>
        Computer chose: ${computerChoice}<br>
        ${roundResult}<br>
        ${scoreText}
    `;

    // check for game winner
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

        if (humanScore === 5 && computerScore === 5) {
            message += `<br><strong>Game over! It's a tie.</strong>`;
        } else if (humanScore === 5) {
            message += `<br><strong>You won the game!</strong>`;
        } else {
            message += `<br><strong>Computer won the game!</strong>`;
        }
    }

    resultsDiv.innerHTML = message;
});