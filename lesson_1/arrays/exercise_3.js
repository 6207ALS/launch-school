let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// The loop iterates over each nested array within the myArray array. Using the
// .forEach method, we iterate over each element (of each nested array) and 
// log the number to the console if it is an even value. 

for (let i = 0; i < myArray.length; i++) {
  myArray[i].forEach(num => {
    if (num % 2 === 0) console.log(num);
  });
}