/*
The rock_paper_scissors.js program simulates a rock-paper-scissors game against
a computer. It prompts the user to choose one of the three options: rock, paper,
and scissors. It then prints the results of the user's choice against the
computer's randomly selected choice.
*/

// required file(s)
let rlSync = require('readline-sync');

// combination of possible results, user vs. computer
let results = {
  rock: {
    rock: "It's a tie!",
    paper: "Computer wins!",
    scissors: "You win!"
  },

  paper: {
    rock: "You win!",
    paper: "It's a tie!",
    scissors: "Computer wins!"
  },

  scissors: {
    rock: "Computer wins!",
    paper: "You win!",
    scissors: "It's a tie!",
  }
};

// prompt user for input with given string argument
function prompt (message) {
  let userInput = rlSync.question(`\n=> ${message}\n`);

  return userInput;
}

// return computer's randomly selected choice
function computerChoice () {
  let randomNum = Math.floor(Math.random() * 3);
  let options = [...Object.keys(results)];

  return options[randomNum];
}

// continuously prompt user to select one of three options until input is valid
function userChoice () {
  let options = [...Object.keys(results)];
  let userChoice;

  do {
    userChoice = prompt(`Choose one: ${options.join(', ').toUpperCase()}`)
      .replaceAll(' ', '').toLowerCase();
  } while (!options.includes(userChoice));

  return userChoice;
}

// log to console the results, given user's choice and computer's choice
function printResults (user, computer) {
  let result = results[user][computer];
  user = user.toUpperCase();
  computer = computer.toUpperCase();
  let message = (`You chose: ${user} | Computer chose: ${computer}`);
  let space = ' '.repeat(Math.floor((message.length - result.length) / 2));

  console.log('\n' + message);
  console.log('-'.repeat(message.length));
  console.log(space + result.toUpperCase() + space);
  console.log('-'.repeat(message.length));
}

// run rock-paper-scissors game: prompt user for choice and returning results
function game () {
  let user = userChoice();
  let computer = computerChoice();

  printResults(user, computer);
}

// continuously prompt user to continue/quit the program until valid input
function promptCont () {
  let options = ['y', 'n', "yes", "no"];
  let contProgram;

  do {
    contProgram = prompt("Would you like to continue? (y/n)")
      .replaceAll(' ', '').toLowerCase();
  } while (!options.includes(contProgram));

  return contProgram;
}

// main
console.log("Welcome to Rock Paper Scissors!");
let contProgram;

do {
  game();
  contProgram = promptCont();
  console.clear();
} while (contProgram === 'y' || contProgram === "yes");