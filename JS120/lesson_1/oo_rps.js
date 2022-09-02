/*
The oo_rps.js program simulates the Rock-Paper-Scissors-Spock-Lizard game
against the computer. The first player to win 5 rounds is the winner of the
game. The computer is programmed to adjust its next move based on its past moves
and their win/loss rates. Additional features include: history of moves from
both players and tracking score.
*/

let rlSync = require('readline-sync');


// main object to play the game
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  rounds: 1,
  roundWinner: null,

  // display start messages
  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Rock, Paper, Scissors, Spock, Lizard!");
    console.log("The first to reach 5 wins is the winner!\n");
    this.continue();
  },

  // display exit messages
  displayGoodbyeMessage() {
    console.log(
      "Thanks for playing Rock, Paper, Scissors, Spock, Lizard. Goodbye!"
    );
  },

  // prompt user to continue to next sequence
  continue() {
    rlSync.question("\nPress ENTER to continue\n");
  },

  // display current game's score of both players
  displayScore() {
    let hScore = this.human.score;
    let cScore = this.computer.score;
    let rounds = String(this.rounds).padStart(2, "0");
    let hHistory = this.human.history.join(", ");
    let cHistory = this.computer.history.join(", ");

    console.clear();
    console.log("~ HISTORY ~");
    console.log(`YOU: [${hHistory}]\nCOMPUTER: [${cHistory}]\n`);
    console.log("~ SCORE ~");
    console.log(`ROUND ${rounds} - YOU: ${hScore} | COMPUTER: ${cScore}`);
  },

  // determine round winner by comparing human and computer's moves
  determineWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let combos = combinations();

    if (combos["winning"][humanMove].includes(computerMove)) {
      this.roundWinner = 'human';
    } else if (combos["losing"][humanMove].includes(computerMove)) {
      this.roundWinner = 'computer';
    } else {
      this.roundWinner = 'tie';
    }
  },

  // output winner and moves chosen from both players
  displayWinner() {
    let hMove = this.human.move.toUpperCase();
    let cMove = this.computer.move.toUpperCase();
    let movesResults = `You chose: ${hMove} | Computer chose: ${cMove}`;
    let winnerMessage;

    switch (this.roundWinner) {
      case 'human':
        winnerMessage = "YOU WIN THE ROUND!";
        break;
      case 'computer':
        winnerMessage = "COMPUTER WINS THE ROUND!";
        break;
      case 'tie':
        winnerMessage = ("IT'S A TIE!");
        break;
    }

    this.formatRoundResults(movesResults, winnerMessage);
  },

  // display end of round results as a formatted strings
  formatRoundResults(moves, winner) {
    let space = " ".repeat(Math.floor((moves.length - winner.length) / 2));
    console.log(`\n${moves}`);
    console.log("-".repeat(moves.length));
    console.log(space + winner + space);
    console.log("-".repeat(moves.length));
  },

  // update history of moves of player and computer
  // update score based on round winner
  updateScore() {
    this.rounds++;
    switch (this.roundWinner) {
      case "tie":
        break;
      case "human":
        this.human.score++;
        break;
      case "computer":
        this.computer.score++;
        break;
    }
  },

  updateHistory() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    this.human.history.push(humanMove.toUpperCase());
    this.computer.history.push(computerMove.toUpperCase());

    if (this.human.history.length > 8) {
      this.human.history.shift();
      this.computer.history.shift();
    }
  },

  // display the final winner of the game based on the players' scores.
  displayFinalWinner(hScore, cScore) {
    console.clear();
    console.log(`FINAL SCORE | HUMAN: ${hScore} | COMPUTER: ${cScore}`);

    if (hScore === 5) {
      console.log("CONGRATULATIONS! YOU WON THE GAME!");
    } else {
      console.log("SORRY! COMPUTER WON THE GAME!");
    }
  },

  // reset human and computer score to 0
  // reset round number back to 1
  resetScore() {
    this.human.score = 0;
    this.computer.score = 0;
    this.rounds = 1;
  },

  // prompt user to play again and return Boolean value indicating if user
  // wishes to continue
  playAgain() {
    let options = ['y', 'n', 'yes', 'no'];
    let userInput;

    while (!options.includes(userInput)) {
      userInput = rlSync.question("\nWould you like to play again? (y/n) ");
      userInput = userInput.toLowerCase().replaceAll(" ", "");
    }

    return ['y', 'yes'].includes(userInput);
  },

  // play games of R-P-S-SP-L until user chooses to exit
  playGame() {
    while (true) {
      this.resetScore();
      this.displayWelcomeMessage();
      while (this.human.score < 5 && this.computer.score < 5) {
        this.playRound();
      }
      this.displayFinalWinner(this.human.score, this.computer.score);
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },

  playRound() {
    this.displayScore();
    this.human.choose();
    this.computer.choose();
    this.determineWinner();
    this.displayWinner();
    this.updateScore();
    this.updateHistory();
    this.computer.adjustWeight(this.roundWinner);
    this.continue();
  }
};

