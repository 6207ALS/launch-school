// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Multiple Choice Quiz

const QUESTIONS = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const ANSWER_KEY = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

document.addEventListener("DOMContentLoaded", () => {
	let questionsContainer = document.querySelector("fieldset");
	let form = document.querySelector("form");
	let submitButton = document.querySelector(".submit");
	let resetButton = document.querySelector(".reset_form");
	let templates = {};

	document.querySelectorAll("[data-type='template']").forEach(template => {
		templates[template.id] = Handlebars.compile(template.innerHTML);
	});

	document.querySelectorAll("[data-type='partial'").forEach(partial => {
		Handlebars.registerPartial(partial.id, partial.innerHTML);
	});

	function renderQuestions(questions) {
		let questionsHTML = templates["questions"]({ questions });

		questionsContainer.insertAdjacentHTML("beforeend", questionsHTML);
	}

	function validateForm(e) {
		e.preventDefault();

		if (submitButton.classList.contains("disabled")) return;

		let data = {};

		for (let pair of new FormData(form).entries()) {
			data[pair[0]] = pair[1];
		}

		renderResults(data);
		disableSubmitButton();
		enableResetButton();
	}

	function renderResults(data) {
		for (let key in ANSWER_KEY) renderResult(key, data[key]);
	}

	function renderResult(questionId, userAnswer) {
		let question = document.querySelector(`div[data-id='${questionId}']`);
		let result = question.querySelector(".result");
		let correctAnswer = ANSWER_KEY[questionId];
		let className;
		let message;

		if (userAnswer === undefined) {
			message = `You did not answer this question. Correct answer is: "${correctAnswer}".`;
			className = "result wrong"
		} else if (userAnswer != correctAnswer) {
			message = `Wrong Answer. Correct answer is: "${correctAnswer}".`;
			className = "result wrong"
		} else if (userAnswer === correctAnswer) {
			message = "Correct Answer";
			className = "result correct";
		}

		result.className = className;
		result.textContent = message;
	}

	function resetResults() {
		if (resetButton.classList.contains("disabled")) return;

		let questions = document.querySelectorAll("div[class='question']");
		questions.forEach(question => {
			let result = question.querySelector("p[class~='result']");
			result.textContent = "";
			result.className = "result";
		});
	}

	function disableSubmitButton() { 
		submitButton.classList.add("disabled");
	}
	function enableSubmitButton() { 
		submitButton.classList.remove("disabled");
	}

	function disableResetButton() { 
		resetButton.classList.add("disabled");
	}
	function enableResetButton() { 
		resetButton.classList.remove("disabled");
	}

	function resetForm() {
		if (resetButton.classList.contains("disabled")) return;
 		form.reset();
		resetResults();
		enableSubmitButton();
		disableResetButton();
	}

	renderQuestions(QUESTIONS);

	submitButton.addEventListener("click", validateForm);
	resetButton.addEventListener("click", resetForm);

});