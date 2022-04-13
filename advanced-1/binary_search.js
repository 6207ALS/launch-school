/*
The binarySearch function takes a sorted array and a searchItem as arguments, 
and returns the index of the searchItem if found, or -1 otherwise — using the 
binary search algorithm. 

The function determines the lower and upper bounds of the array to search for 
given searchItem. If the middle element within the boundary is the searchItem, 
the function returns its index. If the searchItem's value is less than that of 
the middle element, the upper boundary is set to the left of the middle element.
If the searchItems's value is greater than that of the middle element, the lower 
boundary is set to the right of middle element. The process is repeated until 
the middle element is the searchItem or the lower boundary surpasses the upper
boundary (which the function returns -1).
*/

function binarySearch (array, searchItem) {
  let low = 0;
  let high = (array.length - 1);
  let mid;

  do {
    mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === searchItem) {
      return mid;
    } else if (searchItem > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  } while (low <= high)
  
  return -1;
}

// test cases
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6