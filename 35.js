// Array Methods

// 1. at() method

let arr = ["hi", "hello", "bye"];
console.log(arr.at(0));
console.log(arr.at(2));
// Index ==> value

//2. concat() Method

let arr1 = [10, 20, 30]
let arr2 = [40, 50, 60]

let total = arr1.concat(arr2)
console.log(total);
console.log(arr1.concat(arr2));
console.log(arr1)

//3. fill() Method
// fill is an array method
//which will replace all the elements
// with the given value

let fruits = ["apple", "mango", "orange"]

let total1 = fruits.fill("pineapple")
console.log(total1);

//4. indexof() Method

let nums = ["one", "two","three", "four"]

console.log(nums.indexOf("one"));
console.log(["one", "two","three", "four".indexOf("one")]);

// 5. lastindexOf()

let arr3 = [10, ,20 ,30 ,40 ,10 ,20]
console.log(arr3.lastIndexOf(10));

// 6. lenght()

let arr4 = [10,20,30,40,50,60]
console.log(arr4.length);


// 7. push()
//push is an array method
// which add a new element
// in the last position of thr array


let arr5 = [10,20,30,50]
arr5.push(40)

console.log(arr5);

//8. pop()
// pop is a array method which deletes 
// the last element from the array

let arr6 = [10,20,30]
arr6.pop()
console.log(arr6);

//9. unshift()
// unshift is an array method which adds
//by replacing the first value

let arr7 = [10,20,30]
arr7.unshift(100)
console.log(arr7);

//10. shift()
// shift is an array method which 
//deletes the first number

let arr8 = [10,20,30]
arr8.shift()
console.log(arr8);
