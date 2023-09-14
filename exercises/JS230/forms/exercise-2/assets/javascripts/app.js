// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Form Validation, Part 2: Character Blocking Input

document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	let formErrors = document.querySelector(".form_errors");
	let inputs = document.querySelectorAll("input");
	let firstName = document.querySelector("#first_name");
	let lastName = document.querySelector("#last_name");
	let phoneNumber = document.querySelector("#phone");
	let creditCard = document.querySelectorAll("[name='credit_card']");


	function displayErrorMessage(control, message) {
		control.classList.add("invalid_field");
		control.parentElement.querySelector(".error_message").textContent = message;
	}

	function removeErrorMessage(control) {
		control.classList.remove("invalid_field");
		control.parentElement.querySelector(".error_message").textContent = "";
	}

	function handleMissingInput(control) {
		let inputId = control.id;
		let labelText = document.querySelector(`label[for='${inputId}'`).textContent;
		let message = `${labelText} is a required field`;
		displayErrorMessage(control, message);
	}

	function handleInvalidInput(control) {
		let inputId = control.id;
		let labelText = document.querySelector(`label[for='${inputId}'`).textContent;
		let message = `Please Enter a valid ${labelText}`;

		if (inputId === "password") {
			displayErrorMessage(control, "Password must be at least 10 characters long.");	
		} else {
			displayErrorMessage(control, message);
		}
	}

	function validateControl(control) {
		if (control.validity.valueMissing) {
			handleMissingInput(control);
			return false;
		} else if (control.validity.patternMismatch) {
			handleInvalidInput(control);
			return false;
		}

		return true;
	}

	function validateForm(e) {
		e.preventDefault();
		inputs.forEach(input => validateControl(input));

		if (!this.checkValidity()) {
			formErrors.textContent = "Form cannot be submitted until errors are corrected.";
			e.preventDefault();
		}
	}
	
	function acceptAlphabeticalChar(e) {
		let key = e.key;
		if ((/[^a-zA-Z'\s]/.test(key))) e.preventDefault();
	}

	function acceptNumericChar(e) {
		let key = e.key;
		if ((/([^-\d])/.test(key) && key !== "Backspace")) e.preventDefault();
	}

	function handleFocusOut(e) {
		let control = e.target;
		validateControl(control);
	}

	function handleFocusIn(e) {
		let control = e.target;
		removeErrorMessage(control);
	}

	inputs.forEach(input => {
		input.addEventListener("focusout", handleFocusOut);
		input.addEventListener("focusin", handleFocusIn);
	});

	[firstName, lastName].forEach(input => {
		input.addEventListener("keypress", acceptAlphabeticalChar);
	});

	phoneNumber.addEventListener("keydown", acceptNumericChar);

	creditCard.forEach(input => {
		input.addEventListener("keydown", acceptNumericChar);
	})

	form.addEventListener("submit", validateForm);
});