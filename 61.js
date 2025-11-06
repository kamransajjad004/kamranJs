/*
Javascript ES6 (also known as ECMAScript2015 or ECMAScript6) is
the sixth edition of Javascript introduced in June 2015.

ECMAScript (European computer manufacturers association script)
is the standard specification of JavaScript to ensure
compatibility in all browsers and environments.

This tutorial provides a summary of commonly used features
and syntax improvements of ES6.
*/

// 1. let and const
// 2. Arrow function
// 3. Template Literals
// 4. Default Parameters

function hi(a = 0, b = "guest") {
    console.log(`my name ${a} and age ${b}`);
}


// 5. Destructuring Assignment

let person = {
    fName: "Kamran",
    age: 20,
    isAlive: true,
    isSleeping: null
}

let {fName, age, isAlive, isSleeping} = person;
console.log(fName, age, isAlive, isSleeping);

let person1 = ["Suhail", 20, true, null, undefined]

let [a, b, c,d] = person1;
console.log(a, b, c, d);
