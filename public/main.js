const main = () => {
  // document.querySelector('h1').textContent += '?'
}

// as a user, I will select either rock, paper or scissors and play against opponent
let p1Choice = "";
let p2Choice = "";


const player1Buttons = document.querySelector(".first-player");
const player2Buttons = document.querySelector(".second-player");
const computerButton = document.querySelector(".computer-button");

const hide = () => {
  player1Buttons.classList.add("hide");
  player2Buttons.classList.add("hide");
  computerButton.classList.add("hide");
}

// player one chooses rock
const rock1 = () => {
  p1Choice = "Rock";
  console.log(p1Choice);
  const message = "Player One selected: " + p1Choice;
  const player1Result = document.createElement("li");
  player1Result.textContent = message;
  console.log(player1Result);
  document.querySelector("#results").appendChild(player1Result);
  player1Buttons.classList.add("hide");
}

//player one paper
const paper1 = () => {
  p1Choice = "Paper";
  console.log(p1Choice);
  const message = "Player One selected: " + p1Choice;
  const player1Result = document.createElement("li");
  player1Result.textContent = message;
  console.log(player1Result);
  document.querySelector("#results").appendChild(player1Result);
  player1Buttons.classList.add("hide");
}
//player one scissors
const scissors1 = () => {
  p1Choice = "Scissors";
  console.log(p1Choice);
  const message = "Player One selected: " + p1Choice;
  const player1Result = document.createElement("li");
  player1Result.textContent = message;
  console.log(player1Result);
  document.querySelector("#results").appendChild(player1Result);
  player1Buttons.classList.add("hide");
}
// player two chooses rock
const rock2 = () => {
  p2Choice = "Rock";
  console.log(p2Choice);
  const message = "Player Two selected: " + p2Choice;
  const player2Result = document.createElement("li");
  player2Result.textContent = message;
  console.log(player2Result);
  document.querySelector("#results").appendChild(player2Result);
  player2Buttons.classList.add("hide");
  results();
}

// player two chooses paper
const paper2 = () => {
  p2Choice = "Paper";
  console.log(p2Choice);
  const message = "Player Two selected: " + p2Choice;
  const player2Result = document.createElement("li");
  player2Result.textContent = message;
  console.log(player2Result);
  document.querySelector("#results").appendChild(player2Result);
  player2Buttons.classList.add("hide");
  results();
}
// player two chooses scissors
const scissors2 = () => {
  p2Choice = "Scissors";
  console.log(p2Choice);
  const message = "Player Two selected: " + p2Choice;
  const player2Result = document.createElement("li");
  player2Result.textContent = message;
  console.log(player2Result);
  document.querySelector("#results").appendChild(player2Result);
  player2Buttons.classList.add("hide");
  results();
}

let computerChoice = "";

const computer = () => {
  alert("You VS The Computer. Good Luck!!");
  
  let computerChoice = Math.ceil(Math.random() * Math.ceil(2));
  console.log(computerChoice);
  if (computerChoice === 0) {
    computerChoice = "Rock";
  }
  else if (computerChoice === 1) {
    computerChoice = "Paper";
  }
  else {
    computerChoice = "Scissors";
  }
  const message = "Computer selected: " + computerChoice;
  const computerResult = document.createElement("li");
  computerResult.textContent = message;
  document.querySelector("#results").appendChild(computerResult);
  compModeResults();
  hide();
  
}

const compModeResults = () => {
  if (p1Choice === computerChoice) {
    tie();
  }
  else if (p1Choice == "Rock" && computerChoice == "Paper" || p1Choice == "Paper" && computerChoice == "Scissors" || p1Choice == "Scissors" && computerChoice == "Rock") {
    const gameOutcomeMessage = "Computer Wins";
    const winningMessage = document.createElement("li");
    winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
    console.log(winningMessage);
    document.querySelector("#results").appendChild(winningMessage);
  }
  else {
    player1Win()
  }
}



const tie = () => {
  console.log("tie");
  const gameOutcomeMessage = "Player 1 and Player 2 tie";
  const winningMessage = document.createElement("li");
  winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
  console.log(winningMessage);
  document.querySelector("#results").appendChild(winningMessage);
  hide();
}

const player1Win = () => {
  console.log("player one wins");
  const gameOutcomeMessage = "Player 1 won";
  const winningMessage = document.createElement("li");
  winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
  document.querySelector("#results").appendChild(winningMessage);
  hide();
}

const player2Win = () => {
  console.log("player two wins");
  const gameOutcomeMessage = "Player 2 won";
  const winningMessage = document.createElement("li");
  winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
  document.querySelector("#results").appendChild(winningMessage);
  hide();
}

const results = () => {
  if (p1Choice === p2Choice) {
    tie();
    hide();
  }
  else if (p1Choice == "Rock" && p2Choice == "Paper" || p1Choice == "Paper" && p2Choice == "Scissors" || p1Choice == "Scissors" && p2Choice == "Rock") {
    player2Win();
    hide();    
  }
  else {
    player1Win();
    hide();    
  }
}



document.addEventListener('DOMContentLoaded', main)
