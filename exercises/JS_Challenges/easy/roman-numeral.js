/*
PROBLEM:
  Given a number in decimal, return its roman numeral equivalent

EXAMPLES:

  I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

  1 -> I
  2 -> II
  3 -> III

  4 -> IV
  5 -> V
  6 -> VI
  7 -> VII
  8 -> VIII

  9 -> IX
  10 -> X
  11 -> XI
  12 -> XII

  27 -> XXVII
  48 -> XLIII
  59 -> LIX
  93 -> XCIII

  141 -> CXLI
  402 -> CDII
  911 -> CMXI

  1024 -> MXXIV
  3000 -> MMM

NOTES:
  There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.

  - any case where 4 or 9 is involved, we must place (I/X/C before the number)

DATA STRUCTURE:
  Object to hold to key/value pairs for roman/decimal
  Array to hold roman numerals for each decimal of number

ALGORITHM:
  LET TOCONVERT = GIVEN NUMBER
  LET VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  LET ROMAN_NUMERAL = ""

  FOR EVERY NUMBER IN VALUES
    DETERMINE HOW MANY TIMES THE NUMBER GOES INTO TOCONVERT (DIVIDE)
      FOR EX: IF TOCONVERT IS 435, and CURRENT NUMBER IS 100, 4 * 100 = 400
    ADD THE NUMBER'S ROMAN EQUIVALENT 'NUMBER' TIMES TO THE STRING

    REASSIGN TOCONVERT TO THE REMAINDER (435 - 400 = 35)

  RETURN ROMAN_NUMERAL
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static CHART = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }

  toRoman() {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let number = this.number;
    let romanNumeral = "";

    values.forEach(value => {
      let multiplier = Math.floor(number / value);
      let remainder = number % value;

      romanNumeral += RomanNumeral.CHART[value].repeat(multiplier);
      number = remainder;
    });

    return romanNumeral;
  }
}

module.exports = RomanNumeral;