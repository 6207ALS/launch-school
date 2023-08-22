// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Bold Element + Custom


function makeBold(element, callback) {
  element.style.fontWeight = "bold";
  if (callback && typeof callback === "function") callback(element);
}

let sectionElement = document.querySelector('section');
makeBold(sectionElement, function(elem) {  elem.classList.add('highlight');});

sectionElement.classList.contains('highlight');
// true
sectionElement.style.fontWeight;
// "bold"