// computer's choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

// human's choice
function getHumanChoice() {
    let humanChoice = prompt("Hi there! Pick your poison (rock, paper, scissors)");
    return humanChoice.toLowerCase();
}

computerScore = 0;
humanScore = 0;

// play round 
function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock' && humanChoice === 'rock')
        return 'Tie! Try again!';
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore++;
        return 'You won this round! Paper beats Rock';
    }
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore++;
        return 'You lost this round! Rock beats Scissors';
    }

    if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        return 'You lost this round!  Paper beats Rock';
    }
    if (computerChoice === 'paper' && humanChoice === 'paper')
        return 'Tie! Try again!';
    if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore++;
        return 'You won this round! Scissors beats Paper';
    }

    if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore++;
        return 'You won this round! Rock beats Scissors';
    }
    if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore++;
        return 'You lost this round! Scissors beats Paper';
    }
    if (computerChoice === 'scissors' && humanChoice === 'scissors')
        return 'Tie! Try again!';
}

for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(`Round ${i + 1}`);
    console.log(`Computer choosed: ${computerChoice}`);
    console.log(`Human choosed: ${humanChoice}`);

    let roundResult = playRound(computerChoice, humanChoice);
    console.log(roundResult);
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Humans's score: ${humanScore}`);
}

if (computerScore > humanScore)
    console.log('Computer won!');
else if (humanScore > computerScore)
    console.log('You won!');
else
    console.log("TIE!");