/*
The searchWord function takes two arguments, a word and a string of text, and 
returns an integer representing the number of times the word appears in the 
text. It is assumed that the word and text inputs will always be provided, and 
that all words are separated by spaces. Thus, some words will include 
punctuation such as periods and commas.

The function constructs a new Regular Expression object that contains the 
provided word argument as the regex pattern. The pattern considers any global, 
case-insensitive version of the word argument. The function then passes the
regex to the .match() method, which returns a list of any matches of the regular
expression in the text. The length of the list of matches is returned. 
*/

function searchWord (word, text) {
  let regex = new RegExp(word, 'ig');
  let words = text.match(regex, text);
  return words ? words.length: 0;
}

// test cases
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
console.log(searchWord('sed', text));      // 3