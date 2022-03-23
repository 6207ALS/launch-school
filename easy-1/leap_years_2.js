/*
In continuation of Easy 1: Leap Years (Part 1)...
The British Empire adopted the Gregorian Calendar in 1752, which was a leap 
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, 
leap years occur in any year that is evenly divisible by 4. 

The isLeapYear function checks if the provided year is before/after 1752. Under 
the differing conditions, it will then determine if the year is a leap year. 
*/

function isLeapYear(number) {
  if (number >= 1752) {
    return (number % 400 === 0) || (number % 4 === 0 && number % 100 !== 0);
  } else {
    return number % 4 === 0;
  }
}

// test cases
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true