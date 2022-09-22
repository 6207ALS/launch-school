/*
The neutralize function used a .forEach() method to iterate over each word
of the given sentence. If the word at a given index was a negative word, the 
function would remove the element from the array. This would effectively cause
the .forEach() method to skip over the following element of the array. Thus, if
a sentence contained two consecutive negative words, only the first negative 
word would be removed. The solution is to use the .filter() method to remove
any negative words of the sentence. 
*/

function neutralize(sentence) {
  let words = sentence.split(" ");
  words = words.filter(word => !isNegative(word));
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.