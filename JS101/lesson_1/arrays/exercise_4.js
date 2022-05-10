let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// The evenOrOdd variable uses the .map() method on myArray to iterate over
// each element. If the element is an even value, the corresponding element
// in evenOrOdd's array is set to 'even'. If not, it is set as 'odd'. 

let evenOrOdd = myArray.map(num => {
  return (num % 2) === 0 ? 'even': 'odd'
});

console.log(evenOrOdd);


/*
A struggle I had with using the arrow function was adding curly braces after 
the arrow. Doing so would result in an array of undefined values. It turns out
if I used curly braces my arrow function would require the 'return' keyword, 
which I forgot to add. I would either have to add the return keyword to my 
arrow function or omit the curly braces. I chose the former option. 
*/