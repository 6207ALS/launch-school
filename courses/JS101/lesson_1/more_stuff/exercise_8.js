/* 
The function isNotANumber returns a boolean value, determining if the passed
value is NaN or not. NaN is the only data type that does not === to itself, as
its data type is actually number. Any other data type would evaluate true to 
value === value as they have would have the same data type. Thus, if the passed
argument does not equal (===) to itself, it would have to be a NaN. 
*/

function isNotANumber(arg) {
  return value !== value;
}

