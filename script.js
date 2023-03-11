'use strict';
let message = document.querySelector('.message');
const guess = document.querySelector('.guess');
let RandomNumber = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

let n = 20;

check.addEventListener('click', function () {
  let guessingNumber = guess.value;
  if (guessingNumber == RandomNumber) {
    message.textContent = 'Correct answer 🎉🎉';
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
    }
    document.querySelector('.number').textContent = RandomNumber;
    document.querySelector('body').style.backgroundColor = '#40E0D0';
  } else if (!guessingNumber) {
    message.textContent = 'NO NUMBER 🚫';
    n--;
    score.textContent = n;
  } else if (guessingNumber > 20) {
    message.textContent = 'Please input 1 to 20 ';
    n--;
    score.textContent = n;
  } else if (guessingNumber > RandomNumber) {
    message.textContent = 'Too High ⚡⚡';
    n--;
    score.textContent = n;
  } else if (guessingNumber < RandomNumber) {
    message.textContent = 'Too Low👇👇';
    n--;
    score.textContent = n;
  }
});
again.addEventListener('click', function () {
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score.textContent = 20;
  n = 20;
});
