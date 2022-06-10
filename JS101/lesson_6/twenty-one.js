/*
twenty-one.js is a program of the game Twenty-One. The first to reach five wins,
computer vs. user, is determined as the winner. Each round is played as follows:
each player has a turn

*/

let rlSync = require('readline-sync');

// properties of a standard 52-card deck
const POINTS = {goal: 21, minimum: 17};
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const NUMBER_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_VALUES = {
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 11
};

function prompt(msg) {
  console.log(`\n==> ${msg}`);
}

// declare an object that represents a standard deck. Each suit is assigned 13 
// cards, for a total of 52 cards. 
function initializeDeck() {
  let deck = {};
  let suitCards = NUMBER_VALUES.concat(Object.entries(FACE_VALUES));

  for (let suit of SUITS) {
    deck[suit] = suitCards;
    shuffle(deck[suit]);
  }

  return deck;
}

// shuffles an array of cards using the Fisher-Yates shuffle method. 
function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
  }
}

// pops a card from the deck and pushes the card's information into the given 
// hand. 
function deal(hand, deck, times) {
  let randSuit;
  let randCard;
  let cardInfo;

  for (let time = 0; time < times; time++) {
    randSuit = SUITS[Math.floor(Math.random() * SUITS.length)];                       // random card
    randCard = deck[randSuit].pop();
    cardInfo = [];

    if (typeof (randCard) === 'number') { // if number card
      cardInfo.push(randCard);
    } else if (typeof (randCard) === 'object') { // if face card
      cardInfo.push(randCard[0]);
    }

    cardInfo.push(randSuit);
    hand.push(cardInfo);
  }
}

// player is given the option to hit or stay until their hand busts. If the user
// chooses hit, a card is dealed to their hand. If the user chooses stay, the 
// player's turn ends. 
function playerTurn(playerHand, dealerHand, deck, score) {
  let playerInput;

  while (!busted(playerHand)) {
    displayScore(score)
    showHands(dealerHand, playerHand, true);
    playerInput = playerChoice();

    if (playerInput === 'hit') {
      deal(playerHand, deck, 1);
    } else if (playerInput === 'stay') {
      return;
    }
  }
}

// determines if a given hand is busted. A busted hand is a hand with a total 
// value greater than 21.  
function busted(hand) {
  return handTotal(hand) > POINTS["goal"];
}

// calculates the total value of a given hand. The function accounts for ace 
// cards, which can have a value of 1 or 11, depending on if the value of 11 
// causes a busted hand. 
function handTotal(hand) {
  let nonAceCards = hand.filter(card => card[0] !== 'Ace');
  let aceCards = hand.filter(card => card[0] === 'Ace');

  let total = nonAceCards.reduce((acc, card) => {
    if (typeof (card[0]) === 'number') {
      return acc + card[0];
    } else {
      return acc + FACE_VALUES[card[0]];
    }
  }, 0);

  total += aceCards.reduce((acc, _) => {
    if (total + 11 > POINTS["goal"]) {
      return acc + 1;
    } else {
      return acc + 11;
    }
  }, 0);

  return total;
}

// displays the player's hand and dealer's hand. If the third argument is true, 
// the dealer's second card is hidden. 
function showHands(dealerHand, playerHand, hidden) {

  let dealerCards = dealerHand.map((card, index) => {
    if (hidden && index === 1) {
      return "UNKNOWN CARD";
    } else {
      return card.join(' of ');
    }
  }).join(', ');

  let playerCards = playerHand.map(card => card.join(' of ')).join(', ');

  console.log(`Dealer has: ${dealerCards}`);
  console.log(`You have: ${playerCards}`);
}

// prompts the user to hit or stay. It continously prompts the user for a valid
// input if not given one.
function playerChoice() {
  let hitOptions = ['h', 'hit'];
  let stayOptions = ['s', 'stay'];
  let options = hitOptions.concat(stayOptions);
  let userInput;

  do {
    prompt("PLAYER'S TURN \nHit or Stay?");
    userInput = rlSync.question().trim().toLowerCase();
  } while (!options.includes(userInput));

  return hitOptions.includes(userInput) ? 'hit' : 'stay';
}

