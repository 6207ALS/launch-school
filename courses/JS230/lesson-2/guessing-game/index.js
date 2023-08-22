// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Assignment: Guessing Game
function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

document.addEventListener('DOMContentLoaded', () => {
  let answer = randomNumber(1, 100);
  let guessCount = 0;
  let form = document.querySelector("form");
  let userInput = document.querySelector("#guess");
  let messageElement = document.querySelector('main > p');
  let newGameButton = document.querySelector('main > a');
  let guessButton = document.querySelector("fieldset input[type='submit']");

  form.addEventListener("submit", event => {
    event.preventDefault();
    guessCount++;
    let guess = parseInt(userInput.value);
    let message;
    if (Number.isNaN(guess) ||  !Number.isInteger(Number(userInput.value))) {
      message = `${userInput.value} is not a valid integer. Try again!`;
    } else if (guess > answer) {
      message = `My number is less than ${guess}`;
    } else if (guess < answer) {
      message = `My number is greater than ${guess}`;
    } else {
      message = `You guessed it! It took you ${guessCount} guesses.`;
      guessButton.classList.add("disabled");
      guessButton.disabled = true;
    }
    messageElement.textContent = message;
    
  });

  newGameButton.addEventListener('click', event => {
    event.preventDefault();
    answer = randomNumber(1, 100);
    guessCount = 0;
    messageElement.textContent = "Guess a number from 1 to 100";
    guessButton.classList.remove("disabled");
    guessButton.disabled = false;
  });

});