// list of winning combinations for every move for human
function winningCombinations() {
  return {
    winning: {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['lizard', 'paper'],
      spock: ['scissors', 'rock'],
      lizard: ['spock', 'paper']
    }
  };
}

// list of losing combinations for every move for human
function losingCombinations() {
  return {
    losing: {
      rock: ['paper', 'spock'],
      paper: ['scissors', 'lizard'],
      scissors: ['rock', 'spock'],
      spock: ['paper', 'lizard'],
      lizard: ['scissors', 'rock']
    }
  };
}

// combine losing and winning combinations into single object
function combinations() {
  let winning = winningCombinations();
  let losing = losingCombinations();

  return Object.assign(winning, losing);
}

// create computer object (merged with playerObject)
function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    move: null,
    weight: {
      rock: 1,
      paper: 1,
      scissors: 1,
      spock: 1,
      lizard: 1
    },

    // adjust weight based on the winner of the round and the computer's move
    adjustWeight(roundWinner) {
      if (roundWinner === 'human') {
        this.decreaseWeight(this.move);
      } else if (roundWinner === "computer") {
        this.increaseWeight(this.move);
      }
    },

    // decrement the weight of every move (besides the computer's move) by 1
    // which, effectively, increases the weight of the computer's move
    increaseWeight(computerMove) {
      let weightKeys = Object.keys(this.weight);
      let weight = this.weight;

      for (let key of weightKeys) {
        if (key !== computerMove && weight[key] > 1) {
          weight[key]--;
        }
      }
    },

    // increment the weight of every move (besides the computer's move) by 1
    // which, effectively, decreases the weight of the computer's move
    decreaseWeight(computerMove) {
      let weightKeys = Object.keys(this.weight);
      for (let key of weightKeys) {
        if (key !== computerMove) {
          this.weight[key]++;
        }
      }
    },

    // choose one of five moves, with consideration of their weight
    choose() {
      let choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
      let weightedChoices = [];

      // push each move into 'weightedChoices', x number of times, based on
      // the given move's weight
      for (let choice of choices) {
        for (let idx = 0; idx < this.weight[choice]; idx++) {
          weightedChoices.push(choice);
        }
      }

      // randomly select an element in 'weightedChoices' list
      let randomIndex = Math.floor(Math.random() * weightedChoices.length);
      this.move = weightedChoices[randomIndex];
    }
  };

  return Object.assign(playerObject, computerObject);
}

// create human object (merged with playerObject)
function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    move: null,

    // prompt user to choose one of five moves
    // user can also enter the shorthand version of any move
    choose() {
      const CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
      let shortHands = {
        r: "rock",
        p: "paper",
        s: "scissors",
        sp: "spock",
        l: "lizard"
      };
      let shortHandKeys = Object.keys(shortHands);
      let choice;

      while (!CHOICES.concat(shortHandKeys).includes(choice)) {
        choice = rlSync.question(
          "\n=> Choose one: ROCK, PAPER, SCISSORS, SPOCK, LIZARD" +
          " (R, P, S, SP, L)\n"
        ).toLowerCase().replaceAll(" ", "");
      }

      if (shortHandKeys.includes(choice)) choice = shortHands[choice];
      this.move = choice;
    }
  };

  return Object.assign(playerObject, humanObject);
}

// create object with common states from both human and computer object
function createPlayer() {
  return {
    history: [],
    score: 0,
    move: null,
  };
}

RPSGame.playGame();