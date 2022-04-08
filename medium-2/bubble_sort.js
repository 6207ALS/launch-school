/*
The bubbleSort function takes an array as an argument and sorts that array using
the bubble sort algorithm. The sorting is done "in-place" — that is, the 
function mutates the array. It is assumed that the array contains at least
two elements.

The function places the bubble sorting algorithm into a while-loop, stopping it
when the array is sorted from least to greatest values. For each while-loop, a 
for-loop iterates over each index of the arr. If the value at the current index
is greater than the value at the next index, the function swaps the two values.

The isSorted function is called at every while-loop to check if the array is 
sorted. It iterates over each element of the array; if the value is greater than
the following value, false is returned. If it iterates over the entire array, 
the array is sorted, returning true. 
*/

function bubbleSort (arr) {
  while (!isSorted(arr)) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] < arr[i + 1])) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr; 
}

function isSorted (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] < arr[i + 1])) return false;
  }
  return true;
}

// test cases
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]