// Reduce method
/* 
The reduce() method runs a function on each element
of an array to reduce it to a single value (like sum,
product, or combined results)
*/

// Reduce Method has 3 parameters
// 1. accumulator => stores the previous  step
// 2. currentValue ==> current array element
// 3. initialValue ==> starting value

let numbers = [10, 20, 30, 40, 50]

let total = numbers.reduce((a , b) => {
    return a + b
}, 0);

console.log(total);

let arr = ["Ali", "f", "s", "k"]
let total1 = arr.reduceRight((a , b) => {
    return a + b
}, );
console.log(total1);

