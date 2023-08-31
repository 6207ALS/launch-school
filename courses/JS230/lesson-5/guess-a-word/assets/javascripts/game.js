// JS230 Lesson 5: Putting it All Together
// Assignment: Guess a Word



document.addEventListener("DOMContentLoaded", () => {
	let tree = document.querySelector("#tree");
	let apples = document.querySelector("#apples");
	let message = document.querySelector("#message");
	let spaces = document.querySelector("#spaces");
	let guesses = document.querySelector("#guesses");
	let replay = document.querySelector("#replay");

	randomWord = (function() {
		let words = ['apple', 'banana', 'orange', 'pear'];
		return function() {
			let randomIndex = Math.floor(Math.random() * words.length) || undefined;
			return words.splice(randomIndex, 1)[0];
		}
	})();

	class Game {
		constructor() {
			this.numIncorrectGuesses = 0;
			this.lettersGuessed = [];
			this.numGuessesAllowed = 6;
			this.word = randomWord();

			if (!this.word) {
				this.displayMessage("Sorry, I've run out of words!");
				return this;
			}

			this.init();
		}

		init() {
			this.createBlanks();
			this.resetGuesses();
			this.hideReplay();
			this.displayMessage("");
			apples.className = "";
		}

		createBlanks() {
			let blanks = (new Array(this.word.length + 1)).join("<span></span>");

			let currentSpans = spaces.querySelectorAll("span")
			currentSpans.forEach(span => span.remove());

			spaces.insertAdjacentHTML("beforeend", blanks);
		}

		resetGuesses() {
			let spans = guesses.querySelectorAll("span");
			spans.forEach(span => span.remove());
		}

		displayMessage(text) {
			message.textContent = text;
		}

		makeGuess(letter) {
			if (!this.lettersGuessed.includes(letter)) {
				this.lettersGuessed.push(letter);
			} else {
				return undefined;
			}

			this.addToGuesses(letter);

			if (!this.isCorrectLetter(letter)) {
				this.numIncorrectGuesses++;
				apples.className = `guess_${this.numIncorrectGuesses}`;
			} else {
				this.addToWord(letter);
			}

			this.results();
		}

		results() {
			if (this.success() || this.failure()) {
				document.removeEventListener("keypress", guessHandler);
				if (this.success()) {
					this.displayMessage("You win!");
				} else {
					this.displayMessage("Sorry! You're out of guesses");
				}
				this.displayReplay();
			}
		}

		addToWord(letter) {
			let spans = spaces.querySelectorAll("span");
			console.log(spans);
			this.letterIndexes(letter).forEach(index => spans[index].textContent = letter);
		}

		addToGuesses(letter) {
			let span = document.createElement("SPAN");
			span.textContent = letter;

			guesses.appendChild(span);
		}

		letterIndexes(letter) {
			let indexes = [];

			this.word.split("").forEach((char, index) => {
				if (char === letter) indexes.push(index);
			});

			return indexes;
		}

		success() {
			return this.word.split("")
											.every(letter => this.lettersGuessed.includes(letter));		
		}

		failure() {
			return this.numIncorrectGuesses >= this.numGuessesAllowed;
		}

		isCorrectLetter(letter) {
			return this.word.includes(letter);
		}

		hideReplay() {
			replay.style.display = "none";
		}

		displayReplay() {
			replay.style.display = "block";
		}
 	}

	let game = new Game();
	let guessHandler = (event) => {
		let letter = event.key.toLowerCase();
		if (/[a-z]/.test(letter)) {
			game.makeGuess(letter);
		}
	}
	let replayHandler = (event) => {
		event.preventDefault();
		game = new Game();
		document.addEventListener("keypress", guessHandler);
	}

	document.addEventListener("keypress", guessHandler);
	replay.addEventListener("click", replayHandler);
});