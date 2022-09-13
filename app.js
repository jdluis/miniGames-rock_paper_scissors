const piedra = 0;
const papel = 1;
const tijera = 2;

const btnstart = document.getElementById("start");
const resultDOM = document.getElementById("result");

let player = null;
let pc = null;

function winStringToDOM(winner, looser, name) {
  resultDOM.innerText = "";

  switch (winner) {
    case piedra:
      winner = "rock";
      break;
    case papel:
      winner = "paper";
      break;
    case tijera:
      winner = "scissors";
      break;
  }

  switch (looser) {
    case piedra:
      looser = "rock";
      break;
    case papel:
      looser = "paper";
      break;
    case tijera:
      looser = "scissors";
      break;
  }

  if (name != "empate" && name == "Player") {
    return (resultDOM.innerText = `
    Player select: ${winner}
    PC select: ${looser}
    The winner is: ${name} `);
  } else if (name != "empate" && name == "PC") {
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
    winStringToDOM(pc, player, "empate");
  } else if (player - pc == 1) {
    winStringToDOM(player, pc, "Player");
  } else if (player - pc == -2) {
    winStringToDOM(player, pc, "Player");
  } else {
    winStringToDOM(pc, player, "PC");
  }
}

function getRandomInt(min, max) {
  let number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

//START
btnstart.addEventListener("click", () => {
  player = getRandomInt(0,3);
  pc = getRandomInt(0,3);
  console.log("pc" + ": " + pc)
  console.log("player" + ": " + player)
  winCondition(player, pc);
});
