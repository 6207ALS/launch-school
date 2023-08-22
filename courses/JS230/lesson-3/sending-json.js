// JS230 Making HTTP Requests from JavaScript
// Sending JSON via XHR


// Q1
/*
POST /books HTTP/1.1
Host: lsjs230-book-catalog.herokuapp.com
Content-type: application/json; charset=utf-8
Accept: **

{ title: "Eloquent JavaScript", author: 'Marijn Haverbeke' };
*/


// Q2
document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open("POST", "https://ls-230-web-store-demo.herokuapp.com/v1/products");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.setRequestHeader("Authorization", "token AUTH_TOKEN");

  let json = { name: "ABC", sku: "XYZ", price: "4"};
  request.send(json);

});
