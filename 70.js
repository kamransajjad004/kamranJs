// Dates in JvaScript

/*
JavaScript Data and time
In JavaScript, date and time are represented by the Date object. The date object provides the
date and time information and also provides various methods.

A JavaScript date defines the EcmnaScript epoch that represents milliseconds since 1 Jan 1970 UTC.
This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date
and time values).

Creating Date Objects
There are four ways to create a date object.

new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

JavaScript has a built-in Date object to handle dates and times.

*/

// const currentDate = new Date ()
// console.log(currentDate);

// const date1 = new Date ("2025-11-10T11:23:45Z")
// console.log(date1);

// const date2 = new Date(2025, 11, 10, 19, 14, 29)
// console.log(date2);

// const date3 = new Date(1762800000000)
// console.log(date3);

const now = new Date()

let getMilliseconds = now.getMilliseconds()
console.log(getMilliseconds)
let getFullYear = now.getFullYear ()
console.log(getFullYear)
let getMonth = now.getMonth()
console.log(getMonth)
let getDate = now.getDate()
console.log(getDate)
let getDay = now.getDay()
console.log(getDay)
let getHours = now.getHours()
console.log(getHours)
let getMinutes = now.getMinutes()
console.log(getMinutes)
let getSeconds =now.getSeconds()
console.log(getSeconds)

// How to get till now milliseconds

console.log(now.getTime());

let tillNowMilliSeconds = Date.now()
console.log(tillNowMilliSeconds);

let tillNow = +new Date()
console.log(tillNow);

console.log("step 1");
setTimeout(()=>console.log(tillNow), 1000 )
console.log("step 2");
setTimeout(()=>console.log(tillNowMilliSeconds), 2000 )
console.log("step 3");
setTimeout(()=>console.log(now.getTime()), 3000 )



