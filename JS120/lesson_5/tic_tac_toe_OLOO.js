/*
tic_tac_toe_classes.js is the classic tic-tac-toe game against a computer.
The code was written using object-oriented programming, specifically with
the OLOO pattern (Objects Linked to Other Objects). During the player's turn,
the user is prompted to mark off an available square from a 3x3 grid. During
the computer's turn, the computer will randomly mark one of the available
squares. The first player to achieve a row (3 marks in a row, column, or
diagonal line) wins the game.
*/

let rlSync = require('readline-sync');

let Square = {
  UNUSED_SQUARE: " ",
  HUMAN_MARKER: "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  }
};

let Board = {
  init() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = Object.create(Square).init();
    }
    return this;
  },

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
  },

  displayWithClear() {
    console.clear();
    console.log();
    this.display();
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
};

let Player = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  }
};

let Human = Object.create(Player);

Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
};

let Computer = Object.create(Player);

Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
};

let TTTGame = {
  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
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
    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  },

  displayResults() {
    this.board.displayWithClear();
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  },

  humanMoves() {
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
  },

  computerMoves() {
    let choices = this.board.unusedSquares();
    let randomInt = Math.floor(Math.random() * choices.length);
    this.board.markSquareAt(choices[randomInt], this.computer.getMarker());
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  WINNING_COMBINATIONS: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["3", "5", "7"],
    ["1", "5", "9"],
  ],

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.WINNING_COMBINATIONS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
};

let game = Object.create(TTTGame).init();
game.play();