const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard (board) {
  console.clear();
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}  `);
  console.log('     |     |     ');
  console.log('');
}

function initializeBoard () {
  let board = {};

  for (let i = 1; i <= 9; i++) {
    board[i] = ' ';
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares (board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr (emptySquares, delimiter=', ', finalDelimiter='or ') {
  switch (emptySquares.length) {
    case 0:
      return '';
    case 1:
      return emptySquares[0];
    case 2:
      return emptySquares[0] + finalDelimiter + emptySquares[1];
    default:
      return emptySquares.slice(0, emptySquares.length - 1)
                         .join(delimiter)
                         .concat(delimiter, finalDelimiter)
                         .concat(emptySquares[emptySquares.length - 1]);
  }
}

function playerChoosesSquare (board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = rlSync.question().trim();

    if (emptySquares(board).includes(square)) {
      board[square] = PLAYER_MARKER;
      break;
    } else {
      prompt("Invalid square");
    }
  }
}

function computerChoosesSquare (board) {
  let threat = computerDefense(board);
  let opportunity = computerOffense(board);
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  
  if (opportunity) {
    board[opportunity] = COMPUTER_MARKER;
  } else if (threat) {
    board[threat] = COMPUTER_MARKER;
  } else if (board[5] === INITIAL_MARKER) {
    board[5] = COMPUTER_MARKER;
  } else {
    board[emptySquares(board)[randomIndex]] = COMPUTER_MARKER;
  }
}

function computerDefense (board) {
  let threats = [
    [1, 2, 3], [2, 3, 1], [1, 3, 2],  // rows
    [4, 5, 6], [5, 6, 4], [4, 6, 5],
    [7, 8, 9], [8, 9, 7], [7, 9, 8],

    [1, 4, 7], [4, 7, 1], [1, 7, 4],  // columns
    [2, 5, 8], [5, 8, 2], [2, 8, 5],
    [3, 6, 9], [6, 9, 3], [3, 9, 6],
   
    [7, 5, 3], [5, 3, 7], [7, 3, 5],  // diagonals
    [1, 5, 9], [5, 9, 1], [1, 9, 5]
  ];

  for (let threat = 0; threat < threats.length; threat++) {
    let [sq1, sq2, sq3] = threats[threat];

    if (
      board[sq1] === PLAYER_MARKER && 
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    } 
  }
  
  return null;
}

function computerOffense (board) {
  let opportunities = [
    [1, 2, 3], [2, 3, 1], [1, 3, 2],  // rows
    [4, 5, 6], [5, 6, 4], [4, 6, 5],
    [7, 8, 9], [8, 9, 7], [7, 9, 8],

    [1, 4, 7], [4, 7, 1], [1, 7, 4],  // columns
    [2, 5, 8], [5, 8, 2], [2, 8, 5],
    [3, 6, 9], [6, 9, 3], [3, 9, 6],
   
    [7, 5, 3], [5, 3, 7], [7, 3, 5],  // diagonals
    [1, 5, 9], [5, 9, 1], [1, 9, 5]
  ];

  for (let opportunity = 0; opportunity < opportunities.length; opportunity++) {
    let [sq1, sq2, sq3] = opportunities[opportunity];

    if (
      board[sq1] === COMPUTER_MARKER && 
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    } 
  }
  
  return null;
}

function boardFull (board) {
  return emptySquares(board).length === 0;
}

function someoneWon (board) {
  return !!detectWinner(board);
}

function detectWinner (board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns  
    [1, 5, 9], [3, 5, 7]              // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return "PLAYER";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "COMPUTER";
    }
  }

  return null;
}

function displayWinner (board) {
  if (someoneWon(board)) {
    console.log(`${detectWinner(board)} WON!`);
  } else if (boardFull(board)) {
    console.log("It's a tie!")
  }
}

function playRound() {
  let board = initializeBoard();
  displayBoard(board);

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);
  displayWinner(board);
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 5 && computerWins < 5) {
    playRound();
  }
}
  
function promptContinue() {
  let inputOptions = ['y', 'n', 'yes', 'no'];
  let input;

  do {
    prompt("Play again? (y/n)");
    input = rlSync.question().trim().toLowerCase();
  } while (!inputOptions.includes(input))

  return input;
}

let contGame;

do {
  playRound();
  contGame = promptContinue();
} while (['y', 'yes'].includes(contGame))

console.log('Thanks for playing Tic-Tac-Toe!');