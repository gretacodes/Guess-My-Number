"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//refactoring - set the function to replace duplicate code
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input at all:
  if (!guess) {
    displayMessage("No number, try again");
    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    //displaying highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //hints
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "😨Too high!" : "🤔Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  } //when the player loses
  if (score <= 0) {
    displayMessage("Game Over😝😝😝");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "black";
  }
});

//reseting the game when reloading
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "orangered";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 10;
  document.querySelector(".message").textContent = "Start guessing...";
});
