/*
The mortgage.js program serves as a mortgage calculator. It prompts the user for
the loan amount, Annual Percentage Rate (APR), and loan term. The values are
then used to calculate the monthly mortgage payment.
*/

// required files
let messages = require("./prompt_messages.json");
let rlSync = require("readline-sync");

// prompt user for input with string argument
function prompt (string) {
  let userInput = rlSync.question(`\n=> ${string}`);
  return userInput;
}

// determine if a given string is a valid Number value.
function validNumber (string) {
  return !!Number(string) && Number(string) >= 0;
}

// determine if a given string is a valid Number and greater than 0
function validTime (string) {
  return validNumber(string) && parseInt(string, 10) > 0;
}

// continuously prompt user for formula values if any are invalid inputs
function retrieveVariables () {
  let principal, apr, timeYrs;

  do {
    principal = prompt(messages.amount).replaceAll(' ', '');
    if (!validNumber(principal)) console.log(messages.errorPrincipal);
  } while (!validNumber(principal));

  do {
    apr = prompt(messages.rate).replaceAll(' ', '');
    if (!validNumber(apr)) console.log(messages.errorRate);
  } while (!validNumber(apr));

  do {
    timeYrs = prompt(messages.time).replaceAll(' ', '');
    if (!validTime(timeYrs)) console.log(messages.errorTime);
  } while (!validTime(timeYrs));

  return [principal, apr, timeYrs];
}

// Calculate monthly mortgage payment using formula. If the provided APR is 0,
// the monthly payment is the principal amount divided by the number of months.
function calculateMortgage (principal, apr, timeYrs) {
  principal = Number(principal);
  let monthRate = Number(apr / 100) / 12;
  let timeMonths = Number(timeYrs) * 12;

  if (apr > 0) {
    let monthPayment =
    principal * (monthRate / (1 - Math.pow((1 + monthRate), (-timeMonths))));

    return monthPayment;
  } else {
    return principal / timeMonths;
  }
}

// prompt user for values, calculate monthly payment, log the results
function mortgage () {
  let [principal, apr, timeYrs] = retrieveVariables();
  let paymentAmount = calculateMortgage(principal, apr, timeYrs);
  let result = messages.result + `$${paymentAmount.toFixed(2)}`;

  console.log("\n" + "-".repeat(result.length));
  console.log(result);
  console.log("-".repeat(result.length));
}

// prompt user to continue or quit after every mortgage calculation
let contProgram;
let options = ['y', 'n', 'yes', 'no'];
do {
  mortgage();
  do {
    contProgram = prompt(messages.continue).trim().toLowerCase();
  } while (!options.includes(contProgram));
  console.clear();
} while (contProgram === 'y' || contProgram === 'yes');