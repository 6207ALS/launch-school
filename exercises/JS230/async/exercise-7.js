// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Article Highlighter

function highlight(event) {
  let element;
  if (event.target.tagName === "A") {
    let anchor = event.target;
    element = document.querySelector(anchor.getAttribute("href"));
  } else {
    element = document.querySelector("main");
  }

  removeHighLight();
  element.classList.add("highlight");
}

function removeHighLight() {
  let highlight = document.querySelector(".highlight");
  if (highlight) highlight.classList.remove("highlight");
}


document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("main");
  let header = document.querySelector("header");


  document.addEventListener("click", highlight);
  header.addEventListener("click", highlight);
  main.addEventListener("click", event => {
    let target;

    if (event.target.tagName === "ARTICLE") {
      target = event.target;
    } else if (event.target.parentElement.tagName === "ARTICLE") {
      target = event.target.parentElement;
    }

    if (target.tagName === "ARTICLE") {
      event.stopPropagation();
      removeHighLight();
      target.classList.add("highlight");
    }
  });

});