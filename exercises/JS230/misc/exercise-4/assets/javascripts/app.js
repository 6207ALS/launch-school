// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Context Menu for Todo List

let todos = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
];

document.addEventListener("DOMContentLoaded", () => {
	let todosContainer = document.querySelector("#todos");
	let confirmPrompt = document.querySelector(".confirm_prompt");
	let confirmYes = document.querySelector(".confirm_yes");
	let confirmNo = document.querySelector(".confirm_no");
	let overlay = document.querySelector(".overlay");

	let contextMenu = document.querySelector(".context_menu");
	let contextMenuDelete = contextMenu.querySelector(".deleteOption")

	let todosTemplateHTML = document.querySelector("#todos-template").innerHTML;
	let todosTemplate = Handlebars.compile(todosTemplateHTML);

	let todoPartialHTML = document.querySelector("#todo-partial").innerHTML;
	Handlebars.registerPartial("todo", todoPartialHTML);

	function renderTodos() {
		let todosHTML = todosTemplate({ todos });
		todosContainer.textContent = "";
		todosContainer.insertAdjacentHTML("beforeend", todosHTML);
	}

	function displayContextMenu(event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.target.tagName !== "LI") return;
		let todoId = event.target.getAttribute("data-id");

		contextMenu.style.display = "block";
		contextMenu.classList.remove("visible");
		setTimeout(() => contextMenu.classList.add("visible"), 10);
		
		contextMenu.style.left = `${event.clientX}px`;
		contextMenu.style.top = `${event.clientY}px`;
		contextMenuDelete.setAttribute("data-id", todoId);
	}

	function hideContextMenu(event) {
		event.stopPropagation();
		contextMenu.classList.remove("visible");
		contextMenu.style.display = "none";
	}

	function displayPrompt(event) {
		event.stopPropagation();
		let todoId = event.target.parentElement.getAttribute("data-id");
		overlay.style.display = "block";
		confirmPrompt.style.display = "block";
		contextMenu.classList.remove("visible");
		confirmYes.setAttribute("data-id", todoId);
	}

	function handleDelete(event) {
		event.stopPropagation();
		let todoId = +event.target.getAttribute("data-id");
		deleteTodo(todoId);
		hidePrompt(event);
		renderTodos();
	}

	function deleteTodo(todoId) {
		let todoIdx = findTodoIdx(todoId);
		todos.splice(todoIdx, 1);
	}

	function findTodoIdx(todoId) {
		return todos.findIndex(todo => todo.id === todoId);
	}

	function hidePrompt(event) {
		event.stopPropagation();
		overlay.style.display = "none";
		confirmPrompt.style.display = "none";
	}

	renderTodos()

	todosContainer.addEventListener("contextmenu", displayContextMenu);
	window.addEventListener("click", hideContextMenu);

	contextMenuDelete.addEventListener("click", displayPrompt);

	confirmYes.addEventListener("click", handleDelete);
	confirmNo.addEventListener("click", hidePrompt);
});