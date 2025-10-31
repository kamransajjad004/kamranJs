// How to calculate time in code's

console.time("Start");
let num = [1,2,3,4,5]

num.forEach((x) => {
    console.log(x);
})
console.timeEnd("Start");