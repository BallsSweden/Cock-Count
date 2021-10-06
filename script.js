'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 4;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = "Pick a fuckin' number!"
    //Correct guess
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Yep, I have ${secretNumber} cocks. You ever blow ${secretNumber} loads at once? No? How womanly.`
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "Guess is too high you fucking stoner";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "YOU LOST! TRASH, GET OUT AND NEVER GUESS HOW MANY DICKS I HAVE EVER AGAIN";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff4d4d';
    }
    //Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "Guess is too low. Suck my dicks while you're down there";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "YOU LOST! TRASH, GET OUT AND NEVER GUESS HOW MANY DICKS I HAVE EVER AGAIN";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff4d4d';
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 4;
  document.querySelector('.message').textContent = 'Start guessing Cock Count...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})