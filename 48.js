// slice method
// The slice() method is used to copy or extract a portion
// of an array (or string) without changing the original one.

let arr = [10, 20, 30, 40]

let output = arr.slice(1, 3);
//
console.log(output);

//some() method
/*
The some() method checks if at least one
 element in an array passes a test(condition)

it returns:

true - if any element passes thge condition

false - if none do

*/

let arr1 = [2, 4, 6, 8, 11]
let output1 = arr.every((x) => x % 2 ==0)
let output2 = arr.some((x) => x % 2 ==0)
console.log(output2);

