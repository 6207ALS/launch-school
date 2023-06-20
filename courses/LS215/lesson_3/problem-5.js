// LS215: A General Problem Solving Approach
// An Example Problem - Problem 4

/*
PROBLEM:
Define functions that, given a string of text and the number of rails, encode 
and decode the message using the Rail Fence Cipher Algorithm.

Input: String (message), Number (# of rails)
Output: String

Rules:
  - Message is encoded through a zig-zag pattern, letters are placed diagonally.
    - top-to-bottom, left-right
    - bottom-to-top, left-right
  - Subsequent letters are placed in the immediate corner of the previous letter.
  - Encoded message is the final pattern read from left to right, top to bottom.
  - Whitespace is not included in encoded message
  - Second argument, Number, determines the height of zig-zag pattern - number of rails
  - Case-sensitive, preserve letter case.

Notes:
  - Assume arguments will always be valid (String, Number)
  - Return empty string for empty string argument.

TEST CASES:
("WE ARE DISCOVERED FLEE AT ONCE", 3)

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

"WECRLTEERDSOEEFEAOCAIVDEN"

Requirements:
  - Remove whitespace from input string.
  - Initialize data structure for zig-zag pattern.
    - Number argument determines the height of the structure.
  - Place letters in data structure accordingly.
    - Tracker (pointer for next letter / current letter)
    - Move tracker to the next position
      - Determine if tracker should go upwards or downwards.
      - Determine if tracker is at top/bottom of data structure.
        - If top/bottom, change direction.
  - Read data structure from left-to-right, top-to-bottom.
    - Skip over any empty elements
    - Record only elements with letter inside.

DATA STRUCTURE:
OPTIONS: Array of subarrays

ALGORITHM:
  REMOVE WHITESPACE FROM INPUT STRING

  INITIALIZE ARRAY OF SUBARRAYS (RAILS), USING NUMBER ARGUMENT
  INITIALIZE X-POINTER = 0
  INITIALIZE Y-POINTER = 0
  INITIALIZE DIRECTION = ""

  FOR EVERY LETTER OF TEXT
    IF Y-POINTER IS AT TOP OF RAILS
      CHANGE DIRECTION TO DOWNWARDS
    
    IF Y-POINTER IS AT BOTTOM OF RAILS
      CHANGE DIRECTION TO UPWARDS

    PLACE LETTER AT CURRENT POINTER LOCATION
    - MOVE POINTERS ACCORDING TO CURRENT DIRECTION
      - IF DIRECTION IS UPWARDS
        - Y--
      - IF DIRECTION IS DOWNWARDS
        - Y++
      X++

  LET ENCODED_MESSAGE = "";

  READ DATA STRUCTURE FROM LEFT-RIGHT, TOP-TO-BOTTOM
    IF CURRENT ELEMENT IS LETTER
      ADD LETTER TO ENCODED_MESSAGE

  RETURN ENCODED_MESSAGE;
*/

