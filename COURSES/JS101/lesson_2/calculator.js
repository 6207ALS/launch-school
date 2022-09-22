/*
The calculator.js program is a calculator that performs basic arithmetic 
operations (addition, subtraction, multiplication, division) on two numbers. The
program prompts the user for two numbers and an operation, continuously 
prompting if provided an invalid input. 
*/

let rlSync = require('readline-sync');
console.log('Welcome to Calculator!');

// prompt user for first number
let num1;
do {
  num1 = Number(rlSync.question("What's the first number?\n> ").trim());
} while (!Number(num1));

// prompt user for second number
let num2;
do {
  num2 = Number(rlSync.question("What's the second number?\n> ").trim() );
} while (!Number(num2));

// prompt user for operation from a given list
let userOp;
let operations = ["add", "subtract", "multiply", "divide", '1', '2', '3', '4'];

do {
  userOp = rlSync.question("What operation would you like to perform?\n\
1) Add \n2) Subtract \n3) Multiply \n4) Divide\n> ").toLowerCase().trim();
} while (!operations.includes(userOp));

// perform given operation on two numbers
let result;
switch (userOp.toLowerCase()) {
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