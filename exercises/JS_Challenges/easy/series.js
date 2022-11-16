/*
PROBLEM:
  Given a string of digits and a number, return all possible consecutive 
  substrings with a length of the number. If the given number is greater than 
  the length of the string, throw an error.

EXAMPLES:

  "01234", 3
  012
  123
  234

  "01234", 4
  0123
  1234

DATA STRUCTURE:
  - Working with strings, substrings
  - Array to contain all possible substrings

ALGORITHM:

  IF GIVEN NUMBER IS GREATER THAN LENGTH OF STRING
    THROW ERROR
    
  LET SUBSTRINGS = []

  FOR LOOP FROM 0 TO (LENGTH OF STRING - NUMBER)
    LET DIGITS = []
    EXTRACT 'SUBSTRING FROM CURRENT INDEX TO 'NUMBER' CHARACTERS' TO SUBSTRINGS

    FOR EACH CHAR OF SUBSTRING
      PUSH CHAR TO DIGITS AS NUMBER

    PUSH DIGITS TO SUBSTRING

  RETURN SUBSTRINGS
*/

class Series {
  constructor(string) {
    this.string = string;
  }

  slices(num) {
    if (num > this.string.length) throw new Error;

    let slices = [];

    for (let i = 0; i <= (this.string.length - num); i++) {
      let digits = [];
      let substring = this.string.slice(i, i + num);
      for (let char of substring) {
        digits.push(Number(char));
      }

      slices.push(digits);
    }

    return slices;
  }
}

module.exports = Series;