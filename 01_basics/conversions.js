let digit = "33";
let digitAB = "33ab"
// console.log(typeof digit);

let digitInNumber = Number(digit);
let digitNum = Number(digitAB);
// console.log(typeof digitNum);
// console.log(digitNum);


// "33" => 33
// "33ab" => NAN
// true => 1 // false => 0

// 1 => true  // 0 => false
// "" => false
// "ram" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// console.log("1" + 2)
// console.log(2 + "1") // agar string pahle hai to string ki tarah treat karnege
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2") // nhi to fir number ko operate karke string concatanae karenge


// console.log(+true)
// console.log(+"")

console.log(null > 0)
console.log(null == 0); // == operater and comaprision works differently 
console.log(null >= 0); // comparision operator first converts null into number that is 0 and then compares

// === opereater checks number as well as there datatype for the result
// while == only checks values


