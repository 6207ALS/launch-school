/*
The wordSizes takes a string consisting of zero or more space separated words 
and returns an object that shows the number of words of different sizes. Words 
consist of any sequence of non-space characters.

The function iterates over each word of the string and determines if its length 
is a key property in the object. If it is, it increments the value (counter) of 
the key by 1; if not, the length is added to the object as a key property.   
*/

function wordSizes (string) {
  let wordSizeList = {};
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
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('    hello'));                                   // { '5': 1 }
console.log(wordSizes(''));                                            // {}