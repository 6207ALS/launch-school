/*
In continuation of exercise "Easy 6: Reverse It (Part 1)"...
The reverseWords function takes a string argument containing one or more words 
and returns a new string containing the words from the string argument. All 
five-or-more letter words have their letters in reverse order. It is assumed 
that the string argument will consist of only letters and spaces. Words will be 
separated by a single space.

The function first splits the words of the string into an array. Using the 
.map() method, it then iterates over each word. If the word's length is greater
than 4, the element is reassigned the word in backwards. If not, the element
remains the same. The array is then rejoined into a string, each word separated
by a space character.    
*/

function reverseWords (string) {
  words = string.split(' ');
  words = words.map(word => {
    return word.length > 4? word.split('').reverse().join(''):word;
  });

  return words.join(' ');
}

// test cases
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"