/*
Input: String, Number (# of rails used to encode message)
Output: String (decoded message)

Rules:
  - Message was encoded through a zig-zag pattern, letters are placed diagonally.
    - top-to-bottom, left-right
    - bottom-to-top, left-right
  - Subsequent letters are placed in the immediate corner of the previous letter.
  - Encoded message is the final pattern read from left to right, top to bottom.
  - Whitespace is not included in encoded message
  - Second argument, Number, determines the height of zig-zag pattern - number of rails
  - Case-sensitive, preserve letter case.

TEST CASE:

Input: "WECRLTEERDSOEEFEAOCAIVDEN", 3

? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Output: "WEAREDISCOVEREDFLEEATONCE"

Requirements:
  - Initialize the data structure
    - Use the Number argument to determine number of rails
  - Create a zig-zag pattern with each spot being a placeholder ("?", \w)
    - Reuse the encoding algorithm to traverse in zig zag pattern
  - Traversing through the rail structure (left-to-right, top-bottom) place each
    letter of encoded text in placeholders
      - If position is placeholder character, place the first character of message
        at position
      - Slice the string from 2nd character to end.
  - Read the data structure in a zig-zag pattern
    - Reuse the encoding algorithm to read in zig zag pattern

DATA STRUCTURE:
ARRAY OF SUBARRAY

ALGORITHM: 
  INITIALIZE DATA STRUCTURE USING NUMBER ARGUMENT
    - NUMBER ARGUMENT REPRESENTS NUMBER OF SUBARRAYS
  
  INITIALIZE X-POINTER = 0
  INITIALIZE Y-POINTER = 0
  INITIALIZE DIRECTION = ""

  FOR EVERY LETTER OF TEXT
    IF Y-POINTER IS AT TOP OF RAILS
      CHANGE DIRECTION TO DOWNWARDS
    
    IF Y-POINTER IS AT BOTTOM OF RAILS
      CHANGE DIRECTION TO UPWARDS

    PLACE PLACEHOLDER CHARACTER AT CURRENT POINTER LOCATION
    - MOVE POINTERS ACCORDING TO CURRENT DIRECTION
      - IF DIRECTION IS UPWARDS
        - Y--
      - IF DIRECTION IS DOWNWARDS
        - Y++
      X++
  
  READ DATA STRUCTURE FROM LEFT-RIGHT, TOP-TO-BOTTOM
    IF CURRENT ELEMENT IS PLACEHOLDER CHARACTER
      REPLACE PLACEHOLDER CHARACTER WITH FIRST CHARACTER OF ENCODED MESSAGE
      REMOVE FIRST CHARACTER FROM ENCODED MESSAGE
  
  DECODED_MESSAGE = "";

  READ DATA STRUCTURE IN ZIG ZAG PATTERN (REUSED ALGORITHM ON LINE 136)
    ADD EACH POSITION ELEMENT TO DECODED_MESSAGE
*/


function decodeRailFenceCipher(text, numRails) {
  const TOP = 0;
  const BOTTOM = numRails - 1;
  let rails = generateRails(numRails);
  let xPointer = 0;
  let yPointer = 0;
  let direction;
  let textCopy = text.slice();

  for (let _ of text) {
    if (yPointer === TOP) direction = "downwards";
    if (yPointer === BOTTOM) direction = "upwards";

    rails[yPointer][xPointer] = "?";
    if (direction === "downwards") yPointer++;
    if (direction === "upwards") yPointer--;
    xPointer++;
  }

  for (let i = 0; i < rails.length; i++) {
    for (let j = 0; j < rails[i].length; j++) {
      if (rails[i][j] === "?") {
        rails[i][j] = textCopy[0];
        textCopy = textCopy.slice(1);
      }
    }
  }

  let decodedMessage = "";
  xPointer = 0;
  yPointer = 0;

  for (let _ of text) {
    if (yPointer === TOP) direction = "downwards";
    if (yPointer === BOTTOM) direction = "upwards";

    decodedMessage += rails[yPointer][xPointer];
    if (direction === "downwards") yPointer++;
    if (direction === "upwards") yPointer--;
    xPointer++;
  }

  return decodedMessage;
}


function encodeRailFenceCipher(text, numRails) {
  if (!text) return text;
  text = text.replaceAll(/\s/g, "");

  const TOP = 0;
  const BOTTOM = numRails - 1;
  let rails = generateRails(numRails);
  let xPointer = 0;
  let yPointer = 0;
  let direction;

  for (let letter of text) {
    if (yPointer === TOP) direction = "downwards";
    if (yPointer === BOTTOM) direction = "upwards";

    rails[yPointer][xPointer] = letter;
    if (direction === "downwards") yPointer++;
    if (direction === "upwards") yPointer--;
    xPointer++;
  }

  let encodedMessage = "";

  for (let rail of rails) {
    for (let element of rail) {
      if (typeof element === "string") encodedMessage += element;
    }
  }

  return encodedMessage;
} 

function generateRails(numRails) {
  let rails = [];

  for (let i = 0; i < numRails; i++) {
    rails.push([]);
  }

  return rails;
}

console.log(encodeRailFenceCipher("WE ARE DISCOVERED FLEE AT ONCE", 3));
console.log(decodeRailFenceCipher(encodeRailFenceCipher("WE ARE DISCOVERED FLEE AT ONCE", 3), 3));