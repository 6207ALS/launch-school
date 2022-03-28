function twice (number) { // 103103
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

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676



