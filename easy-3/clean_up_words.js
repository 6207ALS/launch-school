/*
The cleanUp function takes a string that consists of some words and an 
assortment of non-alphabetic characters and returns the string with all of the 
non-alphabetic characters replaced by spaces. If one or more non-alphabetic 
characters occur in a row, only one space is added.(i.e., the result string 
will never have consecutive spaces).

The function first replaces all non-alphabetical characters of the string with
space characters. It then iterates over each character and compares it with
the previous character. If they are different, the character is added to the 
clean string. To handle consecutive letters, the function checks if the two 
letters are identical AND alphabetical. If they are, both letters are added.    
*/

function cleanUp (string) {
    string = string.replace(/[^a-z\s]/ig, ' ');
    let cleanString = '';
    let previousChar;

    for (currentChar of string) {
        if (currentChar !== previousChar) {
            cleanString += currentChar;
        } else if (/[a-z]/i.test(currentChar)) {
            cleanString += currentChar;
        }
        previousChar = currentChar;
    }

    return cleanString;
}

// test cases
console.log(cleanUp("---what's my +*& line?"));       // " what s my line "
console.log(cleanUp("13$&24yes my name's daryll"));   // " yes my name s daryll"
