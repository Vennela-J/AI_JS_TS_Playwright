let original = [1, 2, 3];

let copy1 = [...original];        // spread

let copy2 = original.slice();     // slice

let copy3 = Array.from(original); // from

let copy4 = original.concat();    // concat

copy1.push(99);

copy2.push(93);

copy3.push(94);

copy4.push(95);

console.log(original); // [1, 2, 3]  (untouched)

console.log(copy1);    // [1, 2, 3, 99]

console.log(original); // [1, 2, 3]  (untouched)

console.log(copy2);    // [1, 2, 3, 93]

console.log(original); // [1, 2, 3]  (untouched)

console.log(copy3);    // [1, 2, 3, 94]

console.log(original); // [1, 2, 3]  (untouched)

console.log(copy4);    // [1, 2, 3, 94]

// Deep cOPY
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);
