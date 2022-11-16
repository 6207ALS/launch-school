/*
PROBLEM:
  Given an octal string as input, return the decimal equivalent. Invalid inputs
  should return octal 0.

  Octal:
  The rightmost digit gets multiplied by 8^0 = 1
  The next digit gets multiplied by 8^1 = 8
  The digit after that gets multiplied by 8^2 = 64
  The digit after that gets multiplied by 8^3 = 512
  ...
  The n'th digit gets multiplied by 8^n-1.
  All of these values are then summed.

EXAMPLES:
    233 # octal
    = 2*8^2 + 3*8^1 + 3*8^0
    = 2*64  + 3*8   + 3*1
    = 128   + 24    + 3
    = 155

DATA STRUCTURE:
  - working with string

ALGORITHM:
  LET SUM = 0;

  FROM INDEX 0 TO END OF OCTAL INPUT
    MULTIPLY OCTAL[INDEX] BY 8 * (LENGTH - INDEX)
    ADD RESULT TO SUM

  RETURN SUM
*/

class Octal {
  constructor(octalString) {
    this.octal = octalString;
  }

  toDecimal() {
    let sum = 0;

    for (let i = 0; i < this.octal.length; i++) {
      let digit = Number(this.octal[i]);
      if (Number.isNaN(digit) || digit >= 8) return 0;
      sum += (digit * (8 ** ((this.octal.length - 1) - i)));
    }

    return sum;
  }
}

console.log(new Octal("1").toDecimal());

module.exports = Octal;