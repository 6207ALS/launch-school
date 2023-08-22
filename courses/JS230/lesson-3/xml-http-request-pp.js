// JS230 Making HTTP Requests from JavaScript
// Making a Request with XMLHttpRequest - Practice Problems


// Q1
let request1 = new XMLHttpRequest();
request1.open("GET", "https://api.github.com/repos/rails/rails");
request1.send();


// Q2
// The "response" and "responseText" properties contain the response body
// from XMLHttpRequest objects.