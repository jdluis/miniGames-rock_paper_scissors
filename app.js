const rock = 0;
const paper = 1;
const scissors = 2;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const btnstart = document.getElementById("start");
const resultDOM = document.getElementById("result");
const restartBtn = document.querySelector("#restart");
const options = document.querySelector("#options");

let player = null;
let pc = null;
let playerDOM = document.querySelector("#playerPoints");
let pcDOM = document.querySelector("#pcPoints");
let playerPoints = 0;
let pcPoints = 0;

function drawWinner(winner, looser, name) {
  resultDOM.innerText = "";

  //put the name to the variable
  switch (winner) {
    case rock:
      winner = "rock";
      break;
    case paper:
      winner = "paper";
      break;
    case scissors:
      winner = "scissors";
      break;
  }

  switch (looser) {
    case rock:
      looser = "rock";
      break;
    case paper:
      looser = "paper";
      break;
    case scissors:
      looser = "scissors";
      break;
  }

  if (name != "empate" && name == "Player") {
    playerDOM.innerText = ++playerPoints;

    return (resultDOM.innerText = `
    Player select: ${winner}
    PC select: ${looser}
    The winner is: ${name} `);
  } else if (name != "empate" && name == "PC") {
    pcDOM.innerText = ++pcPoints;

    return (resultDOM.innerText = `
    Player select: ${looser}
    PC select: ${winner}
    The winner is: ${name} `);
  } else {
    return (resultDOM.innerText = `
    You select: ${winner}
    PC select: ${looser}
    Try again: ${name} `);
  }
}

function winCondition() {
  if (player == pc) {
    drawWinner(pc, player, "empate");
  } else if (player - pc == 1) {
    drawWinner(player, pc, "Player");
  } else if (player - pc == -2) {
    drawWinner(player, pc, "Player");
  } else {
    drawWinner(pc, player, "PC");
  }
}

function getRandomInt(min, max) {
  let number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

function getAttributeOnEvent() {
  rockBtn.addEventListener("click", () => {
    player = parseInt(rockBtn.getAttribute("--data-value"));
    pc = getRandomInt(0, 3);
    winCondition();
  });

  paperBtn.addEventListener("click", () => {
    player = parseInt(paperBtn.getAttribute("--data-value"));
    pc = getRandomInt(0, 3);
    winCondition();
  });

  scissorsBtn.addEventListener("click", () => {
    player = parseInt(scissorsBtn.getAttribute("--data-value"));
    pc = getRandomInt(0, 3);
    winCondition();
  });
}

function reloadEvent (btn) {
  btn.addEventListener("click", () => {
    window.location.reload();
  })
}

//Init
btnstart.addEventListener("click", () => {
  btnstart.style.display = "none";
  options.style.display = "flex";
  restartBtn.style.display = "block";

  playerDOM.innerText = playerPoints;
  pcDOM.innerText = pcPoints;

  getAttributeOnEvent();
  reloadEvent(restartBtn);
});
