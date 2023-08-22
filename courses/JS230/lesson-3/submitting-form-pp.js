// JS230 Making HTTP Requests from JavaScript
// Submitting a Form via XHR


// Q1
document.addEventListener("DOMContentLoaded", () => {
  let store = document.getElementById('store');

  store.addEventListener("submit", event => {
    event.preventDefault();
    
    let form = event.target;
    let request = new XMLHttpRequest();
    let data = new FormData(form);

    request.open("POST", `https://ls-230-web-store-demo.herokuapp.com/${form.getAttribute("action")}`);
  
    request.setRequestHeader("Authorization", `token AUTH_TOKEN`);
  
    request.addEventListener("load", event => store.innerHTML = request.response);
    request.send(data);
  });
});