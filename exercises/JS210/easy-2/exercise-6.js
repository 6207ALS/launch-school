// JS210 Exercises | Easy 2
// Exercise 6 - Madlibs

/*
PROBLEM:
Build a program that prompts the user for a noun, a verb, an adverb, and an
adjective and return a madlib story using the provided data.

Input: 4 Strings
Output: String

Rules:
  - Prompt user for noun, verb, adverb, and adjective
  - Use "Do you [verb] your [adjective][noun][adverb]? That's hilarious!"
    as the madlib template.
  - Do not worry about input validation.
  - Do not worry about input formatting

TEST CASE:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!

REQUIREMENTS:
  - Prompt user for each piece of data individually.
  - Do not worry about input validation.
  - Inject user input into madlib template
    - String interpolation
    - Log resulting string to the console

DATA STRUCTURE:
  STRING

ALGORITHM:
  LET NOUN = PROMPT USER FOR NOUN
  LET VERB = PROMPT USER FOR VERB
  LET ADJECTIVE = PROMPT USER FOR ADJECTIVE
  LET ADVERB = PROMPT USER FOR ADVERB

  LOG "Do you [VERB] your [ADJECTIVE][NOUN][ADVERB]? That's hilarious!"
*/

let rlSync = require("readline-sync");

let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adjective = rlSync.question("Enter an adjective: ");
let adverb = rlSync.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);