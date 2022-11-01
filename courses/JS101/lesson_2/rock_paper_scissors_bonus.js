/*
In continuation of "Lesson 2: Rock Paper Scissors..."
The rock_paper_scissors_bonus.js program simulates the rock-paper-scissors-spock
-lizard game against a computer. In each round, the user is prompted to choose
one of five options: rock, paper, scissors, spock, or lizard. It then prints
the results of the user's choice against the computer's randomly selected
choice. The first to reach 3 wins is the winner of the game.
*/

// required file(s)
let rlSync = require('readline-sync');

// combination of possible results, user vs. computer. true means the user wins.
// false means the computer wins, and 2 means a tie.
let results = {
  rock: {
    rock: 2,
    paper: false,
    scissors: true,
    spock: false,
    lizard: true
  },

  paper: {
    rock: true,
    paper: 2,
    scissors: false,
    spock: true,
    lizard: false
  },

  scissors: {
    rock: false,
    paper: true,
    scissors: 2,
    spock: false,
    lizard: true
  },

  spock: {
    rock: true,
    paper: false,
    scissors: true,
    spock: 2,
    lizard: false
  },

  lizard: {
    rock: false,
    paper: true,
    scissors: false,
    spock: true,
    lizard: 2
  }
};

// prompt user for input with given string argument
function prompt (message) {
  let userInput = rlSync.question(`\n=> ${message}\n`);

  return userInput;
}

// continuously prompt user to enter one of the options until input is valid
// users can also enter the shortened word of the option
function userChoice () {
  let options = [...Object.keys(results)];
  let userChoice;
  let shortOptions = {
    r: "rock",
    p: "paper",
    s: "scissors",
    sp: "spock",
    l: "lizard"
  };

  do {
    userChoice = prompt(`Choose one: ${options.join(', ').toUpperCase()} ` +
      `or (${Object.keys(shortOptions).join(', ').toUpperCase()})`)
      .replaceAll(' ', '').toLowerCase();
  } while (!options.concat(Object.keys(shortOptions)).includes(userChoice));

  // if the user's choice is the shortened word, change it to the full word
  if (Object.keys(shortOptions).includes(userChoice)) {
    userChoice = shortOptions[userChoice];
  }

  return userChoice;
}

// return computer's randomly selected choice
function computerChoice () {
  let options = [...Object.keys(results)];
  let randomNum = Math.floor(Math.random() * options.length);

  return options[randomNum];
}

// runs a round of the game, prints and returns the results
function round () {
  let user = userChoice();
  let computer = computerChoice();

  printResults(user, computer);
  return results[user][computer];
}

// run rounds until either player wins 3 times
function game () {
  let userWins = 0;
  let computerWins = 0;
  let rounds = 1;

  let scoreboard = _ => {
    return `ROUND ${rounds} - YOU: ${userWins} | COMPUTER: ${computerWins}`;
  };

  while (userWins < 3 && computerWins < 3) {
    console.log(scoreboard());
    let result = round();

    if (result === true) {
      userWins++;
    } else if (result === false) {
      computerWins++;
    }
    rounds++;
  }

  displayWinner(userWins, computerWins);
  console.log(`FINAL SCORE: ${scoreboard()}`);
}

// log to console the round results, given user's choice and computer's choice
function printResults (user, computer) {
  let winner;

  if (results[user][computer] === true) {
    winner = "You win!";
  } else if (results[user][computer] === false) {
    winner = "Computer wins!";
  } else {
    winner = "It's a tie!";
  }

  console.log(resultsFormatted(user, computer, winner));
  rlSync.question("\nPress ENTER to continue");
}

// returns string of the round's results with highlights and special formatting
function resultsFormatted (user, computer, winner) {
  user = user.toUpperCase();
  computer = computer.toUpperCase();
  let decisions = (`You chose: ${user} | Computer chose: ${computer}`);
  let space = ' '.repeat(Math.floor((decisions.length - winner.length) / 2));

  return '\n' + decisions +
    '\n' + '-'.repeat(decisions.length) +
    '\n' + space + winner.toUpperCase() + space +
    '\n' + '-'.repeat(decisions.length);
}

// prints the winner of the game
function displayWinner (userWins, computerWins) {
  console.clear();
  if (userWins > computerWins) {
    console.log("\nCONGRATULATIONS! YOU WON THE GAME!");
  } else {
    console.log("\nSORRY! YOU LOST!");
  }
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
console.clear();
console.log("Welcome to Rock Paper Scissors Spock Lizard!");
console.log("The first to reach 3 wins is the winner!");
rlSync.question("\nPress ENTER to continue\n");
let contProgram;

do {
  game();
  contProgram = promptCont();
  console.clear();
} while (contProgram === 'y' || contProgram === "yes");

console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");