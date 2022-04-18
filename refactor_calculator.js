/*
The refactor_calculator.js program is a calculator that performs basic
arithmetic operations (addition, subtraction, multiplication, division) on two
numbers. The refactored program considers inputs with solely whitespace
(which returned 0 previously) as invalid.
*/

let rlSync = require('readline-sync');
console.log('Welcome to Calculator!');

// prompt given message and return user input
function prompt (message) {
  console.log(`=> ${message}`);
  let userInput = rlSync.question();

  return userInput;
}

// ensure user input is a valid Number
function invalidNumber (string) {
  return string.trim() === '' || Number.isNaN(Number(string));
}

// prompt user for first number
let num1;
do {
  num1 = prompt("What's the first number?").trim();
} while (invalidNumber(num1));

// prompt user for second number
let num2;
do {
  num2 = prompt("What's the second number?").trim();
} while (invalidNumber(num2));

// prompt user for operation from a given list
let userOp;
let operations = ["add", "subtract", "multiply", "divide", '1', '2', '3', '4'];

do {
  userOp = prompt("What operation would you like to perform?\n" +
    "1) Add \n2) Subtract \n3) Multiply \n4) Divide")
    .toLowerCase().trim();
} while (!operations.includes(userOp));

// perform given operation on the two numbers
num1 = Number(num1);
num2 = Number(num2);
let result;
switch (userOp) {
  case '1':
  case "add":
    result = num1 + num2;
    break;
  case '2':
  case "subtract":
    result = num1 - num2;
    break;
  case '3':
  case "multiply":
    result = num1 * num2;
    break;
  case '4':
  case "divide":
    result = num1 / num2;
    break;
}

// log result to console
console.log(`The result is: ${result}`);