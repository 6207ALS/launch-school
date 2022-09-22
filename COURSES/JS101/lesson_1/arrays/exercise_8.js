// The oddLengths function uses the reduce method to iterate over a given array
// and select the elements with an odd length value. It returns an array of 
// those values. 

function oddLengths(arr) {
  let oddValues = arr.reduce(function(accumulator, element) {
    if (element.length % 2 === 1) {         // determines if element's length is odd
      accumulator.push(element.length);     // pushes it to the array accumulator
    }
    return accumulator;                     // returns the accumulator for next element
  }, []);                                   // initial accumulator

  return oddValues;
}

// test case

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


/*
My struggle with the callback function was that I forgot to include the 'return 
accumulator' statement, it only appended the element length to the accumulator. 
Which meant on the second invocation of the callback function, nothing was 
passed for the accumulator argument.  
*/