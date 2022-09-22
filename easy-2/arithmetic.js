/*
The following program prompts the user for two numbers and prints the result of
the following operations on the two numbers: addition, subtraction, quotient, 
remainder, and power. 
*/

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('==> Enter the first number: \n'));
let num2 = Number(rlSync.question('==> Enter the second number: \n'));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);