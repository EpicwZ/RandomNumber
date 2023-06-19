"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "😢 No number!";

    // when player wins
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;

    // when guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "😭You Lost The Game";
    }

    // when guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "😭You Lost The Game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
