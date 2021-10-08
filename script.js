'use strict';


function randomGenerator() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = randomGenerator();
let score = 4;
let highscore = 0;

function displayMessage(message) {
  return document.querySelector('.message').textContent = message;
};

function displayNumber(number) {
  return document.querySelector('.number').textContent = number;
};

function backgroundColor(color) {
  return document.querySelector('body').style.backgroundColor = color;
};

function widthNumber(width) {
  return document.querySelector('.number').style.width = width;
};

//game logic
const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    displayMessage("Pick a fuckin' number")
    //Correct guess
  } else if (guess === secretNumber) {
    displayMessage(`Yep, I have ${secretNumber} cocks. You ever blow ${secretNumber} loads at once? No? How womanly.`)
    displayNumber(secretNumber);
    backgroundColor('#60b347');
    widthNumber('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Guess is too high you fuckin' stoner" : "Guess is too low. Suck my dicks while you're down there");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("YOU LOST! TRASH, GET OUT AND NEVER GUESS HOW MANY DICKS I HAVE EVER AGAIN");
      document.querySelector('.score').textContent = 0;
      backgroundColor('#ff4d4d');
    }
  }
}

//check button
document.querySelector('.check').addEventListener('click', function () {
  gameLogic()
})

//key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameLogic()
  }
})

//reset button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomGenerator();
  score = 4;
  displayMessage('Start guessing Cock Count...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  widthNumber('15rem');
})

//patch notes
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const patchNotes = document.querySelector('.patch')

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

patchNotes.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal)