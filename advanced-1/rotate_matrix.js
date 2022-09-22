/*
In continuation of exercise "Advanced 1: Transposing MxN Matrix"...
The rotate90 function takes an arbitrary MxN matrix, rotates it clockwise by 
90-degrees, and returns the result as a new matrix. The function should not 
mutate the original matrix.

To rotate the values of a matrix by 90-degrees, the matrix must be transposed 
and subsequently have every row's values reversed. The rotate90 function uses
the transpose function (from previous exercises) to exchange the rows and 
columns of the original matrix. Then for each row of the transposed matrix,
the values are reversed. 
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

function rotate90 (matrix) {
  let transposed = transpose(matrix);
  let maxIndex = transposed[0].length - 1;

  for (i in transposed) {
    for (let j = 0, n = maxIndex; j <= n / 2; j++) {
      let temp = transposed[i][j];
      transposed[i][j] = transposed[i][n - j]
      transposed[i][n - j] = temp;
    }
  }

  return transposed;
}

// test cases
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]