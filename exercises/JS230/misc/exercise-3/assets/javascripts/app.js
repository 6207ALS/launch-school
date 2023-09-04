// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | A Custom Delete Confirmation Prompt

let todos = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener("DOMContentLoaded", () => {
	let todosContainer = document.querySelector("#todos");
	let confirmPrompt = document.querySelector(".confirm_prompt");
	let confirmYes = document.querySelector(".confirm_yes");
	let confirmNo = document.querySelector(".confirm_no");
	let overlay = document.querySelector(".overlay");


	let todosTemplateHTML = document.querySelector("#todos-template").innerHTML;
	let todosTemplate = Handlebars.compile(todosTemplateHTML);

	let todoPartialHTML = document.querySelector("#todo-partial").innerHTML;
	Handlebars.registerPartial("todo", todoPartialHTML);

	function renderTodos() {
		let todosHTML = todosTemplate({ todos });
		todosContainer.textContent = "";
		todosContainer.insertAdjacentHTML("beforeend", todosHTML);
	}

	function displayPrompt(event) {
		if (event.target.tagName !== "SPAN") return;
		let todoId = event.target.parentElement.getAttribute("data-id");

		overlay.style.display = "block";
		confirmPrompt.style.display = "block";
		confirmYes.setAttribute("data-id", todoId);
	}

	function handleDelete(event) {
		let todoId = +event.target.getAttribute("data-id");
		deleteTodo(todoId);
		hidePrompt();
		renderTodos();
	}

	function deleteTodo(todoId) {
		let todoIdx = findTodoIdx(todoId);
		todos.splice(todoIdx, 1);
	}

	function findTodoIdx(todoId) {
		return todos.findIndex(todo => todo.id === todoId);
	}

	function hidePrompt() {
		overlay.style.display = "none";
		confirmPrompt.style.display = "none";
	}

	renderTodos()

	todosContainer.addEventListener("click", displayPrompt);
	confirmYes.addEventListener("click", handleDelete);
	confirmNo.addEventListener("click", hidePrompt);
});