class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    if (!this.isValidTriangle()) throw new Error;
  }

  kind() {
    let [s1, s2, s3] = [this.s1, this.s2, this.s3];

    if (s1 === s2 && s2 === s3) {
      return 'equilateral';
    } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  isValidTriangle() {
    let [s1, s2, s3] = [this.s1, this.s2, this.s3];

    if ([s1, s2, s3].some(value => value <= 0)) return false;
    if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) return false;

    return true;
  }
}

console.log()

module.exports = Triangle;

/*
PROBLEM:
Write a program that determines whether a triangle is equilateral, isosceles, or
scalene.

NOTES:
  - Equilateral: all three sides are the same length
  - Isosceles: two sides have same length, other side differs
  - Scalene: all three sides are different lengths
  - Valid Triangle: all sides must be greater than 0 AND sum of any two sides 
                    must be greater than the third.

EXAMPLES:
new Triangle(2, 2, 2) => "equilateral"
new Triangle(3, 4, 4) => "isosceles"
new Triangle(3, 4, 5) => "scalene"

DATA STRUCTURE:
Test cases create an instance of the "Triangle" type -> use class / constructor

ALGORITHM:

DETERMINE TRIANGLE TYPE:

  IF NOT VALID TRIANGLE
    THROW ERROR

  IF ALL THREE SIDES ARE EQUAL
    RETURN "EQUILATERAL"
  ELSE IF ALL THREE SIDES ARE DIFFERENT
    RETURN "SCALENE"
  ELSE
    RETURN "ISOSCELES"


DETERMINE IF VALID TRIANGLE:

  IF ANY SIDE IS <= 0
    RETURN FALSE
  
  IF SUM OF ANY TWO SIDES < THIRD SIDE
    RETURN FALSE

  RETURN TRUE
*/