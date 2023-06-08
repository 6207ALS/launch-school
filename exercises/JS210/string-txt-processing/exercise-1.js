// JS210: Small Problems - String and Text Processing
// Exercise 1

function isUppercase(str) {
  for (let letter of str) {
    if (/[^a-z]/i.test(letter)) {
      continue;
    } else if (/[^A-Z]/.test(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true