/*
The following code avoids calling randomNumberBetween() within two locations.
The do/while loop will execute its 'do' body once before checking 
its while conditions. This avoids having to assign the result variable a 
random number on a separate statement. 
*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1,6);
  tries++;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');