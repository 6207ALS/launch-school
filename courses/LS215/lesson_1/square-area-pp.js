// LS215: List Processing and Functional Abstractions 
// Practice Problem: Total Square Area

// Q1
function totalArea(rectangles) {
  let totalArea = rectangles.reduce((total, rectangle) => {
    total += rectangle[0] * rectangle[1];
    return total;
  }, 0);

  return totalArea;
}

let rectangles1 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles1));    // 141


// Q2
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(square => square[0] * square[1]);

  return areas.reduce((acc, val) => acc + val);
}

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles2));    // 121