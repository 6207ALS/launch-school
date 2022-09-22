/*
In continuation of exercise "String and Text Processing: Staggered Caps 
(Part 2)"...
The staggeredCase function is a modified function from the previous exercise 
and ignores non-alphabetic characters when determining whether it should 
uppercase or lowercase each letter. The non-alphabetic characters are still 
included in the return value, but don't count when toggling the desired case.

The function initializes an array of the string's characters and a counter 
variable. It then iterates over each character of the string, incrementing the
counter by 1 if the character is alphabetical. If the character is alphabetical 
and the counter is an even number, the character is reassigned to its capital 
letter. The array of staggering cases is returned as a single string. 
*/

function staggeredCase (string) {
  let stringChars = string.toLowerCase().split('');
  let count = 0;
  for (let i = 0; i < stringChars.length; i++) {
    if (/[a-z]/ig.test(stringChars[i])) {
      if (count % 2 === 0) {
        stringChars[i] = stringChars[i].toUpperCase();
        count++;
      } else {
        count++;
      }
    }
  }
  return stringChars.join('');
}

// test cases
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);