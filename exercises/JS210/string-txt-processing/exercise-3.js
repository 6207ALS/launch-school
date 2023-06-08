// JS210: Small Problems - String and Text Processing
// Exercise 3

function letterCaseCount(string) {
  return string.split("").reduce((count, letter) => {
    if (/[a-z]/.test(letter)) {
      count.lowercase++;
    } else if (/[A-Z]/.test(letter)) {
      count.uppercase++;
    } else {
      count.neither++;
    }
    return count;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }