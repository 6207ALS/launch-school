/*
In continuation of exercise "Advanced 1: Transpose 3x3 Matrix"...
The revised transpose function takes an array of arrays that represents a MxN 
matrix and returns the transpose of the matrix.

To determine the dimensions of the nested array (for the transposed matrix), 
the dimensions of the original matrix must be swapped. Thus, the number of rows
in the transposed matrix is the number of columns in the original matrix. And,
the number of columns in the transposed matrix is the number of rows in the 
original matrix. The rest of the process is unchanged: every value in the 
transposed matrix is the value at the element of its swapped indices. For 
instance, suppose an element at the indices [0][1]. Its new value is the value
at the indices [1][0].
*/

function transpose (matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposed.push([]);
  }

  for (row in transposed) {
    for (column in matrix) {
      transposed[row].push(matrix[column][row]);
    }
  }

  return transposed;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

// test cases
let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]