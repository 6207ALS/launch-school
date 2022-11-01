/*
A collection of spelling blocks has two letters per block, as shown in the 
function below. It limits the words the function can spell with the blocks to 
only those words that do not use both letters from any given block. It can also 
only use each block once. The isBlockWord function takes a word string as an 
argument and returns true if the word can be spelled using the set of blocks, 
false otherwise.

The function iterates over each block and creates a Regular Expression with the
given letters. If the word contains both letters from the block and/or uses one
of the letters twice, false is returned. If not, true is returned. 
*/

function isBlockWord (string) {
  let blockWords = [
    "BO", "XK", "DQ", "CP", "NA",
    "GT", "RE", "FS", "JW", "HU",
    "VI", "LY", "ZM",
  ];

  for (block of blockWords) {
    let regex = new RegExp(`[${block}]`, "ig");
    let matches = string.match(regex);
    if (matches && matches.length >= 2) return false;
  }
  return true;
}

// test cases
console.log(isBlockWord("BATCH"));      // true
console.log(isBlockWord("BUTCH"));      // false
console.log(isBlockWord("jest"));       // true
console.log(isBlockWord("floW"));       // true
console.log(isBlockWord("APPLE"));      // false
console.log(isBlockWord("apple"));      // false
console.log(isBlockWord("apPLE"));      // false
console.log(isBlockWord("Box"));        // false