// LS215: String and Text Processing
// Practice Problems: Strings

let rlSync = require("readline-sync");

// Q1
let firstName = "Allen";
let lastName = "Laurent";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Q2
console.log(firstName.concat(lastName));


// Q3
console.log(fullName.split(" "));


// Q4
let language = "JavaScript";
let idx = language.indexOf("S");
console.log(idx);


// Q5
let charCode = language.charCodeAt(idx);
console.log(charCode);


// Q6
console.log(String.fromCharCode(charCode));


// Q7
console.log(language.lastIndexOf("a"));


// Q8
let a = "a";
let b = "b";
console.log(a > b);

b = "B";
console.log(a > b);


// Q9
console.log(language.slice(1, 4)); // ava
console.log(language.slice(2, 4)); // va


// Q10
console.log(language.substring(1, 4)); // ava
console.log(language.substring(2, 4)); // va


// Q11
console.log(language.slice(1, -1)); // 'avaScrip'
console.log(language.slice(2, -1)); // 'vaScrip'


// Q12
console.log(language.substring(1, -1)); // 'J'
console.log(language.substring(2, -1)); // 'Ja'


// Q13
let fact1 = "JavaScript is fun";
let fact2 = "Kids like it too";
let compoundSentence = `${fact1} and ${fact2[0].toLowerCase() + fact2.slice(1)}`;
console.log(compoundSentence);


// Q14
console.log(fact1[0], fact2[0]);


// Q15
let pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf('14'));


// Q16
/*
SyntaxError, period is interpreted as a decimal instead of method separator. 
let boxNumber = 356.toString(); 
*/
let boxNumber = 356..toString();
console.log(boxNumber);

boxNumber = (356).toString();
console.log(boxNumber);


// Q17
boxNumber = Number.parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);


// Q18
let userInput = rlSync.question("What is your name? ");
if (userInput.endsWith("!")) {
  console.log(`HELLO ${userInput.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userInput}.`)
}