/*
The following program serves as a tip calculator. It prompts the user for the
bill amount and tip rate. It computes the tip amount and total amount, and then 
logs the values to the console. 
*/

// prompts user for values
let rlSync = require('readline-sync');
let bill = Number(rlSync.question('What is the bill? '));
let percentage = Number(rlSync.question('What is the tip percentage? '));

// calculates tip amount and total amount
let tipAmount = bill * (percentage / 100);
let totalAmount = bill + tipAmount; 

// logs computed values
console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);