let rlSync = require('readline-sync');

// Declare two function expressions that prompt for user's first and last name,
// respectively.

let askFirstName = () => rlSync.question("What is your first name? ");
let askLastName =  () => rlSync.question("What is your last name? ");

firstName = askFirstName();     // saves user's inputs
lastName = askLastName();

console.log(`Hello, ${firstName} ${lastName}!`);    // greets user's full name


