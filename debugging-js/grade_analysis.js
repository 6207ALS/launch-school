/*
The median function's bug was calling the .sort() method without passing a 
compare function to define the sort order. If .sort() is called without a 
function, the array elements are converted to strings and sorted according to 
each character's Unicode value. To sort number values, the compare function 
takes two elements and sorts their order through the return value. In our case,
we use (a - b). If (a - b) is greater than 0, b is sorted before a. If the value
is less than 0, a is sorted before b. If the value is 0, nothing is changed. 
*/

function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort((a, b) => a - b);

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);