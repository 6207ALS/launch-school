
function evenOrOdd(num) {
  if (Number.isInteger(num)) {      // checks if argument is a valid number
    if (num % 2 === 0) {            // checks if number is evenly divisible by 2
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("Invalid input.");
    return;
  }
}

// test cases
evenOrOdd('apple');
evenOrOdd(2);
evenOrOdd(3);