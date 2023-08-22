// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems - The Event Object


// Q1
document.addEventListener("DOMContentLoaded", () => {
	let x = document.querySelector(".x");
  document.addEventListener("click", event => {
    let clickX = event.clientX;
    let clickY = event.clientY;
    x.style.left = `${clickX}px`;
    x.style.top = `${clickY}px`;
  });
});


// Q2
document.addEventListener("DOMContentLoaded", () => {
	let x = document.querySelector(".x");
  document.addEventListener("mousemove", event => {
    let clickX = event.clientX;
    let clickY = event.clientY;
    x.style.left = `${clickX}px`;
    x.style.top = `${clickY}px`;
  });
});


// Q3
document.addEventListener("keydown", event => {
	let xHorizontal = document.querySelector(".x .horizontal");
	let xVertical = document.querySelector(".x .vertical");
	switch (event.key) {
		case "r":
			xHorizontal.style.background = "red";
			xVertical.style.background = "red";
			break;
			
		case "g":
			xHorizontal.style.background = "green";
			xVertical.style.background = "green";
			break;
		
		case "b":
			xHorizontal.style.background = "blue";
			xVertical.style.background = "blue";
			break;
	}
});


// Q4
document.addEventListener("DOMContentLoaded", () => {
  let textArea = document.querySelector(".composer textarea");
  let p = document.querySelector(".composer p");
	let button = document.querySelector(".composer button");
  textArea.addEventListener("keyup", event => {
    const AVAILABLE_NUM_CHARS = 140;
    let textLength = textArea.value.length;
    p.textContent = `${AVAILABLE_NUM_CHARS - textLength} characters remaining`;
		
    if (textLength > 140) {
      textArea.style.color = "red";
			button.disabled = true;
    } else {
      textArea.style.color = "black";
			button.disabled = false;
    }
  });
});