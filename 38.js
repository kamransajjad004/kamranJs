// Array methods

//17. every() method
//checks if every element in the array passes a test (returns true/false)
//returns : true if all elements pass the condition, otherwise false.

let nums = [2 ,4 ,6 ,8]

let check = nums.every((x) => x > 0 )
console.log(check);

// function test(x) {
// return x > 0
// }

// >0

/*
18. find method

returns the first element that satisfies a condition

*/

let nums1 = [2 ,4 ,6 ,8]

let check1 = nums.find((x) => x > 0 )
let check2 = nums.find((x) => x < 0 )
let check3= nums.find((x) => x > 0 )
let check4 = nums.find((x) => x > 0 )

console.log(check1);

//19. findIndex

// returns the index of the first element that satisfies a condition.
// returns index number

let nums2 = [2 ,4 ,6 ,8]
let check5 = nums.findIndex((x) => x > 3 )
console.log(check5);

// forEach() Method

// Purpose : Executes a function for each element
// Return value : undefined
// chainable : No
// Changes original array : No
// Common Use : Logging, Saving Data

// ex : forEach just : Just loops - Doesnt return anything.

let numbers = [1, 2, 3, 4, 5]

console.log(numbers);
numbers.forEach((ele) => {
    console.log(ele * 2);
});
console.log(numbers);

let names = ["kaif", "saboor", "rayyan", "kamran"]

names.forEach((x) => {
    console.log(x);
})