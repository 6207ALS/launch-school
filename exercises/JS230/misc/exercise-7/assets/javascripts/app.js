// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | A JavaScript Stopwatch

document.addEventListener("DOMContentLoaded", () => {
	let toggleButton = document.querySelector(".toggle");
	let resetButton = document.querySelector(".reset");
	let timer;

	function resetTimer() {
		let centiseconds = document.querySelector(".centisecs");
		let seconds = document.querySelector(".secs");
		let minutes = document.querySelector(".mins");
		let hours = document.querySelector(".hours");

		[centiseconds, seconds, minutes, hours].forEach(counter => {
			counter.innerHTML = "00";
		});
	}

	function toggleTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
			toggleButton.innerHTML = "Start";
		} else {
			timer = setInterval(() => {
				incrementCentiseconds();
			}, 10)
			toggleButton.innerHTML = "Stop";
		}
	}

	function incrementCentiseconds() {
		let centiseconds = document.querySelector(".centisecs");
		let newValue = (+centiseconds.innerHTML) + 1;

		if (newValue === 100) {
			newValue = 0;
			incrementSeconds();
		}

		centiseconds.textContent = String(newValue).padStart(2, "0");
	}

	function incrementSeconds() {
		let seconds = document.querySelector(".secs");
		let newValue = (+seconds.innerHTML) + 1;

		if (newValue === 60) {
			newValue = 0;
			incrementMinutes();
		}

		seconds.textContent = String(newValue).padStart(2, "0");
	}

	function incrementMinutes() {
		let minutes = document.querySelector(".mins");
		let newValue = (+minutes.innerHTML) + 1;

		if (newValue === 60) {
			newValue = 0;
			incrementHours();
		}

		minutes.textContent = String(newValue).padStart(2, "0");
	}

	function incrementHours() {
		let hours = document.querySelector(".hours");
		let newValue = (+hours.innerHTML) + 1;

		hours.textContent = String(newValue).padStart(2, "0");
	}

	toggleButton.addEventListener("click", toggleTimer);
	resetButton.addEventListener("click", resetTimer);
});