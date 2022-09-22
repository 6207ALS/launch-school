let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// loops through myArray and logs to console the current element if it is 
// an even value

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) console.log(myArray[i]);
}