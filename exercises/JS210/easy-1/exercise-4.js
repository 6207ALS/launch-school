// JS210 Exercises | Easy 1
// Exercise 4 - Tip Calculator

/*
PROBLEM:
Build a program that prompts the user for the bill amount and tip rate and
log the tip amount and total bill to the console.

Input: Number (bill amount), Number (tip rate)
Output: Number (tip amount), Number (total bill)

Rules:
  - Prompt the user for a bill amount AND tip rate
    - tip rate is in percentage
  - Log tip amount AND total bill
  - Ignore input validation
  - Assume user will provide numbers

  - Output amounts should be rounded to nearest hundredths

TEST CASE:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


REQUIREMENTS:
  - prompt user for the bill amount
  - prompt user for tip percentage
  - calculate the tip amount
    - bill amount * (tip percentage in decimal)
  - calculate the total amount
    - bill amount * (1 + tip percentage in decimal);
  - round both values to nearest hundredths
  - display results in dollars

DATA STRUCTURES:
  VARIABLES

BA = 200
TP = 15

TA = 200 * .15
BT = TA + BA

ALGORITHM:
  BILL_AMOUNT = PROMPT USER FOR BILL AMOUNT
  TIP_PERCENTAGE = PROMPT USER FOR TIP PERCENTAGE

  TIP_AMOUNT = BILL_AMOUNT * (TIP_PERCENTAGE / 100)
  BILL_TOTAL = BILL_AMOUNT + TIP_AMOUNT;

  LOG BOTH VALUES TO CONSOLE (ROUNDED TO NEAREST HUNDREDTHS)
*/

let rlSync = require("readline-sync");

let billAmount = Number(rlSync.question("What is the bill? "));
let tipPercentage = Number(rlSync.question("What is the tip percentage? "));

let tipAmount = billAmount * (tipPercentage / 100);
let billTotal = billAmount + tipAmount;

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);