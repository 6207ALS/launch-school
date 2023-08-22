// JS230 Making HTTP Requests from JavaScript
// Loading JSON via XHR

document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open("GET", 'https://api.github.com/repos/rails/rails');

  request.addEventListener("load", event => {
    let data = JSON.parse(request.response);
    console.log(request.status);
    console.log(data.open_issues);
  });

  request.addEventListener("error", event => {
    console.log("The request could not be completed!");
  })

  request.send();
});