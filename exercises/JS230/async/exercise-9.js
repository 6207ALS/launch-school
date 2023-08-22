// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Events Tracker


let tracker = (() => {
  let events = [];
  return {
    list() { return events.slice() },

    elements() { return events.map(event => event.target) },

    clear() { return events.length = 0 },

    pushEvent(event) { events.push(event) }
  }
})();

function track(callback) {
  return function(event) {
    if (!tracker.list().includes(event)) tracker.pushEvent(event);
    callback(event);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let divRed = document.getElementById("red");
  let divBlue = document.getElementById("blue");
  let divOrange = document.getElementById("orange");
  let divGreen = document.getElementById("green");

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
})