// dealer continues to deal a card to its hand until its hand total is at least
// 17. 
function dealerTurn(dealerHand, deck) {
  while (handTotal(dealerHand) < POINTS["minimum"]) {
    deal(dealerHand, deck, 1);
  }
}

// determines the winner of the two hands based on their scores. If either 
// player busts, the other player wins. If neither busts, the player with the 
// higher score wins. 
function decideWinner(playerScore, dealerScore) {
  let result = {
    message: undefined,
    winner: undefined,
  };

  if (playerScore > POINTS["goal"]) {
    result["message"] = "PLAYER BUSTED! DEALER WINS ROUND!";
    result["winner"] = "dealer";
  } else if (dealerScore > POINTS["goal"]) {
    result["message"] = "DEALER BUSTED! PLAYER WINS ROUND!";
    result["winner"] = "player";
  } else if (playerScore > dealerScore) {
    result["message"] = "PLAYER WINS ROUND!";
    result["winner"] = "player";
  } else if (dealerScore > playerScore) {
    result["message"] = "DEALER WINS ROUND!";
    result["winner"] = "dealer";
  } else {
    result["message"] = "IT'S A TIE!";
    result["winner"] = null;
  }

  return result;
}

// displays a formatted message of the winner, along with the players' scores. 
function displayWinner(playerHand, dealerHand, score) {
  let pScore = handTotal(playerHand);
  let dScore = handTotal(dealerHand);
  let board = `PLAYER'S SCORE: ${pScore} | DEALER'S SCORE: ${dScore}`;
  board = "|    " + board + "    |";
  let result = decideWinner(pScore, dScore);
  let gapLength = Math.floor((board.length - result["message"].length) / 2);
  let space = " ".repeat(gapLength);

  displayScore(score);
  showHands(dealerHand, playerHand, false);
  console.log("");
  console.log("-".repeat(board.length));
  console.log(board);
  console.log("-".repeat(board.length));
  console.log(space + result["message"]);
  console.log("");

  return result["winner"];
}

function playRound(score) {
  let deck = initializeDeck();
  let playerHand = [];
  let dealerHand = [];

  deal(playerHand, deck, 2);
  deal(dealerHand, deck, 2);

  playerTurn(playerHand, dealerHand, deck, score);
  if (busted(playerHand)) return displayWinner(playerHand, dealerHand, score);

  dealerTurn(dealerHand, deck);
  if (busted(dealerHand)) return displayWinner(playerHand, dealerHand, score);

  return displayWinner(playerHand, dealerHand, score);
}

function playAgain() {
  let contOptions = ['y', 'yes'];
  let quitOptions = ['n', 'no'];
  let options = contOptions.concat(quitOptions);
  let userInput;

  do {
    console.clear();
    prompt('Play Again? (y/n)');
    userInput = rlSync.question().trim().toLowerCase();
  } while (!options.includes(userInput));

  return contOptions.includes(userInput);
}

function displayScore (score) {
  console.clear();
  console.log(`SCORE | PLAYER: ${score["player"]} | DEALER: ${score["dealer"]}\n`);
}

function playGame() {
  let winner;
  let score = {
    player: 0,
    dealer: 0
  };

  while (score["player"] < 5 && score["dealer"] < 5) {
    winner = playRound(score);

    if (winner === "player") {
      score["player"]++;
    } else if (winner === "dealer") {
      score["dealer"]++;
    }
    rlSync.question("PRESS ENTER TO CONTINUE");
  }

  console.clear();
  if (score["player"] === 5) {
    console.log("CONGRATULATIONS! PLAYER WINS THE GAME!");
  } else {
    console.log("SORRY! DEALER WINS THE GAME!");
  }

  rlSync.question("PRESS ENTER TO FINISH");
  
}

do {
  playGame();
} while (playAgain());

console.clear();
console.log("Thanks for playing Twenty-One!");