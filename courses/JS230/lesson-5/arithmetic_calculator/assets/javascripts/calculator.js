// JS230 Lesson 5: Putting it All Together
// Assignment: Arithmetic Calculator

document.addEventListener("DOMContentLoaded", () => {
	let result = document.getElementById("result");
	let firstNumber = document.getElementById("first-number");
	let secondNumber = document.getElementById("second-number");
	let operator = document.getElementById("operator");

	document.querySelector("form").addEventListener("submit", event => {
		event.preventDefault();

		const Calculate = {
			"+": (firstNum, secondNum) => firstNum + secondNum,
			"-": (firstNum, secondNum) => firstNum - secondNum,
			"*": (firstNum, secondNum) => firstNum * secondNum,
			"/": (firstNum, secondNum) => firstNum / secondNum,
		}

		let firstValue = firstNumber.value;
		let secondValue = secondNumber.value;
		let calculator = Calculate[operator.value];

		result.textContent = String(calculator((+firstValue), (+secondValue)));
	});
});