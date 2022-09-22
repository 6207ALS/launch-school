/*
The calculator_bonus.js program is a calculator that performs basic
arithmetic operations (addition, subtraction, multiplication, division) on two
numbers. The refactored program has the following added features: continue/quit
option and selecting a language.

Users are first prompted to select a language: english or spanish. After
completing a calculation, users will also be prompted if they wish to
continue. In addition, all string messages logged to the console are accessed
from an internalized json file. Functions that require a certain string access
an organized object from the json file, mainly categorized by the two languages.
*/

// required files
let rlSync = require('readline-sync');
let json = require('./calculator_messages.json');
let language = setLanguage();
console.log(json.greeting);

// prompt given message and return user input
function prompt (message) {
  console.log(`=> ${message}`);
  let userInput = rlSync.question();

  return userInput;
}

// prompt user for preferred language
function setLanguage() {
  let language;
  let languages = ["en", "es",];

  do {
    language = prompt(json.language).replaceAll(' ', '').toLowerCase();
  } while (!languages.includes(language));

  return language;
}

// ensure user input is a valid Number
function invalidNumber (string) {
  return string.trim() === '' || Number.isNaN(Number(string));
}

// calculate a given operation on two numbers
function calculate(num1, num2, userOp) {
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

  return result;
}

// provide calculator function
function calculator () {
  // prompt user for first number
  let num1;

  do {
    num1 = prompt(json[language].num1).trim();
  } while (invalidNumber(num1));

  // prompt user for second number
  let num2;

  do {
    num2 = prompt(json[language].num2).trim();
  } while (invalidNumber(num2));

  // prompt user for operation from a given list
  let userOp;
  let ops = ["add", "subtract", "multiply", "divide", '1', '2', '3', '4'];

  do {
    userOp = prompt(json[language].operations.join('')).toLowerCase().trim();
  } while (!ops.includes(userOp));

  // perform given operation on the two numbers
  num1 = Number(num1);
  num2 = Number(num2);
  let result = calculate(num1, num2, userOp);

  // log result to console
  console.log(`The result is: ${result}`);
}

// run the calculator function until user decides to stop
let contProgram = 'y';
let options = ['y', 'n', 'yes', 'no'];

while (contProgram === 'y' || contProgram === "yes") {
  calculator();
  do {
    contProgram = prompt(json[language].continue)
      .replaceAll(' ', '').toLowerCase();
  } while (!options.includes(contProgram));
}