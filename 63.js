// Timer Functions
/*
Timer functions let you schedule code execution - either
after a delay or repeatedly at intervals.
They are part of the web APIs (in browsers) or Node.js
global timers (in backend JS).
*/

// 1. setTimeout()

console.log("step 1");
setTimeout(()=>console.log("step 2"), 0 )
console.log("step 3");

console.log("step4");

// 2. setInterval()
/*
The setInterval() method repeatedly calls a function or executes
a code snippet, with a fixed time delay between each call.

It continues running until you stop it using clearInterval().
*/

//   setInterval(() => {
//      console.log("hello cfi");
//  }, 2000)

let count = 10
const timer =
  setInterval(() => {
     console.log("hello cfi")
     console.log(count);
     count--
     if (count < 0){
        console.log("stopped");
        clearInterval(timer)
     }
 }, 2000)

 