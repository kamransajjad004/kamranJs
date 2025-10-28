//Arrays in Javascript

let person = ["kamran",8519897600, 10, true, null, undefined];
///             0         1          2   3     4      5

//note : Arrays uses indexing in js
//Arrays starts from 0
// using the index number you can perform curd operations
// Arrays in JavaScript

// How to access any value from array (using index)
// index starts from 0

// Accessing Array values
 console.log(person[0], person[1]);
 console.log(person[4])

// Adding a new value in array
 console.log(person);
 person[6] = "ali";
 console.log(person);

// Updating an array

 console.log(person);
 person[2] = 40;
 person[3] = false;
 console.log(person);

// Delete

console.log(person);
delete person[0];
console.log(person);    