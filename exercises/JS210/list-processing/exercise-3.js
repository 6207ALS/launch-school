// JS210: Small Problems - List Processing
// Exercise 3

function multiplyAllPairs(arr1, arr2) {
  let products = combinationsProducts(arr1, arr2);

  products.sort((a, b) => a - b);

  return products;
}


function combinationsProducts(arr1, arr2) {
  let products = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      products.push(arr1[i] * arr2[j]);
    }
  }

  return products;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])