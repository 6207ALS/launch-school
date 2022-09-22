/*
The following program returns the sum/product of all numbers between 1 and a 
given integer, inclusive. 
*/

// returns the sum of every number between 1 and the given integer
function computeSum (integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }

  return sum;
}

// returns the product of every number between 1 and the given integer
function computeProduct (integer) {
  let product = 1;
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }

  return product;
}

// prompts user for valid integer (greater than 0) and valid operation 
// ("s" for sum or "p" for product)
let rlSync = require('readline-sync');

let integer;
do {
  integer = Number(rlSync.question('Please enter an integer greater than 0: '));
}
while(integer <= 0 || isNaN(integer))

let operation;
let operationOptions = ['p', 's'];
do {
  operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
}
while (!operationOptions.includes(operation)) 

// computes sum/product depending on user's choice of operation 
if (operation === 's') {
  let sum = computeSum(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(integer);
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}
