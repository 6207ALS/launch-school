// Function determines if number is even or odd by dividing by 2.
// If there is no remainder, the number is even.

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(4);