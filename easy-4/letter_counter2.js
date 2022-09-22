/*
In continuation of exercise "Easy 4: Letter Counter (Part 1)"...
The modified wordSizes function excludes non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.

The modified function removes any non-letter characters of the string before
counting word sizes with the .replace method.
*/

function wordSizes (string) {
  let wordSizeList = {};
  string = string.replace(/[^a-z0-9\s]/ig, '');
  let words = string.split(' ');

  for (element of words) {
    if (!!element) {
      let length = String(element.length);
      if (length in wordSizeList) {
        wordSizeList[length] += 1;
      } else {
        wordSizeList[length] = 1;
      }
    }       
  }
  return wordSizeList;
}

// test cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}