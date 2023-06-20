// LS215: A General Problem Solving Approach
// An Example Problem - Comparing Version Numbers

/*
PROBLEM:
Given two version numbers, determine which number is greater.

Input: (version1 (string), version2 (string))
Output:
version1 > version => 1.
version1 < version => -1.
version1 === version => 0.

Rules:
- If either version number contains characters other than digits 
  and the . character, we should return null.

- Number doesn't NEED a . character to be valid

Examples / Test Cases
0.1, 1 
-1

1, 1.1
1

1, 1.0
0

1.2.0.0, 1.18.2
-1

1.18.2, 
13.37
1

1.1.1
1.2

- Read from left -> right, comparing each number
  - if v1's current value > v2's current value: return 1
  - if v1's current value < v2's current value: return -1
  - if both current value are ===: return 0
- Both version numbers should have same number of numbers
  - append zeros to the end of the shorter number to compensate

DATA STRUCTURE:
options: strings, array
choice: array

ALGORITHM:
  IF EITHER STRING HAS CHARS OTHER THAN . AND DIGITS
    RETURN null;

  - SPLIT CHARACTERS OF BOTH INPUTS INTO ARRAYS (.)
    - CHECK IF INPUT IS STILL SPLIT IF DOESN'T HAVE .
  - IF ARRAYS' LENGTHS ARE NOT THE SAME
    - PUSH ELEMENTS OF 0s INTO SHORTER ARRAY
  
  FROM 0 TO END OF ARRAYS' LENGTHS
    IF NUMBERS ARE THE SAME
      CONTINUE
    ELSE IF (V1'S NUMBER < V2'S NUMBER)
      RETURN -1
    ELSE IF (V1'S NUMBER > V2'S NUMBER)
      RETURN 1
  
  RETURN 0
*/

function compareVersions(version1, version2) {
  if (hasInvalidCharacters(version1) || hasInvalidCharacters(version2)) return null;

  let numsV1 = version1.split(".");
  let numsV2 = version2.split(".");

  makeEqualLengths(numsV1, numsV2);
  
  for (let i = 0; i < numsV1.length; i++) {
    if (Number(numsV1[i]) < Number(numsV2[i])) {
      return -1;
    } else if (Number(numsV1[i]) > Number(numsV2[i])) {
      return 1;
    }
  }

  return 0;
}

function hasInvalidCharacters(str) {
  return /[^.\d]/.test(str);
}

function makeEqualLengths(arr1, arr2) {
  let shortArr = arr1.length > arr2.length ? arr2 : arr1;
  let longArr = shortArr === arr1 ? arr2 : arr1;

  while (shortArr.length < longArr.length) shortArr.push("0");
}

console.log(compareVersions("2.", "3"));