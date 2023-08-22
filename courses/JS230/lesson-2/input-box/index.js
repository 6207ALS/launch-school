// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Assignment: Build an Input Box

document.addEventListener("DOMContentLoaded", () => {
  let textField = document.querySelector(".text-field");
  let content = document.querySelector(".content");
  let cursorId;

  textField.addEventListener("click", event => {
    event.stopPropagation();
    cursorId = cursorId || setInterval(() => {
      textField.classList.toggle("cursor");
    }, 500);
  });

  document.addEventListener("keyup", event => {
    if (textField.classList.contains("focused")) {
      let key = event.key;
      let text = content.textContent;
      if (key === "Backspace") {
        content.textContent = text.slice(0, text.length - 1);
      } else if (text.length === 1) {
        content.textContent += event.key;
      }
    }
  });

  document.addEventListener("click", event => {
    if (textField.classList.contains("focused")) {
      textField.classList.remove("focused");
      textField.classList.remove("cursor");
      textField.classList.remove("has-cursor");
    }
    clearInterval(cursorId);
    cursorId = null;
  });
});
