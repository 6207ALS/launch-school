/*
twenty-one.js is a program for users to play a game of Twenty-One against a
computer. The objective of Twenty-One is to try to get as close to 21 as
possible without going over. If you go over 21, it's a bust, and you lose. The
first player to win 5 rounds wins the game.
*/

// required files and constants
let rlSync = require('readline-sync');
const POINTS = {goal: 21, minimum: 17};
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const NUMBER_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_VALUES = {
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 11
};

// log a formatted message to console
function prompt(msg) {
  console.log(`\n==> ${msg}`);
}

// Construct an object of four properties: Hearts, Diamonds, Clubs, and Spades.
// Each property's value is an array of 13 cards, creating a total of 52 cards.
function initializeDeck() {
  let deck = {};
  let suitCards = NUMBER_VALUES.concat(Object.entries(FACE_VALUES));

  for (let suit of SUITS) {
    deck[suit] = suitCards;
    shuffle(deck[suit]);
  }

  return deck;
}

// shuffles the elements of a given array using the Fisher-Yates shuffle method.
function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
  }
}

// pops a random card from the deck and adds it to the specified hand, x number
// of times
function deal(hand, deck, times) {
  let randSuit;
  let randCard;
  let cardInfo;

  for (let time = 0; time < times; time++) {
    randSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
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

// continuously prompts user to either "hit" or "stay" until player busts
function playerTurn(playerHand, dealerHand, deck, score) {
  let playerInput;

  while (!busted(playerHand)) {
    displayScore(score);
    showHands(dealerHand, playerHand, true);
    playerInput = playerChoice();

    if (playerInput === 'hit') {
      deal(playerHand, deck, 1);
    } else if (playerInput === 'stay') {
      return;
    }
  }
}

// determines if a hand's total is greater than 21
function busted(hand) {
  return handTotal(hand) > POINTS["goal"];
}

/*
Determines a hand's total by calculating the sum of the cards' values. The
function first finds the sum of non-Ace cards and then adds the values of each
Ace card, accordingly.
*/
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

// displays the dealer's hands and player's hands. If the third argument is
// a boolean value of "true", the dealer's second card is not revealed.
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

// continuously prompts the player to "hit" or "stay" until a valid input is
// provided
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

// dealer continuously deals a card into its hand until it reaches a minimum
// number of points
function dealerTurn(dealerHand, deck) {
  while (handTotal(dealerHand) < POINTS["minimum"]) {
    deal(dealerHand, deck, 1);
  }
}

// determines the results of the round by reviewing scores.
function decideWinner(playerScore, dealerScore) {
  if (playerScore > POINTS["goal"]) {
    return "PLAYER_BUSTED";
  } else if (dealerScore > POINTS["goal"]) {
    return "DEALER_BUSTED";
  } else if (playerScore > dealerScore) {
    return "PLAYER";
  } else if (dealerScore > playerScore) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

// returns a message based on the results of the round
function roundMessage(winner) {
  switch (winner) {
    case "PLAYER_BUSTED":
      return "PLAYER BUSTED! DEALER WINS THE ROUND!";
    case "DEALER_BUSTED":
      return "DEALER BUSTED! PLAYER WINS THE ROUND!";
    case "PLAYER":
      return "PLAYER WINS THE ROUND!";
    case "DEALER":
      return "DEALER WINS THE ROUND!";
    case "TIE":
      return "IT'S A TIE!";
  }

  return null;
}

// displays the scores and winner of the round as a formatted message.
function displayWinner(playerHand, dealerHand, score) {
  let pTotal = handTotal(playerHand);
  let dTotal = handTotal(dealerHand);
  let roundScore = `PLAYER'S SCORE: ${pTotal} | DEALER'S SCORE: ${dTotal}`;
  roundScore = "|    " + roundScore + "    |";
  let winner = decideWinner(pTotal, dTotal);
  let result = roundMessage(winner);
  let spaceLength = Math.floor((roundScore.length - result.length) / 2);
  let space = " ".repeat(spaceLength);

  displayScore(score);
  showHands(dealerHand, playerHand, false);
  console.log("\n" + "-".repeat(roundScore.length));
  console.log(roundScore);
  console.log("-".repeat(roundScore.length));
  console.log(space + result + "\n");

  return winner;
}

// Play a round of Twenty-One. Each round consists of a standard 52-card deck,
// the player's turn, and the dealer's turn. The return value is the results of
// the round.
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

// continuously prompt user to play again until a valid input is provided.
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

// displays the game's score (number of rounds each player has won)
function displayScore (score) {
  let pScore = score["player"];
  let dScore = score["dealer"];

  console.clear();
  console.log(`SCORE | PLAYER: ${pScore} | DEALER: ${dScore}\n`);
}

// continously play rounds of Twenty-One until a player reaches five wins.
function playGame() {
  let result;
  let score = {
    player: 0,
    dealer: 0
  };

  while (score["player"] < 5 && score["dealer"] < 5) {
    result = playRound(score);

    if (result === "PLAYER" || result === "DEALER_BUSTED") {
      score["player"]++;
    } else if (result === "DEALER" || result === "PLAYER_BUSTED") {
      score["dealer"]++;
    }
    rlSync.question("PRESS ENTER TO CONTINUE\n");
  }

  displayEndGameMessages(score);
  rlSync.question("PRESS ENTER TO FINISH\n");
}

// display the winner of the game (first to reach 5 wins)
function displayEndGameMessages(score) {
  console.clear();
  displayScore(score);
  if (score["player"] === 5) {
    console.log("CONGRATULATIONS! PLAYER WINS THE GAME!");
  } else {
    console.log("DEALER WINS THE GAME!");
  }
}

// main loop
do {
  playGame();
} while (playAgain());

// exit message
console.clear();
console.log("Thanks for playing Twenty-One!");