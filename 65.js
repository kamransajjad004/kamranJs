// Promises in JS
/*
A Promise is an object that represents the eventual
completion or failure of an asynchronous operation

"I'll fetch the data (pending)... if it works, I'll
resolve it , if it fails, I'll reject it
*/

// const promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Task Completed");
//   } else {
//     reject("task failed");
//   }
// });


//     console.log(promise) 


// function timerCallback(callback, seconds) {
//   console.log(`waiting for ${seconds} seconds`);
//   setTimeout(() => {
//     callback(`Done after ${seconds} seconds`);
//   }, seconds * 1000);
// }
// timerCallback((msg) => {
//   console.log(msg);
// }, 2);

//v2 promises

function timerPromise (seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject("Invalid time!")
        }else {
            setTimeout(() => {
                resolve(`Done after ${seconds} seconds `)
            }, seconds * 1000)
        }
    })
}

// timerPromise(2)
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))

// // v3 is ==> promise chaining

// timerPromise(1)
// .then((msg) => {
//     console.log(msg)
//     return timerPromise(2)
// })
// .then((msg) => {
//     console.log(msg);
//     return timerPromise(3)
// })
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))
// .finally(() => console.log("All timers done!"))

// v4 Promise.all()
// Run all timers together and wait

// Promise.all([timerPromise(1), timerPromise(2), timerPromise(3)])
// .then((results) => console.log("all done" , results))
// .catch((err) => console.log(err));

// v5 ===> Promise.race()
// Run all timers together, but only get
// the first one that finishes.

// Promise.race([timerPromise(1), timerPromise(2), timerPromise(3)])
// .then((result) => console.log("First finished" , result))
// .catch((err) => console.log(err));

// v6 ==> async / await (modern syntax)

async function finalRunner() {
    try {
        let timer1 = await timerPromise(3)
        console.log(timer1);
        let timer2 = await timerPromise(2)
        console.log(timer2);
        let timer3 = await timerPromise(1)
        console.log(timer3);
    } catch (error) {
        console.log(error);
    }
}
finalRunner() 

// >