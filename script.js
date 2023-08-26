import roll from "./dice/dice_script.js";

const button = document.getElementById("button");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
let player = document.getElementById("player");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var max = document.getElementById("max");

let dice = document.getElementById("dice");
var outputDiv = document.getElementById("diceResult");
player.innerHTML = "Player 1, ";
var p1score = 0;
var p2score = 0;
dice.addEventListener("click", roll);

var inputScore = 0;
export default inputScore = prompt("Enter the Winning Score! (default 25) :");

$(document).ready(function () {
  if (inputScore == null || inputScore == "") {
    max.innerHTML = 25;
    inputScore = 25;
  } else {
    max.innerHTML = inputScore;
  }
});

$("#reset").click(function () {
  document.location.reload(true);
});
