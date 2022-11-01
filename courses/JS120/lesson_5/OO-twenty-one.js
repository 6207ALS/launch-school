/*
OO-twenty-one.js is the classic card game "Twenty-One" against a computer. The
program is written with object-oriented programming, specifically with classes
(as implemented by ECMAScript 6).

The objective of Twenty-One is to try to get as close to 21 as possible without
going over. For every round:
  - Both players, User and Dealer, are dealt a hand of two random cards
  - During your turn, you have the option to "hit" or "stay"
    - If you choose "hit", you are dealt another card from the deck
      - As long as your hand total is less than 21, you may keep "hitting"
    - If you choose "stay", you finish your turn and wait for the dealer to
      play their turn
  - If either player's hand total becomes over 21, it's a "bust", and that
    player automatically loses the round.
  - If both players choose stay, the player with a higher hand total wins the
    round

  - The User is granted $5 at the beginning of the game.
    - They lose $1 every loss and gain $1 every win
    - The game ends if the User runs out of money OR reaches $10.
*/

let rlSync = require('readline-sync');


// Supertype for classes "User" and "Dealer"
// Provides common properties needed for both subtypes.
class Player {
  constructor() {
    this.hand = [];
    this.handTotal = 0;
    this.move = undefined;
  }

  // removes all card objects in player's "hand" property
  resetHand() {
    this.hand = [];
    this.handTotal = 0;
  }

  // sets "hand" property to player's current hand total
  determineHandTotal() {
    let total = 0;
    let numOfAces = 0;

    for (let card of this.hand) {
      if (card.rank === "Ace") {
        numOfAces++;
      } else if (["Jack", "Queen", "King"].includes(card.rank)) {
        total += 10;
      } else {
        total += card.rank;
      }
    }

    for (let currentAce = 0; currentAce < numOfAces; currentAce++) {
      total += ((total + 11 <= 21) ? 11 : 1);
    }

    this.handTotal = total;
  }

  // returns string of player's current hand
  returnHand() {
    return this.hand.map(card => {
      return `${card}`;
    }).join(", ");
  }

  // returns Boolean indicating if player's "move" property is "stay"
  choseStay() {
    return this.move === "stay";
  }

  // returns Boolean indicating if player's "move" property is "hit"
  choseHit() {
    return this.move === "hit";
  }

  // returns Boolean indicating if player's hand total is greater than 21
  busted() {
    return this.handTotal > 21;
  }
}


// class for the Dealer's player object
class Dealer extends Player {
  constructor() {
    super();
  }

  // returns string of player's hand with second card hidden
  returnHandHidden() {
    return this.hand.map((card, index) => {
      if (index !== 1) {
        return `${card}`;
      } else {
        return "HIDDEN CARD";
      }
    }).join(", ");
  }

  // choose next move based on current hand's total
  chooseMove() {
    if (this.handTotal >= 17) {
      this.move = "stay";
    } else {
      this.move = "hit";
    }
  }
}


// class for the User's player object
class User extends Player {
  constructor() {
    super();
    this.cash = 5;
  }

  // prompts the User to "hit" or "stay"
  // sets "move" property to User's choice
  chooseMove() {
    let choice;

    do {
      choice = rlSync.question(
        "\n=> Would you like to [ HIT ] or [ STAY ] ?\n"
      ).replaceAll(" ", "").toLowerCase();
    } while (!['hit', 'stay', 'h', 's'].includes(choice));

    if (["hit", "h"].includes(choice)) {
      this.move = "hit";
    } else {
      this.move = "stay";
    }
  }

  // returns Boolean indicating if player has either no money or too much money
  hasCashSituation() {
    return this.outOfMoney() || this.tooMuchMoney();
  }

  // returns Boolean indicating if player has no money ($0.00)
  outOfMoney() {
    return this.cash <= 0;
  }

  // returns Boolean indicating if player has too much money ($10.00)
  tooMuchMoney() {
    return this.cash >= 10;
  }
}


// class to construct individual card objects of a standard 52-card deck
class Card {
  static SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
  static FACES = ["Jack", "Queen", "King", "Ace"];
  static RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  // returns string of card's rank and suit
  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}


// class to construct a standard 52-card deck object
class Deck {
  constructor() {
    this.initialize();
    this.shuffle();
  }

  // resets Deck's cards back to standard 52-card deck
  // randomizes the cards' order by shuffling them
  resetCards() {
    this.initialize();
    this.shuffle();
  }

  // sets Deck's current deck to standard 52-card deck
  initialize() {
    this.cards = [];
    let card;

    for (let suit of Card.SUITS) {
      for (let rank of (Card.RANKS).concat(Card.FACES)) {
        card = new Card(rank, suit);
        this.cards.push(card);
      }
    }
  }

  // shuffles the "cards" property's array of card objects using the
  // Fisher-Yates shuffle method.
  shuffle() {
    let cards = this.cards;
    let currIdx;
    let randIdx;

    for (let idx = this.cards.length - 1; idx > 0; idx--) {
      currIdx = idx;
      randIdx = Math.floor(Math.random() * (idx + 1));
      [cards[currIdx], cards[randIdx]] = [cards[randIdx], cards[currIdx]];
    }
  }
}


// main object to play the game of Twenty-One
class Game {
  constructor() {
    this.user = new User();
    this.dealer = new Dealer();
    this.deck = new Deck();
    this.results = undefined;
    this.winner = undefined;
    this.rounds = 1;
  }

  // plays rounds of Twenty-One until player (a) runs out of money (b) reaches
  // $10 or (c) chooses to exit
  playGame() {
    this.displayWelcomeMessages();

    do {
      this.reset();
      this.playRound();
      this.continue();
    } while (!this.user.hasCashSituation() && this.playAgain());

    this.displayExitMessages();
  }

