import inputScore from "../script.js";
let player = document.getElementById("player");
var p1score = 0;
var p2score = 0;

export default function roll() {
  let a = Math.floor(Math.random() * 6 + 1);

  if (player.innerHTML == "Player 2, ") {
    setTimeout(() => {
      player.innerHTML = "Player 1, ";
      result2.innerHTML = a;
      p2score = p2score + parseFloat(result2.innerHTML);
      score2.innerHTML = p2score;
      setTimeout(() => {
        winner(p1score, p2score, inputScore);
      }, 100);
    }, 2000);
  } else {
    setTimeout(() => {
      player.innerHTML = "Player 2, ";
      result1.innerHTML = a;
      p1score = p1score + parseFloat(result1.innerHTML);
      score1.innerHTML = p1score;
      setTimeout(() => {
        winner(p1score, p2score, inputScore);
      }, 100);
    }, 2000);
  }

  dice.dataset.side = a;
  dice.classList.toggle("reRoll");
}

function winner(p1s, p2s, ins) {
  if (p1s >= ins) {
    Swal.fire("Player 1 Wins!");
  } else if (p2s >= ins) {
    Swal.fire("Player 2 Wins!");
  }
}
