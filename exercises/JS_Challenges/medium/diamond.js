/*
PROBLEM:
  Given a letter, output a diamond shape. The ends of the diamond (first and 
  last rows) should be printed with the first letter of the alphabet, "A". 
  The widest point (the middle row) should be printed with the given letter.

EXAMPLES:

makeDiamond("A")

  A

makeDiamond("C")

  A
 B B
C   C
 B B
  A

makeDiamond("E")

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A


DATA STRUCTURE:
  - working with strings
*/

class Diamond {
  static makeDiamond(inputLetter) {
    let letters = Diamond.lettersToUse(inputLetter);
    let diamond = [];

    for (let i = 0; i < letters.length; i++) {
      diamond.push(Diamond.returnRow(i, letters));
    }

    return `${diamond.join('\n')}\n`;
  }

  static returnRow(index, letters) {
    if (index === 0 || index === (letters.length - 1)) {
      return Diamond.returnTip(letters);
    } else {
      return Diamond.returnDefaultRow(index, letters);
    };
  }

  static returnTip(letters) {
    let outerGap = Math.floor(letters.length / 2)
    let outerGapSpaces = " ".repeat(outerGap);

    return outerGapSpaces + "A" + outerGapSpaces;
  }

  static returnDefaultRow(index, letters) {
    if (Diamond.isPassedHalfway(index, letters)) {
      return Diamond.returnBottomRow(index, letters);
    } else {
      return Diamond.returnTopRow(index, letters);
    }
  }

  static isPassedHalfway(index, letters) {
    return index > Math.floor(letters.length / 2);
  }

  static returnBottomRow(index, letters) {
    let outerGap = index - Math.floor(letters.length / 2);
    let innerGap = Diamond.oddSeries(letters.length - index - 1);
    let outerGapSpaces = " ".repeat(outerGap);
    let innerGapSpaces = " ".repeat(innerGap);

    let letter = letters[index];
    return `${outerGapSpaces}${letter}${innerGapSpaces}${letter}${outerGapSpaces}`;
  }

  static returnTopRow(index, letters) {
    let outerGap = Math.floor(letters.length / 2) - index;
    let innerGap = Diamond.oddSeries(index);
    let outerGapSpaces = " ".repeat(outerGap);
    let innerGapSpaces = " ".repeat(innerGap);

    
    let letter = letters[index];
    return `${outerGapSpaces}${letter}${innerGapSpaces}${letter}${outerGapSpaces}`;
  }

  static oddSeries(num) {
    let val = 1;

    for (let i = 1; i < num; i++) {
      val += 2;
    }

    return val;
  }  

  static lettersToUse(inputLetter) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let first = alphabet.slice(0, alphabet.indexOf(inputLetter)).split("");
    let second = first.slice().reverse();

    return [...first, inputLetter, ...second];
  }
}

module.exports = Diamond;