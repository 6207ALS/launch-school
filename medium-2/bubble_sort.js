/*
The bubbleSort function takes an array as an argument and sorts that array using
the bubble sort algorithm. The sorting is done "in-place" — that is, the 
function mutates the array. It is assumed that the array contains at least
two elements.

The function places the bubble sorting algorithm into a do-while loop, stopping 
it if the loop did not swap any elements of the array. For each while loop, 
a for loop iterates over each index of the arr. If the value at the current 
index is greater than the value at the next index, the function swaps the two 
values.
*/

function bubbleSort (arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] < arr[i + 1])) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
  return arr; 
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