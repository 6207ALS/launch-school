/*
The variable "ladder" was missing a semicolon after its string literal. For 
this reason, the program threw "TypeError: Cannot read property 'forEach' of 
undefined". While it may seem like the .forEach method was reading the array,
it was reading both the string literal as well as the array literal.  
*/

let ladder = '';  // fixed

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail