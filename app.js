const piedra = 0;
const papel = 1;
const tijera = 2;
const btnstart = document.getElementById("start");

let player = null;
let pc = null;

let resultDOM = document.getElementById("result");

function win(winner, looser, name) {
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
  if (!(name == "empate")) {
    return (resultDOM.innerText = `
    You select: ${winner}
    PC select: ${looser}
    The winner is: ${name} `);
  } else {
    return (resultDOM.innerText = `
    You select: ${winner}
    PC select: ${looser}
    Try again: ${name} `);
  }
}

function getRandomInt(max) {
  let number = Math.floor(Math.random() * max);
  number == 0 ? number + 1 : number;
  return number;
}

function winCondition() {
  if (player == pc) {
    win(pc, player, "empate");
  } else if (player - pc == 1) {
    win(player, pc, "Player");
  } else if (player - pc == -2) {
    win(player, pc, "Player");
  } else {
    win(pc, player, "PC");
  }
}

//START
btnstart.addEventListener("click", () => {
  player = getRandomInt(3);
  pc = getRandomInt(3);
  winCondition(player, pc);
});
