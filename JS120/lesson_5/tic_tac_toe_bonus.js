/*
tic_tac_toe_bonus.js is the classic Tic-Tac-Toe game against a computer. The
program is written with object-oriented programming, specifically with classes
(as implemented in ECMAScript 6). Features include:
  - Take turns
    - Players take turns going first every round
  - Track Score
    - Keep track of number of rounds and both player's wins
  - Computer Defense and Offense AI
    - Computer will block user's potential winning moves.
    - Computer will choose a winning move, given the opportunity.

RULES:
  - Players (User vs. Computer) take turns placing their mark on a 3 x 3 grid.
  - The first player to place 3 marks in a row (row, column, or diagonal) wins
    the round.
      - If the entire grid is filled without a winner, the round is determined
        as a tie.
  - The first player to win three rounds wins the game.
*/

let rlSync = require('readline-sync');


// individual square objects used to construct the 3x3 grid board
class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

// board object used to play the Tic-Tac-Toe game
class Board {
  constructor() {
    this.threatLocation = null;
    this.squares = {};
    this.reset();
  }

  // removes all marks on the 3 x 3 grid
  reset() {
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[String(counter)] = new Square();
    }
  }

  // displays current state of the board
  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  // clears the console, then displays current state of the board
  displayWithClear() {
    console.clear();
    console.log("\n");
    this.display();
  }

  // places the player's mark at a specified square on the grid
  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  // returns numbers of all unmarked squares on the current board
  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  // returns Boolean indicating if all squares on the board are used
  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  }

  // iterates through a row on the board (row, column, or diagonal) and returns
  // the number of squares in the row that have the given player's mark
  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    }, this);

    return markers.length;
  }

  // iterates through a row on the board and returns a Boolean indicating if
  // the row has a winning move
  rowIsThreat(player, row) {
    return (this.countMarkersFor(player, row) === 2) &&
      (row.some(key => this.squares[key].isUnused()));
  }

  // returns a Boolean indicating if the center square is open
  centerIsOpen() {
    return this.squares["5"].isUnused();
  }
}

// supertype for Human and Computer type objects, provides common properties
// needed for both subtypes
class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = 0;
  }

  getMarker() {
    return this.marker;
  }
}

// object for the User's player
class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

// object for the Computer's player
class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

