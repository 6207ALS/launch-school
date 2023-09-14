// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Serializing Forms

document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	let formErrors = document.querySelector(".form_errors");
	let inputs = document.querySelectorAll("input");
	let firstName = document.querySelector("#first_name");
	let lastName = document.querySelector("#last_name");
	let phoneNumber = document.querySelector("#phone");
	let creditCard = document.querySelectorAll("[name='credit_card']");
	let serializedData = document.querySelector(".serialized");

	function displayErrorMessage(control, message) {
		control.classList.add("invalid_field");
		control.parentElement.querySelector(".error_message").textContent = message;
	}

	function removeErrorMessage(control) {
		control.classList.remove("invalid_field");
		control.parentElement.querySelector(".error_message").textContent = "";
	}

	function handleMissingInput(control) {
		let inputName = control.getAttribute("name");
		let labelText = document.querySelector(`label[for='${inputName}']`).textContent;
		let message = `${labelText} is a required field`;
		displayErrorMessage(control, message);
	}

	function handleInvalidInput(control) {
		let inputName = control.getAttribute("name");
		let labelText = document.querySelector(`label[for='${inputName}'`).textContent;
		let message = `Please Enter a valid ${labelText}`;

		if (inputName === "password") {
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
		} else {
			formErrors.textContent = "";
		}

		renderSerializedData(e)
	}

	function renderSerializedData(e) {
		let formData = new FormData(e.target);
		let data = {};

		for (let pair of formData.entries()) {
			let key = pair[0];
			let value = pair[1];

			if (!data.hasOwnProperty(key)) data[key] = "";
			data[key] += value;
		}

		let urlEncoded = urlEncode(data);
		let p = document.createElement("P");
		p.textContent = urlEncoded;

		serializedData.appendChild(p);
	}

	function urlEncode(data) {
		let url = [];

		for (let key in data) {
			url.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
		}

		return url.join("&");
	}

	function handleTabForward(e) {
		let textLength = e.target.value.length;
		if (textLength === 4) focusNextCreditInput(e);
	}

	function focusNextCreditInput(e) {
		let controlId = e.target.id;
		let nextInputId = controlId.slice(0, 2) + String(+controlId.slice(2) + 1);
		let nextInput = document.querySelector(`#${nextInputId}`);

		nextInput.focus();
	}
	
	function acceptAlphabeticalChar(e) {
		let key = e.key;
		if ((/[^a-zA-Z'\s]/.test(key))) e.preventDefault();
	}

	function acceptNumericChar(e) {
		let key = e.key;
		if (/([^-\d])/.test(key) && key !== "Backspace") e.preventDefault();
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
		if (input.id !== "cd4") input.addEventListener("keyup", handleTabForward);
	});


	form.addEventListener("submit", validateForm);
});