// try catch in javascript

/*
The try ...catch statement in javascript is used to handle runtime errors
-- it lets your code keep running even if something goes wrong
*/

// Basic syntax

/*try {

}catch(error) {
    console.log(error);
}
*/

try {
let a = 10
console.log(b);
}catch(error) {
    console.log(error)
    console.log("bhai error agaya")
    console.log(error.name, error.message);
} 