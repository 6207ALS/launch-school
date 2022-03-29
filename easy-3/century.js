/*
The century function takes a year as input and returns the century. The return 
value is a string that begins with the century number, and ends with 'st', 'nd',
'rd', or 'th' as appropriate for that number.

The general rule for determining ordinal suffixes (st, nd, rd, th) is to 
determine if the number's ones digit is 1, 2, or 3. If so, it is followed with 
"st", "nd", or "rd", respectively. The only exception is if the last two digits 
of the number are the numbers 11, 12, or 13. The remaining numbers are 
followed with the "th" suffix. 
*/

function century (number) {
    let century = Math.ceil(number / 100);
    let last2Digits = century % 100;
    let lastDigit = century % 10;

    century = String(century);
    if (last2Digits === 11 || last2Digits === 12 || last2Digits === 13) {
        century += 'th';
    } else {
        switch (lastDigit) {
            case 1:
                century += 'st';
                break;
            case 2:
                century += 'nd';
                break;
            case 3:
                century += 'rd';
                break;
            default:
                century += 'th';
                break;
        }    
    }
    
    return century;
}

// test cases
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"