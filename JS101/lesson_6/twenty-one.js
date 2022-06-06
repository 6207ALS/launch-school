let rlSync = require('readline-sync');

function initializeDeck() {
  let numberValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let faceValues = [
    ["Jack", 10], 
    ["Queen", 10], 
    ["King", 10], 
    ["Ace", 11]
  ]; 
  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let deck = {};

  suits.forEach(suit => deck[suit] = numberValues.concat(faceValues));

  return deck;
}

function deal(deck, hand, times) {
  let suits = Object.keys(deck);
  let randSuit;
  let randSuitCards;
  let randSuitIndex;
  let randCard;

  for (let i = 0; i < times; i++) {
    randSuit = suits[Math.floor(Math.random() * suits.length)]; // random suit
    randSuitCards = deck[randSuit]; // list of random suit's cards
    randSuitIndex = Math.floor(Math.random() * randSuitCards.length); // random index in list
    randCard = randSuitCards[randSuitIndex]; // random card
    cardInfo = [];

    cardInfo.push(randSuit);

    if (typeof(randCard) === 'number') { // if number card
      cardInfo.push(deck[randSuit].splice(randSuitIndex, 1)[0]); 
      hand.push(cardInfo);
    } else if (typeof(randCard) === 'object') { // if face card
      cardInfo.push(deck[randSuit].splice(randSuitIndex, 1)[0][0]);
      hand.push(cardInfo);
    }
  }
}

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function playerTurn(playerHand) {
  let hitOptions = ['h', 'hit'];
  let stayOptions = ['s', 'stay'];
  let options = hitOptions.concat(stayOptions);
  let userInput;

  do {
    prompt("PLAYER'S TURN\nHit or Stay?\n==>");
    userInput = rlSync().question().trim().toLowerCase();
  } while (!options.includes(userInput))

  return hitOptions.includes(userInput)? 'hit': 'stay';
}

function handTotal(hand) {

}

function includesAce(hand) {

}

let deck = initializeDeck();
let playerHand = [];
let dealerHand = [];

deal(deck, playerHand, 2);
deal(deck, dealerHand, 2);

console.log(playerHand);
console.log(dealerHand);