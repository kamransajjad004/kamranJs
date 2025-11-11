/*
JSON Methods in JavaScript 

JavaScript provides two main global methods under the JSON object:

1. JSON.stringify()
Converts a JavaScript object => JSON string

2. JSON.parse()
Converts a JSON string => JavaScript object

*/

let person = {
    fullName : "Kamran",
    age : 20,
    isAlive : true,
    isSleeping : null
}

console.log(person);
console.log(typeof person);

let final = JSON.stringify(person)
console.log(final);
console.log(typeof final);

let final2 = JSON.parse(final)
console.log(final2);
console.log(typeof final2);

