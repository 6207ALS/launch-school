// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Buggy Code

/*
document.querySelector('img').addEventListener('click', event => {
  event.stopPropagation();
}, false);

The code above invokes the "event.stopPropagation" method when an "img" element
is clicked on. The developer's intent is to prevent the user from being
directed to another page when clicking on the image. The method to do so
is "event.preventDefault".
*/