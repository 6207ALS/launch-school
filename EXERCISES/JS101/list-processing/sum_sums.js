/*
The sumOfSums function takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. The examples below allow for a better
explanation. 

The function iterates over each number of the given array. For each number, 
a subarray from indices 0 to the current index is created. The .reduce() method
is used to find the sum of all of the values in the created subarray. The value 
is added to the sum. 
*/

function sumOfSums (arr) {
  let sum = 0;
  arr.forEach((num, index) =>{
    let slice = arr.slice(0, index + 1);
    sum += (slice.reduce((acc, num) => acc + num));
  });

  return sum;
}

// test cases
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35