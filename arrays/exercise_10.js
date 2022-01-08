// A simple exercise to change the value of an element within a nested array

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;    // changes the 6 to 606

console.log(arr);