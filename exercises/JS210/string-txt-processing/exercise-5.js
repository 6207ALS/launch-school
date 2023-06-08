// JS210: Small Problems - String and Text Processing
// Exercise 5

function swapCase(str) {
  return str.split("").map(letter => {
    if (isUpperCase(letter)) {
      return letter.toLowerCase();
    } else if (isLowerCase(letter)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join("");
}

function isUpperCase(letter) {
  return /[A-Z]/.test(letter);
}

function isLowerCase(letter) {
  return /[a-z]/.test(letter);
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"