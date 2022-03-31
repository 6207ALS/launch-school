/*
The countOccurrences function counts the number of occurrences of each element 
in a given array. Once counted, the function logs each element alongside the 
number of occurrences. Words are considered case sensitive e.g. 
("suv" !== "SUV").
*/

function countOccurrences (arr) {
  let list = {};
  for (element of arr) {
    if (!(element in list)) {
      list[element] = 0;
    }
    list[element] += 1;
  }

  for (element in list) {
    console.log(`${element} => ${list[element]}`);
  }
}

// test case
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);