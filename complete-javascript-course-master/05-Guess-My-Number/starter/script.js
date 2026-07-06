'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Randomizes a number between 1 & 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Randomizes a number between 1 and 20

// Adds the secret number to the middle 'number' box ~
// document.querySelector('.number').textContent = secretNumber;

// Creates a score variable which stores the user's score
let score = 20;
let highscore = 0;

// Creates a function for displaying messages without DRY.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// --- USER INTERACTION FEATURES FOR CLICKING 'CHECK!' TO CHECK INPUT NUMBER ---
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Stores the High Score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// -----------   PLAY AGAIN   -------------
document.querySelector('.again').addEventListener('click', function () {
  // Reset Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Resets Message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // Reset Background Color
  document.querySelector('body').style.backgroundColor = '#222';
  // Reset SecretNumber Styling
  document.querySelector('.number').style.width = '15rem';
  // Reset Secret Number to show '?' again.
  document.querySelector('.number').textContent = '?';
  // Reset guess box value
  document.querySelector('.guess').value = '';
});
