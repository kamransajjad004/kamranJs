//11. includes() method
//it gives the output in boolean values
//its shows the presence of the element
//if its present it shows true if not false

let arr = ["saboor", "rayyan", "kaif"]

console.log(arr.includes("kaif"));
console.log(arr.includes("kamran"));

// 12. join() Method
//it replaces with the commas

let arr1 = ["saboor" , "rayyan" , "kaif"]
console.log(arr1.join("  "));

//13. reverse() method
let arr2= ["saboor", "rayyan", "kaif"]
console.log(arr2.reverse());

let arr3 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr3.reverse());

let arr4 = [1,2,3,4,8,9,1]
console.log(arr4.reverse());

//14. sort() method

let arr5 = [10,9,8,57,6,5,4,3,2,1,0,20]
console.log(arr5.sort());
console.log(arr5.sort((a,b) => a - b));
console.log(arr5.sort((a,b) => b - a));

//IIFE immediate invoke function expresion

//15. flat() method
// nested value will be unnested
let arr6 = ["hello", "hi" ,["bye", "test"],"ok" ]
console.log(arr6.flat());

//16. Array.of() method

// A  method is to be used to create a new array

let output = Array.of("hi", "hello" , 2 , 15 , false )
console.log(output);

// Home work

// every() method
// find() method
// findIndex() method
// forEach () method
// map() method
// reduce() method
// reduceRight() method
