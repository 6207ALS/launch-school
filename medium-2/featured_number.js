/*
A featured number is defined as an odd number that is a multiple of 7, with all 
of its digits occurring exactly once each. The featured function takes an 
integer as an argument and returns the next featured number greater than the 
integer. An error message is returned if there is no next featured number.
NOTE: The largest possible featured number is 9876543201.

The function begins with the next odd integer of the given argument. It then 
checks if every odd number, starting from the given argument, is a featured 
number. Every odd number is checked to see if it is a multiple of 7 and has all 
unique digits. To determine if the number has all unique digits, every unique
digit is extracted to an array and compared to the original number. If they are
the same, the original number has all unique digits.  
*/

function featured (num) {
  (num + 1) % 2 === 1? num += 1: num += 2;

  while (num <= 9876543201) {
    if (num % 7 === 0) {
      digits = String(num).split('');
      if (unique(digits)) return num;
    }
    num += 2;
  }

  return "There is no possible number that fulfills those requirements."
}

function unique (arr) {
  let uniqueChars = []

  for (element of arr) {
    if (!uniqueChars.includes(element)) uniqueChars.push(element);
  }

  return uniqueChars.join('') === arr.join('');
}

// test cases
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."