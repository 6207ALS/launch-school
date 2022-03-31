/*
The union function takes two arrays as arguments and returns an array containing
the union of the values from the two. There are no duplications of values in the
returned array, even if there are duplicates in the original arrays. It is 
assumed that both arguments will always be arrays.

The function uses the method .concat() to combine the two arrays into one. 
To remove duplicates, the function then iterates over each element, adding every
unique value to a new array. 
*/

function union (arr1, arr2) {
    let arr = arr1.concat(arr2);
    let uniqueArr = []

    arr.forEach(element => {
        if (!uniqueArr.includes(element)) uniqueArr.push(element);
    });
    return uniqueArr.sort();
}

// test cases
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([0, 2, 4, 6], [1, 3, 5])); // [0, 1, 2, 3, 4, 5, 6]