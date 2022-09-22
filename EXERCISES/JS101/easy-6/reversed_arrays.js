/*
The reverse function takes an array as an argument and reverses its elements in 
place. The function mutates the elements of the passed array rather than 
returning a new one. 

The function iterates over the first half of the array. Each element is 
reassigned the value its mirrored element in the second half of the array 
carries. For arrays with an odd number of elements, the function does not 
iterate over the middle element as there is no need to switch it. 
*/

function reverse (list) {
  let halfIndex = Math.floor(list.length / 2) - 1;

  for (let i = 0; i < halfIndex; i++) {
    temp = list[i];
    list[i] = list[(list.length - i) - 1];
    list[(list.length - i) - 1] = temp;
  }
  return list;
} 

// test cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true