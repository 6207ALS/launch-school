function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

// logs: Kirk, James T.
console.log(formatName(fullName[0], fullName[1], fullName[2]));

// logs: Kirk, James T.
console.log(formatName(...fullName));

/*
The spread operator can be used to pass in each element of the 'fullName' array 
into the 'formatName' function as individual arguments. As demonstrated above,
the spread operator essentially achieves the same output as shown on line 8.
Each element of the array is passed as an individual item.
*/