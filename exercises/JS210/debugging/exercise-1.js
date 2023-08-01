// JS210 Exercises | Debugging
// Exercise 1 - Word Ladder

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

/*
This behavior is because of JavaScript's "Automatic Semicolon Insertion", 
which results in the first three lines being interpreted as:

let ladder = ''['head', ... ].forEach()

Because the statement on line 1 is not explicitly terminated with a semicolon, 
the array on line 3 is not parsed as an array, but as an ACCESSOR on the empty 
string. Since the empty string does not contain such a property, the result is 
undefined, which causes forEach to raise an error.
*/