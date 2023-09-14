// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Form Validation, Part 2: Character Blocking Input

document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	let formErrors = document.querySelector(".form_errors");
	let inputs = document.querySelectorAll("input");

	function displayErrorMessage(e, message) {
		e.target.classList.add("invalid_field");
		e.target.nextElementSibling.textContent = message;
	}

	function removeErrorMessage(e) {
		e.target.classList.remove("invalid_field");
		e.target.nextElementSibling.textContent = "";
	}

	function handleMissingInput(e) {
		let message = `${e.target.textContent} is a required field`;
		displayErrorMessage(e, message);
	}

	function handleInvalidInput(e) {
		let control = document.querySelector(`#${e.target.id}`);
		let message = `Please Enter a valid ${control.textContent}`;
		displayErrorMessage(e, message);
	}

	function validateControl(e) {
		if (e.target.validity.valueMissing) {
			handleMissingInput(e);
			return false;
		} else if (e.target.validity.patternMismatch) {
			handleInvalidInput(e);
			return false;
		}

		return true;
	}

	function validateForm(e) {
		let inputsArray = Array.prototype.slice(inputs);
		let isValidForm = inputsArray.every(input => input.checkValidity());

		if (!isValidForm) {
			formErrors.textContent = "Fix errors before submitting this form.";
			e.preventDefault();
		}
	}

	inputs.forEach(input => {
		input.addEventListener("focusout", validateControl);
		input.addEventListener("focusin", removeErrorMessage);
	});

	form.addEventListener("submit", validateForm);
});