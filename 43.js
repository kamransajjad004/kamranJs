
console.time("Start")
for (let i =  1; i <=1000; i++){
    console.log(`1 x ${i} = ${i *1000}`);
}
console.timeEnd("Start")

// / How to calculate time in code

console.time("time");

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

//for Each

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((n) => {
    console.log(`5 X ${n} = ${5 * n}`);
})

