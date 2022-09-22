
let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");  // prompts user for first name
let lastName = rlSync.question("What is your last name?\n");    // prompts user for last name

console.log(`Hello, ${firstName} ${lastName}!`);    // greets user's full name
