let computerChoice;
let playerChoice = document.querySelectorAll(".player-choice");
let computerScore = 0;
let playerScore = 0;
const options = ["rock", "paper", "scissors"];

//Getting the player score and computer score
let playerDOMScore = document.getElementById("score-a");
let computerDOMScore = document.getElementById("score-b");

// Function to write text as a typewriter
let i = 0;
let speed = 50;
let txt;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("gameh5").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//Reset score
const newGame = () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("gameh5").innerHTML = "";
  return (
    (playerDOMScore.innerHTML = playerScore),
    (computerDOMScore.innerHTML = computerScore),
    (i = 0),
    (txt = "Are you ready to rumble?"),
    typeWriter()
  );
};

//Set computer choice
const computerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const mod = (a, b) => {
  const c = a % b;

  return c < 0 ? c + b : c;
};

//Round
const selectWinner = (computerChoice, playerChoice) => {
  const x = options.indexOf(computerChoice.toString().toLowerCase());
  const y = options.indexOf(playerChoice.toString().toLowerCase());

  if (x === y) {
    (playerDOMScore.innerHTML = playerScore),
      (computerDOMScore.innerHTML = computerScore),
      (txt = `Tie!  ${playerChoice.toLowerCase()} is equal to ${computerChoice.toLowerCase()}`),
      typeWriter();
    return null;
  }
  if (mod(x - y, options.length) < options.length / 2) {
    return (
      ((computerScore = ++computerScore),
      ((playerDOMScore.innerHTML = playerScore),
      (computerDOMScore.innerHTML = computerScore)),
      (txt = `You lose! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`)),
      typeWriter()
    );
  } else {
    return (
      ((playerScore = ++playerScore),
      ((playerDOMScore.innerHTML = playerScore),
      (computerDOMScore.innerHTML = computerScore)),
      (txt = `You won! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`)),
      typeWriter()
    );
  }
};

const getFinalWinner = () => {
  if (computerScore === 5 && computerScore > playerScore) {
    return (
      (txt = `The computer won this game, 
    ${computerScore} to ${playerScore}, 
    try again next time`),
      typeWriter()
    );
  } else if (playerScore === 5 && playerScore > computerScore) {
    return (
      (Ttxt = `${playerScore} to ${computerScore}, 
      You won this game! 
      Be proud of yourself`),
      typeWriter()
    );
  }
};

//buttons listeners
playerChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let playerHand = choice.value;
    let computerHand = computerPlay().toLowerCase();
    document.getElementById("gameh5").innerHTML = "";
    i = -1;

    computerScore === 5 || playerScore === 5
      ? null
      : selectWinner(computerHand, playerHand);
    getFinalWinner();
  });
});
