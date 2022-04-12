/*
The transpose function takes an array of arrays that represents a 3x3 matrix and
returns the transpose of the matrix. The transpose of a 3x3 matrix is the matrix
that results from exchanging the rows and columns of the original matrix. 

To do so, the function iterates over each element and reassigns it to the value 
the element at its flipped indices has. For instance, if the indices of an 
element are [0][1], its value would be reassigned to the value at [1][0]. 
*/

function transpose (matrix) {
  let transposed = [];
  
  for (row of matrix) {
    transposed.push([]);
  }

  for (row in matrix) {
    for (column in matrix[row]) {
      transposed[row].push(matrix[column][row]);
    }
  }

  return transposed;
}

// test cases
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]