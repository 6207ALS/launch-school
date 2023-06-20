// LS215: A General Problem Solving Approach
// An Example Problem - Problem 3

/*
PROBLEM:
Given a word string, determine if the word can be spelled through a set of 
spelling blocks (each "block" containing two letters).

SET OF BLOCKS:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

RULES:
  Explicit
    - Each block has two letters
    - Word cannot use both letters for a given block
    - Each block can only be used once
    - Result is case-insensitive
    - Return Boolean indicating if word can be spelled with the set of blocks

  Implicit / Assumed
    - What happens if argument is not a string?
      - assume all arguments are strings
    - What happens if string is empty?
      - return true


DATA STRUCTURE:
structure to reference the set of letter blocks
structure to reference the used blocks

options: object, array
CHOICE: object


- Iterate through letters of word
- If letter's block is not used
  - record that the block is being used
  - continue to next letter
- if letter's block is being used 
  - return false
- return true


isBlockWord('')            // true
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlock("BuTCh")           // false
isBlock("BatCH")           // true
isBlock("bob")             // false

ALGORITHM:

LET BLOCKS = {
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M
}

FUNCTION isBlock(word)
  IF WORD IS EMPTY STRING
    RETURN TRUE
  
  LET USED_BLOCKS = {
    B: true,
    U: true,
    T: true,
    C: true,
  }

  FOR EACH LETTER OF WORD (ALL UPPERCASED)
    IF LETTER NOT IN USED_BLOCKS OR LETTER'S OTHER HALF IS NOT IN USED_BLOCKS
      ADD LETTER TO USED_BLOCKS
    ELSE 
      RETURN FALSE
    
  RETURN TRUE
*/

const BLOCKS = {
  "B":"O",   "X":"K",   "D":"Q",   "C":"P",   "N":"A",
  "G":"T",   "R":"E",   "F":"S",   "J":"W",   "H":"U",
  "V":"I",   "L":"Y",   "Z":"M",
}

function isBlockWord(word) {
  if (!word) return true;

  let usedBlocks = {};

  for (letter of word.toUpperCase()) {
    if ((letter in usedBlocks) || (BLOCKS[letter] in usedBlocks)) {
      return false;
    } else {
      usedBlocks[letter] = true;
    }
  }

  return true;
}

console.log(isBlockWord(''));           // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord("BuTCh"));      // false
console.log(isBlockWord("BatCH"));      // true
console.log(isBlockWord("bob"));        // false