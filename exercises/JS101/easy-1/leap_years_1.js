/*
The function isLeapYear determines if a given year is considered a leap year.
A leap year is one that is evenly divisible by 4. If the year is also divisible
by 100, it is an exception, unless it is also divisible by 400. 

For instance, the year 2100 is divisible by 4. It is also divisible by 100, but 
not evenly divisible by 400. Thus, it is not considered a leap year. 
*/

function isLeapYear(number) {
  return (number % 400 === 0) || (number % 4 === 0 && number % 100 !== 0);
}

// test cases
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true