let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/*
array1 has a length of 4, as undefined values are considered in the .length property.

array2 has length of 5, as declared in line 4. Unset values (missing items) are 
considered in the .length property. 

array3 has a length of 0. array3[-1] is not considered a true element within the 
array, but rather a property on the array object. 

array4 has a length of 3, despite starting out with 5 elements. Line 10 truncates
the array to its first 3 elements. 

array5 has a length of 101. Line 13 declares that the array has a value of 3 on its
101th element (index of 100). The first 100 elements are declared as missing items.
*/