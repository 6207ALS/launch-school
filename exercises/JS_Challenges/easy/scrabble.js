/*
PROBLEM:
  Given a word, determine its Scrabble score, which is determined by the following
  chart:

  Letter	                        Value
  A, E, I, O, U, L, N, R, S, T	  1
  D, G	                          2
  B, C, M, P	                    3
  F, H, V, W, Y	                  4
  K	                              5
  J, X	                          8
  Q, Z	                          10

EXAMPLES:

  CABBAGE: 10 POINTS
  3 points for C
  1 point for each A (there are two)
  3 points for B (there are two)
  2 points for G
  1 point for E

DATA STRUCTURE:
  - Dealing with string
  - Use an object to store key-value pairs for scores

ALGORITHM:
  CREATE OBJECT, EACH KEY BEING A LETTER AND THE VALUE BEING ITS CORRESPONDING
  SCORE

  REMOVE EVERY NON-ALPHABETICAL CHARACTER IN WORD

  LET SCORE = 0;

  FOR EVERY LETTER OF WORD
    SCORE += CHART[LETTER]
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static SCORE_RULES = {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1,
    "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, 
    "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10, 
  }

  score() {
    if (typeof this.word !== 'string') return 0;

    let letters = this.word.toUpperCase().replaceAll(/[^A-Z]/ig, "").split("");
    let score = 0;

    letters.forEach(letter => {
      score += Scrabble.SCORE_RULES[letter];
    });

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;