// main object to play the Tic-Tac-Toe game
class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.rounds = 1;
    this.roundWinner = undefined;
    this.firstPlayer = this.human;
    this.currPlayer = this.firstPlayer;
  }

  // list of every winning combination for the board
  static WINNING_COMBINATIONS = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["3", "5", "7"],
    ["1", "5", "9"],
  ];

  // play games of Tic-Tac-Toe until User chooses to exit
  playGame() {
    this.displayWelcomeMessage();

    do {
      this.resetScore();
      while (!this.gameOver()) {
        this.board.reset();
        this.playRound();
      }
      this.displayGameResults();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  // play one round of Tic-Tac-Toe
  playRound() {
    while (true) {
      this.displayScore();
      this.board.display();

      this.playerMoves(this.currPlayer);
      this.toggleCurrentPlayer();
      if (this.roundOver()) break;
    }

    this.displayRoundResults();
    this.updateScore();
    this.toggleFirstPlayer();
  }

  // prompt user to play another game of Tic-Tac-Toe
  playAgain() {
    let userInput;

    do {
      userInput = rlSync.question(
        "\nWould you like to play again? (y/n)\n"
      ).trim().replaceAll(" ", "").toLowerCase();
    } while (!['yes', 'no', 'y', 'n'].includes(userInput));

    return ['yes', 'y'].includes(userInput);
  }

  // prompt user to continue to next sequence
  continue() {
    rlSync.question("Press ENTER to continue\n");
  }

  // display current score and round
  displayScore() {
    let humanS = this.human.wins;
    let computerS = this.computer.wins;
    let rounds = String(this.rounds).padStart(2, "0");

    console.clear();
    console.log(`ROUND ${rounds} | PLAYER: ${humanS} | COMPUTER: ${computerS}`);
  }

  // display welcome messages at start of program
  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    this.continue();
  }

  // display exit messages at end of program
  displayGoodbyeMessage() {
    console.clear();
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  // display the results of the round
  displayRoundResults() {
    this.displayScore();
    this.board.display();
    if (this.isWinner(this.human)) {
      console.log("You win the round! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
    this.continue();
  }

  // display the results of the game
  displayGameResults() {
    let rounds = this.rounds;
    let humanS = this.human.wins;
    let computerS = this.computer.wins;

    this.displayScore();
    this.board.display();
    console.log(`FINAL SCORE | ROUNDS: ${rounds} | PLAYER WINS: ${humanS} | COMPUTER WINS: ${computerS}`);
    if (this.human.wins === 3) {
      console.log("\nCONGRATULATIONS! YOU WON THE GAME!");
    } else if (this.computer.wins === 3) {
      console.log("\nSORRY! COMPUTER WINS THE GAME!");
    }
  }

  // Like the Array.prototype.join method, but also accepts a 'lastDelimiter'
  // argument which inserts a different delimiter for the last item of the array
  joinOr(arr, delimiter, lastDelimiter = "") {
    if (arr.length === 1) return String(arr[0]);

    arr = arr.map((element, index) => {
      if (index !== arr.length - 1) {
        return element + delimiter;
      } else {
        return `${lastDelimiter} ${element}`;
      }
    });

    return arr.join(' ');
  }

  // User or Computer makes a move, determined by the 'currentPlayer' property
  // of the TTTGame object
  playerMoves(currentPlayer) {
    if (currentPlayer instanceof Human) {
      this.humanMoves();
    } else if (currentPlayer instanceof Computer) {
      this.computerMoves();
    }
  }

  // switches the 'firstPlayer' property between the User and Computer
  toggleFirstPlayer() {
    let firstPlayer = this.firstPlayer;
    this.firstPlayer = firstPlayer === this.human ? this.computer : this.human;
    this.currPlayer = this.firstPlayer;
  }

  // switches the 'currentPlayer' property between the User and Computer
  toggleCurrentPlayer() {
    let currPlayer = this.currPlayer;
    this.currPlayer = currPlayer === this.human ? this.computer : this.human;
  }

  // prompts User to choose a square, places User's mark on specified square
  humanMoves() {
    let choice;

    while (true) {
      let availableChoices = this.board.unusedSquares();
      choice = rlSync.question(
        `Choose a square (${this.joinOr(availableChoices, ',', "or")}): `
      ).trim().replaceAll(" ", "");

      if (availableChoices.includes(choice)) break;
      console.log("Sorry, invalid input.\n");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  // makes Computer's move, based on the current state of the board
  computerMoves() {
    if (this.hasThreat(this.computer)) {
      this.setThreatLocation(this.computer);
      this.computerAttack();
    } else if (this.hasThreat(this.human)) {
      this.setThreatLocation(this.human);
      this.computerDefend();
    } else if (this.board.centerIsOpen()) {
      this.computerTakeCenter();
    } else {
      this.computerRandom();
    }
  }

  // places Computer's mark at a square with Computer's winning move
  computerAttack() {
    this.board.markSquareAt(this.board.threatLocation, Square.COMPUTER_MARKER);
  }

  // places Computer's mark at a square with User's winning move
  computerDefend() {
    this.board.markSquareAt(this.board.threatLocation, Square.COMPUTER_MARKER);
  }

  // places Computer's mark at center square of board
  computerTakeCenter() {
    this.board.markSquareAt("5", Square.COMPUTER_MARKER);
  }

  // randomly places Computer's mark at one of the available squares
  computerRandom() {
    let choices = this.board.unusedSquares();
    let randomInt = Math.floor(Math.random() * choices.length);
    this.board.markSquareAt(choices[randomInt], this.computer.getMarker());
  }

  // determines if the round is over by checking for a winner or full board
  roundOver() {
    return this.board.isFull() || this.someoneWon();
  }

  // determines if the game is over by checking if either player reached 3 wins
  gameOver() {
    return this.human.wins === 3 || this.computer.wins === 3;
  }

  // determines if a player won the round
  someoneWon() {
    this.determineWinner();
    return this.roundWinner;
  }

  // sets the 'roundWinner' property to the winner of the round
  determineWinner() {
    if (this.isWinner(this.human)) {
      this.roundWinner = "PLAYER";
    } else if (this.isWinner(this.computer)) {
      this.roundWinner = "COMPUTER";
    } else {
      this.roundWinner = undefined;
    }
  }

  // finds a potential winning square and sets the 'threatLocation' property
  // to it's location
  setThreatLocation(player) {
    TTTGame.WINNING_COMBINATIONS.forEach(row => {
      if (this.board.rowIsThreat(player, row)) {
        row.forEach(key => {
          if (this.board.squares[key].isUnused()) {
            this.board.threatLocation = key;
          }
        });
      }
    });
  }

  // determines if the board has a potential winning move for a given player
  hasThreat(player) {
    return TTTGame.WINNING_COMBINATIONS.some(row => {
      return this.board.rowIsThreat(player, row);
    });
  }

  // determines if a given player won the round
  isWinner(player) {
    return TTTGame.WINNING_COMBINATIONS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  // updates number of rounds and the winner's number of wins
  updateScore() {
    if (this.roundWinner === "PLAYER") {
      this.human.wins++;
    } else if (this.roundWinner === "COMPUTER") {
      this.computer.wins++;
    }
    this.rounds++;
  }

  // resets number of rounds and both player's number of wins
  resetScore() {
    this.human.wins = 0;
    this.computer.wins = 0;
    this.rounds = 1;
  }
}

// main
let game = new TTTGame();
game.playGame();