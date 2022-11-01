let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* 
The code will log [1, 4, 3] to the console. array2 points to the same object 
as array1 does. Thus, any mutation of the array will affect the return values 
of both variables. Line 3 mutates the array, replacing the value at index 1
with 4.
*/