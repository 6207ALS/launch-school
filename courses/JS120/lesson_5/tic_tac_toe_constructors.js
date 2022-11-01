/*
tic_tac_toe_classes.js is the classic tic-tac-toe game against a computer.
The code was written using object-oriented programming, specifically with
constructors and prototypes (as implemented in JavaScript ES6). During the
player's turn, the user is prompted to mark off an available square from a 3x3
grid. During thecomputer's turn, the computer will randomly mark one of the
available squares. The first player to achieve a row (3 marks in a row, column,
or diagonal line) wins the game.
*/

let rlSync = require('readline-sync');

function Square(marker = Square.UNUSED_SQUARE) {
  this.marker = marker;
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
};

Square.prototype.getMarker = function() {
  return this.marker;
};


function Board() {
  this.squares = {};
  for (let counter = 1; counter <= 9; counter++) {
    this.squares[counter] = new Square();
  }
}

Board.prototype.display = function() {
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
};

Board.prototype.displayWithClear = function() {
  console.clear();
  console.log();
  this.display();
};

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
};

Board.prototype.unusedSquares = function() {
  let keys = Object.keys(this.squares);
  return keys.filter(key => this.squares[key].isUnused());
};

Board.prototype.isFull = function() {
  return this.unusedSquares().length === 0;
};

Board.prototype.countMarkersFor = function(player, keys) {
  let markers = keys.filter(key => {
    return this.squares[key].getMarker() === player.getMarker();
  });

  return markers.length;
};


function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
};


function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;


function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;


function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.prototype.play = function() {
  this.displayWelcomeMessage();
  this.board.display();

  while (true) {
    this.humanMoves();
    if (this.gameOver()) break;

    this.computerMoves();
    if (this.gameOver()) break;

    this.board.displayWithClear();
  }

  this.displayResults();
  this.displayGoodByeMessage();
};

TTTGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log("Welcome to Tic Tac Toe!");
};

TTTGame.prototype.displayGoodByeMessage = function() {
  console.log("Thanks for playing Tic Tac Toe! Goodbye!");
};

TTTGame.prototype.displayResults = function() {
  this.board.displayWithClear();
  if (this.isWinner(this.human)) {
    console.log("You won! Congratulations!");
  } else if (this.isWinner(this.computer)) {
    console.log("I won! I won! Take that, human!");
  } else {
    console.log("A tie game. How boring.");
  }
};

TTTGame.prototype.humanMoves = function() {
  let choice;

  while (true) {
    let availableChoices = this.board.unusedSquares();
    choice = rlSync.question(
      `Choose a square (${availableChoices.join(', ')}): `
    ).trim().replaceAll(" ", "");

    if (availableChoices.includes(choice)) break;

    console.log("Sorry, invalid input.\n");
  }

  this.board.markSquareAt(choice, this.human.getMarker());
};

TTTGame.prototype.computerMoves = function() {
  let choices = this.board.unusedSquares();
  let randomInt = Math.floor(Math.random() * choices.length);
  this.board.markSquareAt(choices[randomInt], this.computer.getMarker());
};

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
};

TTTGame.WINNING_COMBINATIONS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["1", "5", "9"],
];

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
};

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.WINNING_COMBINATIONS.some(row => {
    return this.board.countMarkersFor(player, row) === 3;
  });
};

let game = new TTTGame();
game.play();