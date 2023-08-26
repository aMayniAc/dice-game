let player = document.getElementById("player");

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

  outputDiv.classList.remove("reveal");
  outputDiv.classList.add("hide");
  outputDiv.innerHTML = "You've got " + result;
  setTimeout(function () {
    outputDiv.classList.add("reveal");
  }, 1500);
}
