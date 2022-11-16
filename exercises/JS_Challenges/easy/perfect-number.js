/*
PROBLEM:
  Determine the Aliquot sum of a given number and categorize the number as 
  abundant, perfect, or deficient based on the sum.

  Aliquot Sum: sum of its positive divisors (the numbers that can be evenly 
  divided into the target number with no remainder, excluding the number 
  itself).

  - Perfect: an Aliquot sum that is equal to the original number.
  - Abundant: an Aliquot sum that is greater than the original number.
  - Deficient: an Aliquot sum that is less than the original number.

EXAMPLES: 
  6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

  28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 
  1 + 2 + 4 + 7 + 14 = 28.

  15 is a deficient number since its divisors are 1, 3, and 5 and 
  1 + 3 + 5 = 9 which is less than 15.

  24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 
  1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.

  Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.

DATA STRUCTURE:
    Handling with numbers
    Array to contain the divisors of a given number

ALGORITHM:

  DETERMINE ALIQUOT SUM
    SUM = 0;

    FROM 1 TO (NUM - 1)
      IF GIVEN_NUM % NUM === 0 
        ADD NUM TO SUM

    RETURN SUM
    
  IF ALIQUOT SUM === GIVEN NUM
    RETURN PERFECT
  ELSE IF ALIQUOT SUM > GIVEN NUM
    RETURN ABUNDANT
  ELSE
    RETURN DEFICIENT
*/

class PerfectNumber {
  static classify(num) {
    function aliquotSum(num) {
      let sum = 0;

      for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
      }

      return sum;
    }

    if (num < 0) throw new Error;

    let sumOfDivisors = aliquotSum(num);
    if (sumOfDivisors === num) {
      return "perfect";
    } else if (sumOfDivisors > num) {
      return "abundant";
    } else {
      return "deficient";
    }
  }
}

module.exports = PerfectNumber;