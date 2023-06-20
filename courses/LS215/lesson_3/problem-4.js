// LS215: A General Problem Solving Approach
// An Example Problem - Problem 4

/*
PROBLEM:
Given a list of numbers, each number being a portion of its complete number,
return a list of the complete numbers.

RULES:
  Explicit
    - Each number represents a portion of its complete number
    - The list can be broken into smaller series of numbers (in increasing value)
      - Each subsequent series has a "prefix" value of 0, 1, 2, 3... for its numbers
    - Provided list of numbers can use different separators for their ranges.
      [1, 2, 3, 11, 12] is equivalent to:
        - "1, 2, 3, 1, 2"
        - "1-3, 1-2"
        - "1:3, 1:2"
        - "1..3, 1..2" 
    - Ranges are always inclusive
    - Possible separators are ["-", ":", ".."]

  Implicit
    - Input will always be strings
    - Output should be a an array of complete numbers
    - Empty string should return "null"
    - Input with separators will only use one type of separator
    - 

TEST CASES:

  complete_numbers = [1, 3, 7,];
  previous_number = 7;
  "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21


  previous_number = -1
  "1-3, 1-2" --> 1, 2, 3, 11, 12

  "1, 3"
  [1, 3] <= valuesOfRanges
  beginning = first element of valuesOfRanges (1)
  end = last element of valuesOfRanges (3)
  from 1 - 3, return array of range --> [1, 2, 3]

  previous_number = last element in complete numbers || -1;
  "1, 2"
  [11, 12] <= valuesOfRanges
  beginning = first element of valuesOfRanges (11)
  end = last element of valuesOfRanges (12)
  from 1 - 3, return array of range --> [11, 12]

  return all array of ranges concatenated:
  [1, 2, 3] + [11, 12];



  "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12

  "1, 5, 2"
  [1, 5, 12]
  beginning: 1
  end: 12

  from 1 - 12, return array of range --> [1, 2, 3, 4, ..., 12]

  previous_number = 104;
  "104-2" --> 104, 105, ... 112
  [104, 112]
  beginning = 104
  end = 112

  from 104 - 112, return array of range --> [104, 105, 106, ..., 112]

  previous_number = 104
  "104-02" --> 104, 105, ... 202
  [104, 202]
  beginning = 104
  end = 202

  from 104 - 202, return array of range --> [104, 105, 106, ..., 202]


  "545, 64:11" --> 545, 564, 565, .. 611

  [545, 64:11]

  previous_number = 564
  545

  completed_numbers = 545

  64:11
  [564, 611]
  beginning = 564
  end = 611
  from 564 - 611, return array of range --> [564, 565, ..., 611]
  


APPROACH
  - split input into array with commas as delimiter
  - for each element of array
    - check if contains range separators

    - if there is no range separator
      - determine next number
        - look at previous "complete number"
        - return number greater than previous "complete number" that contains current element 
        - set that number as the new previous "complete number"
    
    - if there is a range separator
      - split element by the separator
      - for each number in range numbers
        - determine next number
          - look at previous "complete number"
          - return number greater than previous "complete number" that contains current element 
          - set that number as the new previous "complete number"
      - beginning = first element in array of range numbers
      - end = last element in array of range numbers
      - from beginning to end
        - create array of numbers for that range
*/

function completeNumbers(shortHands) {
  let completeNumbers = [];
  shortHands = shortHands.split(", ");
  previousCompleteNumber = -1;
  for (let shortHand of shortHands) {
    if (!hasRangeSeparator(shortHand)) {
      let nextNumber = generateNextNumber(previousCompleteNumber, shortHand);
      completeNumbers.push(nextNumber)
      previousCompleteNumber = nextNumber;
    } else {
      let rangeNumbers = shortHand.split(/\.\.|\-|\:/);
      for (let i = 0; i < rangeNumbers.length; i++) {
        let nextNumber = generateNextNumber(previousCompleteNumber, rangeNumbers[i]);
        rangeNumbers[i] = nextNumber;
        previousCompleteNumber = nextNumber;
      }
      let beginning = rangeNumbers[0];
      let end = rangeNumbers[rangeNumbers.length - 1];

      completeNumbers.push(...rangeCompleteNumbers(beginning, end));
    }
  }

  return completeNumbers;
}

function generateNextNumber(previousCompleteNumber, digits) {
  previousCompleteNumber = Number(previousCompleteNumber);
  if (digits > previousCompleteNumber) return Number(digits);
  let nextNumber = previousCompleteNumber + 1;
  while (true) {
    if (new RegExp(`\d*${digits}$`).test(nextNumber)) return nextNumber;
    nextNumber++;
  }
}

function rangeCompleteNumbers(beginning, end) {
  let numbers = [];

  for (let i = beginning; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
}


function hasRangeSeparator(shortHand) {
  return /(\.\.|\:|\-)/.test(shortHand);
}

console.log(completeNumbers("1, 3, 7, 2, 4, 1"));
console.log(completeNumbers("1-3, 1-2"));
console.log(completeNumbers("1:5:2"));
console.log(completeNumbers("104-2"));
console.log(completeNumbers("104-02" ));
console.log(completeNumbers("545, 64:11"));