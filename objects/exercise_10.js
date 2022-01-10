let expression = [1, 2, ["a", ["b", false]], null, {}]

/*
Within the expression, values 1, 2, "a", "b", false, and null are primitve
values. The objects are...

// the array that contains all the values
[1, 2, ["a", ["b", false]], null, {}]    

// a nested array that contains a string value and another nested array
["a", ["b", false]] 

// the mentioned "another nested array"
["b", false]

// an empty object literal
{}

*/