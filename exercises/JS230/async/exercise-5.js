// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Buggy Code


document.addEventListener("DOMContentLoaded", () => {
  let mainArea = document.querySelector("main");
  let subArea = document.querySelector("#sub");

  mainArea.addEventListener("contextmenu", event => {
    event.preventDefault();
    alert("main");
  });

  subArea.addEventListener("contextmenu", event => {
    event.preventDefault();
    event.stopPropagation();
    alert("sub")
  })
})