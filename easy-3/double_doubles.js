/*
A double number is an even-length number whose left-side digits are exactly the 
same as its right-side digits.The twice function returns the number provided as
the argument multiplied by two, unless the argument is a double number; 
otherwise, it will return the double number as-is.
*/

function twice (number) {
    let num = String(number);
    
    if (num.length % 2 === 0){
        let halfIndex = num.length / 2;
        for (let i = 0; i < halfIndex; i++) {
            if (num[i] !== num[i + halfIndex]) return number * 2;
        }
        return number;
    } else {
        return number * 2;
    }
}

// test cases
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676



