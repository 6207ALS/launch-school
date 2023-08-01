// LS216 Practice Problems
// Word Chain 2.0

/*
//https://edabit.com/challenge/yGvaYr3X8xHPxWRcb

PROBLEM:
Define a function that takes an array of words and returns a Boolean indicating 
if it is a word-chain or not.

Input: array
Output: Boolean

Rules:
  - Word-Chain: an array of words, where the next word is formed by either:
    1. Changing exactly one letter from the previous word.
    2. Adding or subtracting one letter.
  - Word: Series of one or more alphabetical characters.
  - You can only do one (not both) for each word change.
  - All words will be in lower-case.

  - Argument will always be a single array.
    - Array will only have Strings as elements.
    - Array will not be sparse.
    - If empty array argument, return empty Array
    - If array contains 1 element, return true
    - Array can be mutated, if needed.
    - String elements will always be at least 1 character
    - Every string will be unique

TEST CASES:
isWordChain(["row", "crow", "crown", "brown", "brawn"]) // ➞ true
// add "c" to "row" to get "crow", "n" to get "crown", etc.

isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) // ➞ true

isWordChain(["meek", "meet", "meat", "teal"]) // ➞ false
// "meat" => "teal" changes 2 letters (can only change 1).

isWordChain(["run", "runny", "bunny"]) // ➞ false
// "run" => "runny" adds 2 letters (can only add 1).

isWordChain["runny", "ruy"]) // ➞ false
// duplicate values removes

isWordChain(["t", "to", "two"]) // ➞ true

isWordChain([]) // ➞ []

isWordChain(["apple"]) // ➞ true

REQUIREMENTS:
  - Iterate through each word in words
    - Retrieve current word and next word

    - Determine if letter was added
      - Find current word in next word
    - Determine if letter was removed
      - Iterate through each character of current word,
        - Remove that character from current word
        - Compare it with next word
      - If words match, then return true (letter was removed)

    - Determine if letter was changed
      - If current word and next word are not the same length, return false
      - For every index of current word
        - Remove character at current word
        - Remove character at next word
        - If current word is the same as next word, return true

    - If any of the conditions above return true, current word and next word is a valid word chain

DATA STRUCTURES:
  - ARRAY

ALGORITHM:

IS_WORD_CHAIN(WORDS)
  FOR I IN RANGE (0 => SECOND TO LAST INDEX OF WORDS)
    LET CURRENT_WORD = WORDS[i]
    LET NEXT_WORD = WORDS[i + 1]

    IF LETTER_WAS_ADDED(CURRENT_WORD, NEXT_WORD)
      CONTINUE
    ELSE IF LETTER_WAS_REMOVED(CURRENT_WORD, NEXT_WORD)
      CONTINUE
    ELSE IF LETTER_WAS_CHANGED(CURREN_WORD, NEXT_WORD)
      CONTINUE
    ELSE
      RETURN FALSE
  
  RETURN TRUE


LETTER_WAS_ADDED(CURRENT_WORD, NEXT_WORD)
  IF CURRENT_WORD LENGTH !== NEXT_WORD LENGTH - 1
    RETURN FALSE

  RETURN CURRENT_WORD IS IN NEXT_WORD

LETTER_WAS_REMOVED(CURRENT_WORD, NEXT_WORD)
  IF CURRENT_WORD LENGTH !== NEXT_WORD LENGTH + 1
    RETURN FALSE
    
  FOR I IN RANGE OF 0 => LAST INDEX OF CURRENT_WORD
    LET CURRENT = CURRENT_WORD WITH CHARACTER AT CURRENT INDEX SPLICED
    IF CURRENT IS EQUAL TO NEXT
      RETURN TRUE

  RETURN FALSE

LETTER_WAS_CHANGED(CURRENT_WORD, NEXT_WORD)
  IF CURRENT_WORD LENGTH !== NEXT_WORD LENGTH
    RETURN FALSE

  FOR I IN RANGE OF 0 => LAST INDEX OF CURRENT_WORD
    LET CURRENT = CURRENT_WORD WITH CHARACTER AT CURRENT INDEX SPLICED
    LET NEXT = NEXT_WORD WITH CHARACTER AT CURRENT INDEX SPLICED
    IF CURRENT IS EQUAL TO NEXT
      RETURN TRUE

  RETURN FALSE
*/

function isWordChain(words) {
  for (let i = 0; i < words.length - 1; i++) {
    let currentWord = words[i];
    let nextWord = words[i + 1];
    if (letterWasAdded(currentWord, nextWord)) {
      continue;
    } else if (letterWasRemoved(currentWord, nextWord)) {
      continue;
    } else if (letterWasChanged(currentWord, nextWord)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function letterWasAdded(currentWord, nextWord) {
  if (currentWord.length !== nextWord.length - 1) return false;
  for (let i = 0; i < nextWord.length; i++) {
    let next = nextWord.split("")
    next.splice(i, 1);
    if (currentWord === next.join("")) return true;
  }

  return false;
}

function letterWasRemoved(currentWord, nextWord) {
  if (currentWord.length !== nextWord.length + 1) return false;

  for (let i = 0; i < currentWord.length; i++) {
    let current = currentWord.split("");
    current.splice(i, 1);
    if (current.join("") === nextWord) return true;
  }

  return false;
}

function letterWasChanged(currentWord, nextWord) {
  if (currentWord.length !== nextWord.length) return false;

  for (let i = 0; i < currentWord.length; i++) {
    let current = currentWord.split("");
    current.splice(i, 1);

    let next = nextWord.split("");
    next.splice(i, 1);

    if (current.join("") === next.join("")) return true;
  }

  return false;
}

p = console.log;

p(isWordChain(["row", "crow", "crown", "brown", "brawn"])) //, true
p(isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"])) //, true
p(isWordChain(["meek", "meet", "meat", "teal"])) // false
p(isWordChain(["run", "runny", "bunny"])) //, false
p(isWordChain(["fun", "fund", "find", "bind", "wind", "wild", "wile", "wiles"])) //, true
p(isWordChain(["nut", "but", "bot", "boot", "loot", "look", "book", "brook"])) //, true
p(isWordChain(["some", "tome", "tame", "lame", "flame", "flamer", "blamer", "blamers"])) //, true
p(isWordChain(["a", "at", "hat", "that", "what", "flat"])) //, false
p(isWordChain(["link", "blink", "wink", "sink"])) //, false