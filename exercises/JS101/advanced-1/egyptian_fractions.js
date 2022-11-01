/*
The egyptian function takes a Rational number as an argument, and returns an 
Array of the denominators that are part of an Egyptian Fraction representation 
of the number. The unegyptian function does the opposite and takes an Array of 
numbers in the same format, and calculates the resulting Rational number.

The egyptian function uses the Greedy Algorithm to determine its sum series.
The function runs a while-loop until the numerator of the rational number 
becomes 0 (meaning the number is 0). For each loop, a fraction, 1 / n, is
subtracted from the rational number. The value of n, starting at 1, increments
by 1 every loop. If subtracting the fraction from the rational number results in
a negative value, the fraction is not part of the series. If it results in a
positive value or 0, the fraction's denominator, n, is recorded. 

The unegyptian takes the array of denominator values and finds the rational 
number with it. For each denominator, a unit fraction (defined as a fraction 
with 1 as the numerator) is created and added to a sum variable. The sum is 
returned at the end. 
*/

let Fraction = require('fraction.js');

function egyptian (rational) {
  let fractions = []
  let n = 1;

  while (rational.n > 0) {
    let fraction = new Fraction (1, n)
    if (rational.sub(fraction).s !== -1) {
      rational = rational.sub(fraction);
      fractions.push(fraction.d);
    }
    n++;
  }

  return fractions;
}

function unegyptian (array) {
  let num = new Fraction(0,1);

  for (denominator of array) {
    num = num.add(1,denominator);
  }

  return num.valueOf();
}

// test cases
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95

console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3