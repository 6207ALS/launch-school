/*
The triangle function takes the lengths of the three sides of a triangle as 
arguments and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

The function first places the given arguments into a sorted array, from least
to greatest values. If any of the numbers are less than or equal to zero, 
the string "invalid" is returned. If the sum of the two lowest numbers is not
greater than the greatest number, "invalid" is also returned. If side1 is equal
to side2, and side2 is equal to side3, the triangle is an equilateral. If not
all sides are equal, but two of the three are, then the triangle must be an 
isosceles triangle. Anything else would result in a scalene triangle. 
*/

function triangle (a, b, c) {
  let [side1, side2, side3] = [a, b, c].sort((x, y) => x - y)

  for (length of [side1, side2, side3]) {
    if (length <= 0) return "invalid";
  }

  if (!(side1 + side2 > side3)) return "invalid";
  
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// test cases
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"