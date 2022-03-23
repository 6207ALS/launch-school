/*
The following program prompts the user for their name. If the user's input
ends with an exclamation mark (!), the program will "yell" back to the user. 
If not, it will simply greet the user. 
*/

let rlSync = require('readline-sync');
let userInput = rlSync.question("What is your name? ");

if (userInput[userInput.length - 1] === "!") {
  let name = userInput.slice(0,-1);
  console.log(`HELLO, ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${userInput}.`);
}