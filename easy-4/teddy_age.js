/*
The program teddy_age.js simply logs a random number to the console to represent
Teddy's age. Teddy's age will always be a number between 20 and 120 (inclusive). 

The function Math.random() generates a random number from 0 to a provided
number. To generate a number within a range (20 - 120), the program uses 
following formula: Math.random * (max - min + 1) + min. For Teddy's age, the 
formula first generates a random number from 0 - 100 (inclusive). It then adds 
20 (the minimum) to the number. The formula is capable of generating a minimum 
value (0 + 20 = 20) and also generating a maximum value (100 + 20 = 100). 
*/

let age = Math.floor(Math.random() * (120 - 20 + 1) + 20);
console.log(`Teddy is ${age} years old!`);




