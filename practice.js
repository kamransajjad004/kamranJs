function prime (x) {
    if (x <=1){
        console.log("not a prime number");
    }else if (x === 2){
        console.log("is a prime number");
    }else if (x % 2 === 0){
        console.log("not a prime number");}
        else {console.log("is a prime number");}
    }

prime (1)
prime (0)
prime (2)
prime (3)

let arr = [5 , 10, 2, 8]

let sum = arr.reduce((a , b) => a + b, 0)
console.log(sum);
let largest = Math.max(...arr)
console.log(largest);

let i = 1
while (i <= 10){
    console.log(i);
    i++
}
for (let j = 1; j <= 10; j++){
    console.log(j);
}

let user = {
    name : "kamran",
    age : 20,
    city : "hyderabad"
}
let {name , age , city} = user
console.log(age);

let arr1 = [1 , 2 ,3 , 4 ,5]
let [a , b , c , d ,e] = arr1
console.log(a , c , e);


f = 1

for (let i = 1; i<= 6; i++){
   console.log( f *= i);
}

let words = ["cat", "butter", "elephant", "sun", "rocket"]
let output = words.filter((x) => x.length > 5)

console.log(output);

let arr10 = ["Apple", "Mango", "banana"]
console.log(arr10);
console.log(...arr10);

