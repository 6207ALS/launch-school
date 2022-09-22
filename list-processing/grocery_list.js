/*
The buyFruit function takes a grocery list in a two-dimensional array and 
returns a one-dimensional array. Each element in the grocery list contains a 
fruit name and a number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears the number of times equal 
to its desired quantity.

The function iterates over each nested array in the given array. For "desired
quantity" number of times, the fruit name is added to the returned list.  
*/

function buyFruit (arr) {
  let list = [];
  arr.forEach(nestedArr => {
    for (let i = 0; i < nestedArr[1]; i++) {
      list.push(nestedArr[0]);
    }
  });
  return list;
}

// test case
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]