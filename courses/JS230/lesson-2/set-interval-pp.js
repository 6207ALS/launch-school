// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems - Repeating Execution with setInterval


// Q1

function startCounting() {
	let count = 1;
	let id = setInterval(function() {
		console.log(count);
		count++;
	}, 1000);
	return id;
}

function stopCounting(id) {
	clearInterval(id);
}