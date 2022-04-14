/*
The star function displays an 8-pointed star in an NxN grid, where N is an odd 
integer that is supplied as an argument. The smallest star the function handles 
is a 7x7 grid (i.e., when N is 7).

The function determines several factors when logging each line to the console:
a) the number of spaces needed at the beginning b) the number of spaces needed
inbetween each asterisk and c) if it needs to log the middle portion of the 
star. All three factors depend on the size of the star as well as which line 
the function is currently on.    
*/

function star (num) {
  let frontSpace = 0;
  let gaps = Math.floor(num / 2) - 1; 
  let increment = -1;
  let middlePortion = Math.floor(num / 2);
  
  for (let i = 0; i < num; i++) {
    if (i !== middlePortion) {
      console.log(" ".repeat(frontSpace)+ ('*' + " ".repeat(gaps)).repeat(3));
    } else {
      console.log("*".repeat(num));
      increment = 1;
    }
    gaps += increment;
    frontSpace -= increment;
  }
}

// test cases
console.log(star(7))
console.log(star(9))
console.log(star(11))
console.log(star(13))