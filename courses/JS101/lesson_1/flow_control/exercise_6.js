// The following function determines if an array is empty or not. Empty
// array evaluate to falsy, and arrays with elements evaluate to truthy.
// Thus, if we pass an empty array as an argument, the function will log
// "Empty" to the console. 

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

