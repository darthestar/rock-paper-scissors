const main = () => {
  // document.querySelector('h1').textContent += '?'
}

// as a user, I will select either rock, paper or scissors



const player1RockChoice = "Rock";
const player2Choice = "Rock";
const player1Buttons = document.querySelector(".first-player");
const player2Buttons = document.querySelector(".second-player");
const computerButton = document.querySelector(".computer-button");

// player one chooses rock
const rock1 = () => {
  console.log(player1RockChoice);
  const message = "Player One selected: " + player1RockChoice;
  console.log("player selected rock");
  const player1Result = document.createElement("li");
  player1Result.textContent = message;
  console.log(player1Result);
  document.querySelector("#results").appendChild(player1Result);
}

// player two chooses rock

const rock2 = () => {
  console.log(player2Choice);
  const message = "Player Two selected: " + player2Choice;
  console.log("player selected rock");
  const player2Result = document.createElement("li");
  player2Result.textContent = message;
  console.log(player2Result);
  document.querySelector("#results").appendChild(player2Result);


  //results is player one chooses rock and player two chooses rock  
  if (player1RockChoice == player1RockChoice) {
    console.log("tie");
    const winningPlayer = "Player 1 and Player 2 ";
    const outcome = "tied";
    const gameOutcomeMessage = winningPlayer + "" + outcome;
    const winningMessage = document.createElement("li");
    winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
    console.log(winningMessage);
    document.querySelector("#results").appendChild(winningMessage);
    player1Buttons.classList.add("hide");
    player2Buttons.classList.add("hide");
    computerButton.classList.add("hide");
  }

}


const computer = () => {
  alert("You VS The Computer. Good Luck!!");
  computerButton.classList.add("hide");
  player2Buttons.classList.add("hide");

  // const computerChoice = Math.ceil(Math.random() * Math.ceil(3));
  const computerChoice = "Rock";
  console.log(computerChoice);
  const message = "Computer selected: " + player1RockChoice;
  const computerResult = document.createElement("li");
  computerResult.textContent = message;
  document.querySelector("#results").appendChild(computerResult);
  

  // if (player1RockChoice) {
  //   document.querySelector("#results").appendChild(rock1.player1Result);

    if(player1RockChoice === computerChoice) {
      const winningPlayer = "Player 1 and Computer ";
      const outcome = "tied";
      const gameOutcomeMessage = winningPlayer + "" + outcome;
      const winningMessage = document.createElement("li");
      winningMessage.textContent = gameOutcomeMessage + "\n***** GAME OVER";
      console.log(winningMessage);
      document.querySelector("#results").appendChild(winningMessage);
      player1Buttons.classList.add("hide");
      player2Buttons.classList.add("hide");
      computerButton.classList.add("hide");
    }
  }

// }




document.addEventListener('DOMContentLoaded', main)
