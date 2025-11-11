// Math

/*
In JavaScript, the Math object provides a set of built-in mathematical methods and constants for performing
common math operations - like rounding numbers, generating random values, trignometry, logarithms, etc.
*/

let x = 5
let a = -6
let b = 4.1
let c = 4.8
let d = 6.5

console.log(Math.abs(a))

console.log(Math.round(c))
console.log(Math.round(b))
console.log(Math.round(c))

console.log(Math.ceil(c))
console.log(Math.ceil(b))
console.log(Math.ceil(d))

console.log(Math.floor(x))

console.log(Math.trunc(d))

console.log(Math.sign(false))

/*
Random Numbers

Math.random() Returns random number between 0 and 1.
custom range - Math.random() * (max - min) + min
ex(1-10) random integer between 1 and 10 - Math.floor(Math.random() * 10) + 1
*/

let min = 1
let max = 100

let randnum = Math.floor(Math.random() * (max + 1 - min) + min)
console.log(randnum);