  // plays a single round of Twenty-One and displays results
  playRound() {
    this.dealHands();
    this.displayScore();
    this.displayHands();

    this.playerTurn(this.user);
    if (!this.user.busted()) this.playerTurn(this.dealer);

    this.determineResults();
    this.updateScore();
    this.displayResults();
  }

  // returns Boolean indicating if User wishes to play again
  playAgain() {
    this.displayScore();
    this.displayHands();
    this.displayResults();
    return this.promptPlayAgain();
  }

  // prompts user to play again
  promptPlayAgain() {
    let userInput;

    do {
      userInput = rlSync.question(
        "Would you like to play again? (y/n)\n"
      ).trim().replaceAll(" ", "").toLowerCase();
    } while (!['yes', 'no', 'y', 'n'].includes(userInput));

    return ['yes', 'y'].includes(userInput);
  }

  // prompts user to continue to next sequence
  continue() {
    rlSync.question("Press ENTER to continue\n");
  }

  // displays welcome messages at start of program
  displayWelcomeMessages() {
    console.clear();
    console.log("Welcome to Twenty-One!");
    rlSync.question("Press ENTER to play!\n");
  }

  // displays exit messages at end of program
  displayExitMessages() {
    console.clear();
    if (this.user.outOfMoney()) {
      console.log("You ran out of money!");
    } else if (this.user.tooMuchMoney()) {
      console.log("Whew! You earned a lot today!");
    }

    console.log("Thanks for playing Twenty-one!");
  }

  // executes sequences of a player's turn
  playerTurn(player) {
    do {
      this.displayScore();
      this.displayHands();
      this.makeMove(player);
      player.determineHandTotal();
    } while (!player.busted() && !player.choseStay());
  }

  // prompts user to make a move, next sequence is determined by user's decision
  makeMove(player) {
    player.chooseMove();
    if (player.choseHit()) this.dealCards(player, 1);
  }

  // deal both players (User and Dealer) a hand of two cards from the deck
  dealHands() {
    this.dealCards(this.user, 2);
    this.dealCards(this.dealer, 2);
  }

  // deal "x" number of card(s) to the player's hand
  dealCards(player, numOfCards) {
    let card;

    for (let times = 0; times < numOfCards; times++) {
      card = this.takeCardFrom(this.deck.cards);
      player.hand.push(card);
    }
  }

  // remove and return a card from the deck
  takeCardFrom(deck) {
    return deck.shift();
  }

  // display the current number of rounds and User's amount of cash
  displayScore() {
    let rounds = String(this.rounds).padStart(2, "0");

    console.clear();
    console.log(`ROUND ${rounds} | CASH AMOUNT: $${this.user.cash}.00`);
  }

  // display dealer's hand (hidden) and user's hand (unhidden)
  displayHands() {
    console.log();
    console.log(`DEALER CARDS: ${this.dealer.returnHandHidden()}`);
    console.log(`PLAYER CARDS: ${this.user.returnHand()}`);
  }

  // display dealer's hand (unhidden) and user's hand (unhidden)
  revealHands() {
    console.log();
    console.log(`DEALER CARDS: ${this.dealer.returnHand()}`);
    console.log(`PLAYER CARDS: ${this.user.returnHand()}`);
  }

  // set Game's "results" property based on outcome of the players' turns
  determineResults() {
    this.user.determineHandTotal();
    this.dealer.determineHandTotal();

    let userTotal = this.user.handTotal;
    let dealerTotal = this.dealer.handTotal;

    if (userTotal > 21) {
      this.results = "USER_BUSTED";
    } else if (dealerTotal > 21) {
      this.results = "DEALER_BUSTED";
    } else if (userTotal < dealerTotal) {
      this.results = "DEALER_WON";
    } else if (userTotal > dealerTotal) {
      this.results = "USER_WON";
    } else {
      this.results = undefined;
    }
  }

  // update "score" and user's "cash" property based on round's results
  updateScore() {
    this.rounds++;

    if (["USER_WON", "DEALER_BUSTED"].includes(this.results)) {
      this.user.cash++;
    } else if (["DEALER_WON", "USER_BUSTED"].includes(this.results)) {
      this.user.cash--;
    }
  }

  // display results of the round
  displayResults() {
    this.displayScore();
    this.revealHands();
    this.displayResultsFormatted();
  }

  // determines the 'end of round' message based on results
  roundMessage(results) {
    switch (results) {
      case "USER_BUSTED":
        return "USER BUSTED! DEALER WINS THE ROUND!";
      case "DEALER_BUSTED":
        return "DEALER BUSTED! PLAYER WINS THE ROUND!";
      case "DEALER_WON":
        return "DEALER WINS THE ROUND!";
      case "USER_WON":
        return "USER WINS THE ROUND!";
      default:
        return "IT'S A TIE!";
    }
  }

  // displays 'end of round' messages as a formatted string
  displayResultsFormatted() {
    let pTotal = this.user.handTotal;
    let dTotal = this.dealer.handTotal;
    let roundScore = `PLAYER'S SCORE: ${pTotal} | DEALER'S SCORE: ${dTotal}`;
    roundScore = "|    " + roundScore + "    |";
    let roundMsg = this.roundMessage(this.results);
    let spaceLength = Math.floor((roundScore.length - roundMsg.length) / 2);
    let space = " ".repeat(spaceLength);

    console.log("\n" + "-".repeat(roundScore.length));
    console.log(roundScore);
    console.log("-".repeat(roundScore.length));
    console.log(space + roundMsg + "\n");
  }

  // resets user and dealer's hands and deck's cards
  reset() {
    this.user.resetHand();
    this.dealer.resetHand();
    this.deck.resetCards();
  }
}

// main
let game = new Game();
game.playGame();