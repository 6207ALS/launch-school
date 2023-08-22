// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Reverse Engineer


document.querySelector('html').addEventListener('click', event => {
  let container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }

  
}, true);

document.querySelector('#container').addEventListener('click', event => {
});


