/*
PROBLEM:
Write a program that, given a natural number and a set of one or more other 
numbers, can find the sum of all the multiples of the numbers in the set that 
are less than the first number. If the set of numbers is not given, use a 
default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 
that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. 
The sum of these multiples is 78.

EXAMPLES:

SumOfMultiples.to(1) -> 0

SumOfMultiples.to(10) -> 23
3 + 5 + 6 + 9

DATA STRUCTURE:
  - working with numbers
  - Array to contain all multiples

ALGORITHM:

  LET MULTIPLES = PROVIDED SET? [...SET] : [3, 5];
  LET SUM = 0

  FROM 0 TO NUM (EXCLUDING)
    IF ANY NUMBER IN MULTIPLES CAN EVENLY BE DIVIDED BY CURRENT NUM
      ADD CURRENT NUM TO SUM
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length === 0 ? [3, 5] : multiples;
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }

  to(limit) {
    let multiples = this.multiples;
    let sum = 0;

    for (let i = 1; i < limit; i++) {
      if (multiples.some(multiple => i % multiple === 0)) {
        sum += i;
      }
    }

    return sum;
  }
}

module.exports = SumOfMultiples;