/*
The function alphabeticNumberSort takes an array of integers between 0 and 19 
and returns an array of those integers sorted by their English word.
[1, 2, 4] --> [one, two, four] --> [4, 1, 2]

The function refers to an array of English words of the numbers 1 - 20. It then 
converts every number in the array to its English word, sorts it alphabetically,
and converts the words back into the number. 
*/

function alphabeticNumberSort (arr) {
  const NUM_WORDS = [
    'zero',    'one',     'two',       'three',    'four',
    'five',    'six',     'seven',     'eight',    'nine',
    'ten',     'eleven',  'twelve',    'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];

  for (index in arr) {
    arr[index] = NUM_WORDS[arr[index]];
  }
  return arr.sort().map(word => NUM_WORDS.indexOf(word));
}

// test case
console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

