let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  if (!guess) {
    score--;
    document.querySelector(".score1").textContent = score;
    document.querySelector(".start").textContent = "Again!";
    document.querySelector(".startgussing").textContent = "No Number π«";
  } else if (secretNumber === guess) {
    document.querySelector(".start").textContent = "Again!";
    document.querySelector(".startgussing").textContent =
      "Correct Number πππ";
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#FF5733";
    document.querySelector(".startgussing").style.backgroundColor = "#00FF00";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore1").textContent = highscore;
  } else if (secretNumber < guess) {
    if (score > 1) {
      score--;
      document.querySelector(".score1").textContent = score;
      document.querySelector(".start").textContent = "Again!";
      document.querySelector(".startgussing").textContent = "Too High π";
    } else {
      document.querySelector(".start").textContent = "Again!";
      document.querySelector(".startgussing").textContent =
        "You Lost the Game πΈπΈ ";
      document.querySelector(".score1").textContent = 0;
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      score--;
      document.querySelector(".score1").textContent = score;
      document.querySelector(".start").textContent = "Again!";
      document.querySelector(".startgussing").textContent = "too lowπ";
    } else {
      document.querySelector(".start").textContent = "Again!";
      document.querySelector(".startgussing").textContent =
        "You lost the GameπΈπΈ ";
      document.querySelector(".score1").textContent = 0;
    }
  }
});
document.querySelector(".start").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score1").textContent = score;
  document.querySelector(".startgussing").textContent = "Start Guessing π";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector("body").style.backgroundColor = "#000000";
});
