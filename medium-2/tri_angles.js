/*
The function triangle takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

The function places the given angles into an array and sorts them, from least
to greatest value. If any of the angles are less than or equal to 0, the 
triangle is invalid. If the sum of the angles does not equal to 180, the 
triangle is not valid. If the triangle passes both tests, the function proceeds
to determine which triangle it is. If one of the angles is 90, the triangle is a
right triangle. If the greatest angle of the triangle is less than 90, then the 
triangle must be acute. If the triangle is anything else, it must be obtuse. 
*/

function triangle (ang1, ang2, ang3) {
  let angles = [ang1, ang2, ang3].sort((x, y) => x - y);

  for (degree of angles) {
    if (degree <= 0) return "invalid";
  }

  if (angles.reduce((sum, element) => sum + element) !== 180) return "invalid";
  
  if (angles.includes(90)) {
    return "right";
  } else if (angles[2] < 90) {
    return "acute";
  } else {
    return "obtuse";
  }
}

// test cases
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"