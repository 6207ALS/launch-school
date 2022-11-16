/*
PROBLEM:
Given a word and a list of possible anagrams, return an array that contains the 
anagrams of the word.

EXAMPLES:


  No matches returns empty array

  'diaper', ['hello', 'world', 'zombies', 'pants']
  -> []


  Detect simple anagram

  'ant', ['tan', 'stand', 'at']
  -> ['tan']


  Detect multiple anagrams

  'master', ['stream', 'pigeon', 'maters']
  -> ['maters', 'stream']


  Identical word is not anagram 

  'corn', ['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park']
  -> ['cron']


  Anagrams are case-insensitive

  "Orchestra", ['cashregister', 'Carthorse', 'radishes']
  -> ['Carthorse']


DATA STRUCTURE:
  Array to contain sublist of anagrams


ALGORITHM:

LET ANAGRAMS = [];
LET WORDSORTED = SORT WORD ALPHABETICALLY

FOR EVERY WORD IN LIST OF WORDS
  IF WORD === GIVEN_WORD
    CONTINUE
  
  SORT WORD'S LETTERS ALPHABETICALLY

  IF WORD === WORDSORTED
    PUSH WORD TO ANAGRAMS

RETURN ANAGRAMS

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(possibleAnagrams) {
    function sorted(word) {
      return word.split("").sort().join("");
    }

    let wordSorted = sorted(this.word.toLowerCase());

    let anagrams = possibleAnagrams.filter(word => {
      word = word.toLowerCase();
      if (word === this.word.toLowerCase()) return false;
      if (sorted(word) === wordSorted) return true;
      return false;
    });

    return anagrams;
  }
}

module.exports = Anagram;