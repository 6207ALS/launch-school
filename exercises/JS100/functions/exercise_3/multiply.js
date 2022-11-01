let rlSync = require('readline-sync');

// function expression to multiply two numbers
let multiplyNums = (a, b) => a * b;

// prompts user for two numbers  
let firstNum = rlSync.question("Enter the first number: ");
let secondNum = rlSync.question("Enter the second number: ");

// stores the product of the two numbers as variable
let productNums = multiplyNums(Number(firstNum), Number(secondNum));

// log to console the product of the two numbers
console.log(`${firstNum} * ${secondNum} = ${productNums}`);
