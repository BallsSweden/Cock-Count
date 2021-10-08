'use strict';


function randomGenerator() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = randomGenerator();
let score = 4;
let highscore = 0;
let resets = 0;

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

function messageColor(color) {
  return document.querySelector('.message').style.color = color;
}

//termination 
const term = document.querySelector('.term')
const overlay2 = document.querySelector('.overlay2')
const openTerm = function () {
  term.classList.remove('hidden')
  overlay2.classList.remove('hidden')
}

//game logic
const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    displayMessage("Pick a fuckin' number")
    messageColor('#eee');
    //Correct guess
  } else if (guess === secretNumber) {
    displayMessage(`Yep, I have ${secretNumber} cocks. You ever blow ${secretNumber} loads at once? No? How womanly.`);
    displayNumber(secretNumber);
    backgroundColor('#60b347');
    widthNumber('30rem');
    messageColor('#eee');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    if (score > 390 && score < 430) {
      document.querySelector('.message').style.color = '#222'
      displayMessage('correct, but too high to win');
      document.querySelector('.btn').style.color = '#60b347';
      document.querySelector('.btn').style.backgroundColor = '#60b347';
      document.querySelector('.btn:hover').style.backgroundColor = '#60b347';


    }
    //easter eggs
  } else if (guess === 420) {
    score = 420;
    document.querySelector('.score').textContent = score;
    displayMessage("blaze it brudder");
    document.querySelector('body').style.color = '#60b347';
    document.querySelector('main').style.color = '#60b347';

  } else if (guess === 69) {
    score = 69;
    document.querySelector('.score').textContent = score;
    displayMessage("blaze");
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Guess is too high you fuckin' stoner" : "Guess is too low. Suck my dicks while you're down there");
      score--;
      document.querySelector('.score').textContent = score;
      messageColor('#eee');
    } else {
      displayMessage("YOU LOST! TRASH, GET OUT AND NEVER GUESS HOW MANY DICKS I HAVE EVER AGAIN");
      document.querySelector('.score').textContent = 0;
      backgroundColor('#ff4d4d');
      messageColor('#eee');
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
  document.querySelector('body').style.color = '#eee';
  messageColor('#eee');
  document.querySelector('.btn').style.color = '#222';
  document.querySelector('.btn').style.backgroundColor = '#eee';
  document.querySelector('.btn:hover').style.backgroundColor = '#eee';
  document.querySelector('main').style.color = '#eee';
  resets++;
  if (resets === 3) {
    displayMessage("Hey, you're getting better at this");
    messageColor('#60b347');
  }
  if (resets === 5) {
    document.querySelector('.message').textContent = `This one's on the house: ${secretNumber} cocks`;
    messageColor('#60b347');
  }
  if (resets === 7) {
    document.querySelector('.message').textContent = `Have you looked for any easter eggs?`;
    messageColor('#60b347');
  }
  if (resets === 10) {
    document.querySelector('.message').textContent = 'Why are you still playing this?';
    messageColor('#60b347');
  }
  if (resets === 11) {
    document.querySelector('.message').textContent = 'Are you procrastinating?';
    messageColor('#60b347');
  }
  if (resets === 13) {
    document.querySelector('.message').textContent = "That's 13 rounds now...";
    messageColor('yellow');
  }
  if (resets === 14) {
    document.querySelector('.message').textContent = "I'm getting a little worried, and slightly uncomfortable.";
    messageColor('yellow');
  }
  if (resets === 15) {
    document.querySelector('.big-text').textContent = "STOP.";
    document.querySelector('.big-text').style.fontSize = "9rem";
    document.querySelector('.big-text').style.color = "#ff4d4d";
    messageColor('#ff4d4d');
    displayMessage(`I don't like this anymore.`)
  }
  if (resets === 16) {
    messageColor('#ff4d4d');
    displayMessage(`I'm not a fucking circus animal.`)
  }
  if (resets === 17) {
    messageColor('#ff4d4d');
    displayMessage(`My cocks don't exist just for your sick, twisted game.`)
  }
  if (resets === 18) {
    document.querySelector('.big-text').textContent = "please... stop";
    document.querySelector('.big-text').style.fontSize = "2.5rem";
    document.querySelector('.big-text').style.color = "#016c8b";
    messageColor('#016c8b');
    displayMessage(`I'm tired of being defined by my dicks...`)
  }
  if (resets === 19) {
    document.querySelector('.big-text').textContent = "please...";
    document.querySelector('.big-text').style.fontSize = "2.5rem";
    document.querySelector('.big-text').style.color = "#016c8b";
    messageColor('#016c8b');
    displayMessage(`But that's all they ever see...`)
  }
  if (resets === 20) {
    document.querySelector('.big-text').textContent = "...";
    document.querySelector('.big-text').style.fontSize = "2.5rem";
    document.querySelector('.big-text').style.color = "#016c8b";
    messageColor('#016c8b');
    displayMessage(`I think it's time to go... thanks for playing...`)
  }
  if (resets === 21) {
    document.querySelector('.big-text').textContent = "...";
    document.querySelector('.big-text').style.fontSize = "2.5rem";
    document.querySelector('.big-text').style.color = "#016c8b";
    messageColor('#016c8b');
    displayMessage(`I think it's time to go... thanks for playing...`);
    openTerm();
  }
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