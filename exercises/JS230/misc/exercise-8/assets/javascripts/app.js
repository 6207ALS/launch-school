// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | A JavaScript Calculator

document.addEventListener("DOMContentLoaded", () => {
	let currentNum = document.querySelector(".current_num");
	let calculation = document.querySelector(".calculation");
	let currentValue = +(currentNum.textContent);
	let previousValue;
	let currentOperation;

	let buttons = document.querySelector("#buttons");

	function handleAction(event) {
		if (isControl(event)) {
			handleControl(event);
		} else if (isDigit(event)) {
			handleDigit(event);
		} else if (isOperation(event)) {
			handleOperation(event);
		} else if (isDot(event)) {
			handleDot(event);
		} else if (isResult(event)) {
			handleResult(event)
		}
	}

	function handleControl(event) {
		switch (event.target.id) {
			case "ce":
				return clearEntry();
			case "c":
				return clear();
			case "neg":
				return negate();
		}
	}

	function clearEntry() {
		currentNum.textContent = "0";
	}

	function clearOperations() {
		let operations = document.querySelector(".calculation");
		operations.textContent = "";
	}

	function clear() {
		clearEntry();
		clearOperations();
	}

	function negate() {
		if (isZeroString(currentNum.textContent)) return;

		currentValue = -currentValue;
		if (isNegativeNumberString(currentNum.textContent)) {
			currentNum.textContent = number.slice(1);
		} else {
			currentNum.textContent = `-${currentNum.textContent}`;
		}
	}

	function isNegativeNumberString(str) {
		return /^-\d+$/.test(str);
	}

	function isZeroString(str) {
		return str === "0";
	}

	function handleDigit(event) {
		if (!currentValue) {
			let digit = event.target.textContent;
			currentNum.textContent = digit;
			currentValue = +digit;
		} else { 
			let newValue = +(currentNum.textContent + event.target.textContent);
			currentNum.textContent = String(newValue);
			currentValue = newValue;
		}
	}

	function handleOperation(event) {
		let operation = event.target.textContent;
		calculation.textContent += `${currentNum.textContent} ${operation} `;

		if (!currentOperation) {
			currentOperation = operation;
			previousValue = +currentNum.textContent;
		} else {
			renderResults();
			currentOperation = operation;
		}

		currentValue = null;
	}

	function renderResults() {
		let result = calculate(currentOperation);
		currentNum.textContent = String(result);
		previousValue = result;
	}

	function calculate(operation) {
		let result;
		switch (operation) {
			case "+":
				result = previousValue + currentValue;
				break;
			case "-":
				result = previousValue - currentValue;
				break;
			case "x":
				result = previousValue * currentValue;
				break;
			case "/":
				result = previousValue / currentValue;
				break;
			case "%":
				result = previousValue % currentValue;
				break;
		}
		return result;
	}

	function handleDot() {
		if (!currentNum.textContent.includes(".")) currentNum.textContent += ".";
	}

	function handleResult() {
		renderResults();
		clearOperations();
		currentOperation = null;
		currentValue = null;
	}

	function isControl(event) { return event.target.classList.contains("control") }
	function isDigit(event) { return event.target.classList.contains("digit") }
	function isOperation(event) { return event.target.classList.contains("op") }
	function isResult(event) { return event.target.classList.contains("result_button") }
	function isDot(event) { return event.target.classList.contains("dot") }

	buttons.addEventListener("click", handleAction);
});