/*
PROBLEM:
Given the number of bottles, return a string that represents a single verse of
the Beer Song.

EXAMPLE:

  BeerSong.verse(99)
  "99 bottles of beer on the wall, 99 bottles of beer.\n" +
  "Take one down and pass it around, 98 bottles of beer " +
  "on the wall.\n"

  BeerSong.verse(1))
  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n"

  BeerSong.verse(0)
  "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n"

  NOTES:
  - If a second argument is provided, return verses from first argument to last
    argument
  - If no second argument is provided, return a single verse from the first arg.
  - If first arg is 0, special verse
  - If first arg is 1, special verse

  DATA STRUCTURE:
  - Working with strings
  - for loops to iterate number of times

  ALGORITHM:

  LET NUMOFBOTTLES = FIRST ARG

  IF SECOND ARG IS NOT PROVIDED
    RETURN SINGLE VERSE WITH FIRST ARG
  ELSE
    LET ALLVERSES = []
    FROM VALUE OF FIRST ARG TO SECOND ARG
      PUSH SINGLE VERSE WITH CURRENT VALUE
    RETURN ALLVERSES
    
  
  SINGLE VERSE FUNCTION (VALUE):
    IF VALUE IS 1
      RETURN SPECIAL VERSE FOR 1 BOTTLE
    IF VALUE IS 0
      RETURN SPECIAL VERSE FOR 0 BOTTLE
    ELSE
      RETURN DEFAULT VERSE INTERPOLATED WITH VALUE 

  
*/

class BeerSong {

  static verses(numBottles, lastBottle) {
    let allVerses = [];
    for (let i = numBottles; i >= lastBottle; i--) {
      allVerses.push(BeerSong.verse(i));
    }
    return allVerses.join("\n");
  }

  static verse(numBottles) {
    switch (numBottles) {
      case 2:
        return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
        "Take one down and pass it around, 1 bottle of beer " +
        "on the wall.\n";
      case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles " +
        "of beer on the wall.\n";
      case 0: 
        return "No more bottles of beer on the wall, no more " +
        "bottles of beer.\nGo to the store and buy some " +
        "more, 99 bottles of beer on the wall.\n";
      default:
        return `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.\n` + 
        `Take one down and pass it around, ${numBottles - 1} bottles ` + 
        "of beer on the wall.\n";
    }
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;