let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)];
};

const playRound = (value) => {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = value.toString().toLowerCase();
    
    if (
        (computerSelection === "rock" &&playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock" ) ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore = ++computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")
    ) {
        playerScore = ++playerScore;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (
        computerSelection === playerSelection
    ) {
        return `Tie!  ${playerSelection} is equal to ${computerSelection}`;
    } else if (
        playerSelection !== (options[0] || options[1] || options[2])
    ) {
        return alert('That\'s not a valid choice.');
    }
};

const getWinner = () => {
    if (computerScore > playerScore) {
        return (alert(`The computer won this game, ${computerScore} to ${playerScore}, try again next time`));
    } else if (playerScore > computerScore) {
        return (alert(`${playerScore} to ${computerScore}, You won this game! Be proud of yourself`));
    };
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("'Rock, Paper, or Scissors?", "");
        console.log(playRound(userInput));
    };
    getWinner();
}

game();