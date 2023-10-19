// LS220 Introduction to Data Structures and Algorithms
// Lesson 1 - Practice Problems: Time and Space Complexity


// Q1
/*
The time complexity of the 'test' function is O(N). The function contains a 
single for-loop that iterates over each element of the "n" array argument.

Stated differently, the time complexity of the function's algorithm grows 
linearly with the size of the array argument.

The space complexity is O(1) as the function does not use any additional
memory space (disregarding the array input).
*/


// Q2
/*
The time complexity of the 'test' function is O(logN). The function's for-loop
divides the value of 'i' by half for every iteration until 'i' is less than
1. That is, the function's time complexity is logarithmic (base 2) to the 
array input.

The space complexity is O(1) as the function does not use any additional
memory space (disregarding the array input).
*/


// Q3
/*
The time complexity of the 'test' function is O(N^2). The function contains a
nested for-loop with each loop iterating N times. That is, the time complexity 
of the function's algorithm grows proportionally to the square of the "n"
argument.

The space complexity is O(N^2). The function constructs a N x N matrix as a
result of nested for-loops.
*/


// Q4
/*
The time complexity of the 'test' function is O(NlogN) or O(N) * O(logN).
The function contains a nested for-loop. The outer for-loop iterates N times.
The inner for-loop, on the other hand, loops 'logN' times; each iteration
doubles the value of 'j' until 'j' reaches 'n'. By multiplying the time
complexities of these two for loops we reach O(NlogN).

The space complexity, however, is O(1). No additional memory is used for the
function.
*/


// Q5