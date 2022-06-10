/*

*/

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

function prompt(msg) {
  console.log(`\n==> ${msg}`);
}

function initializeDeck() {
  let deck = {};
  let suitCards = NUMBER_VALUES.concat(Object.entries(FACE_VALUES));

  for (let suit of SUITS) {
    deck[suit] = suitCards;
    shuffle(deck[suit]);
  }

  return deck;
}

function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
  }
}

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

function busted(hand) {
  return handTotal(hand) > POINTS["goal"];
}

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

function dealerTurn(dealerHand, deck) {
  while (handTotal(dealerHand) < POINTS["minimum"]) {
    deal(dealerHand, deck, 1);
  }
}

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

function displayWinner(playerHand, dealerHand, score) {
  let playerScore = handTotal(playerHand);
  let dealerScore = handTotal(dealerHand);
  let roundScore = `PLAYER'S SCORE: ${playerScore} | DEALER'S SCORE: ${dealerScore}`;
  roundScore = "|    " + roundScore + "    |";
  let result = decideWinner(playerScore, dealerScore);
  let spaceLength = Math.floor((roundScore.length - result["message"].length) / 2);
  let space = " ".repeat(spaceLength);

  displayScore(score);
  showHands(dealerHand, playerHand, false);
  console.log("");
  console.log("-".repeat(roundScore.length));
  console.log(roundScore);
  console.log("-".repeat(roundScore.length));
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