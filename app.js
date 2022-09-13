const nonValid = 0;
const piedra = 1;
const papel = 2;
const tijera = 3;
const btnstart = document.getElementById("start");

let resultPlayer1 = null;
let resultPlayer2 = null;

let resultDOM = document.getElementById("result");

function winner(player) {
    resultDOM.innerText = "";
  return resultDOM.innerText = `El ganador es: ${player}`;
}

function getRandomInt(max) {
  let number = Math.floor(Math.random() * max);
  number == 0 ? number + 1 : number;
  return number;
}


function winCondition (resultPlayer1, resultPlayer2) {
  if (resultPlayer1 == tijera && resultPlayer2 == papel) {
    winner("Player1");
  } else if (resultPlayer2 == piedra && resultPlayer1 == tijera) {
    winner("Player 2");
  } else  if (resultPlayer1 == papel && resultPlayer2 == piedra) {
    winner("Player1");
  } else if (resultPlayer2 == piedra && resultPlayer1 == tijera) {
    winner("Player 2");
  } else  if (resultPlayer1 == piedra && resultPlayer2 == tijera) {
    winner("Player1");
  } else if (resultPlayer2 == piedra && resultPlayer1 == tijera) {
    winner("Player 2");
  } else {
    resultDOM.innerText = "Ups";
  }
}

function play() {
    btnstart.addEventListener("click", () => {
      randomResult1 = getRandomInt(3);
      randomResult2 =  getRandomInt(3);

      randomResult1 == randomResult2 && randomResult2 <= 3  ? randomResult2 - 1 : randomResult2;
      console.log(`Player 1: ${randomResult1}`);
      console.log(`Player 2: ${randomResult2}`);
      winCondition(randomResult1,randomResult2);
  });
}

play();
