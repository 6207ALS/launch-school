// JS210: Small Problems - String and Text Processing
// Exercise 7

function staggeredCase(str) {
  let needUpper = false;

  return str.split("").map(letter => {
    if (/[^a-z]/i.test(letter)) return letter;
    
    needUpper = !needUpper;
    if (needUpper) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));