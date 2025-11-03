// For in loop

/* used to loop through the properties (keys)
of an object or values
*/

let myDetails = {
    fullName: "Kamran",
    age: 10,
    isAlive: true,
    isSleeping: null,
    isAwake: undefined
}

for (let keys in myDetails){
    console.log(myDetails[keys]);
}