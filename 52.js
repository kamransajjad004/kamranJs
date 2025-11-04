//object methods

//1. entries method
/*
Object.entries() in Javascript is a built in method that
 returns an array of keyn value pairs from an object
*/

let person = {
    fname: "suhail",
    age: 20,
    isAlive: true
} 

let output = Object.entries(person)
console.log(output);

let arr = [
    ["fname", "suhail"],
    ["age", "20"],
    ["isAlive" , true],
]
console.log(arr[1][1]);

//2. Object.keys()

/*
Returns an array of keys (property name) 
of the object
*/

let user = {
    fname: "Kamran",
    age: 20,
    city: "hyd"
}

console.log(Object.keys(user));

//3. Object.values()
// Returns an array of values from the object.

let user1 = {
    fname: "Kamran",
    age: 20,
    city: "hyd"
}

console.log(Object.values(user1));