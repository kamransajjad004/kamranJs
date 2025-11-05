// 1. parseFloat()

// They are built-in JavaScript functions
// that convert strings into nummbers

// convert to decimal number
// string to number

console.log(parseFloat("43.5"));
console.log(parseFloat("99.43cm23"));
console.log(parseFloat("cm 99.23"));
console.log(parseFloat("a12b3c"));

// 2. parseInt ...converts to number
// we use parseInt for number systems

console.log(parseInt("1111", 2));
console.log(parseInt("1010", 2));
console.log(parseInt("1000", 2));
console.log(parseInt("1100100", 2));
console.log(parseInt("1100011", 2));

console.log(parseInt("45.4543"));

// 3. toFixed()
// toFixed() round offs the number nd if numbers is given in the ()
// it provides the samw amount of digits nd if there is more numbers
// it will add that amount of zeros in the end of the number

let number = 57.749652

console.log(number.toFixed());
console.log(number.toFixed(1));
console.log(number.toFixed(7));
console.log(number.toFixed(2));

// 4. toLocaleSring

/*
toLocaleString() is a number method thats formats a number
according to a specific locale (country/language) or style -
like adding commas , currency, or percentage.

syntax ===> number.toLocaleString([locales], [options])

locales => optional string like "en-US", 'hi-IN", "de-DE", etc.
(defines language and region format)

options => optional object to control formatting style
(currency, decimals, etc.)
*/

let num = 12355555555

console.log(num.toLocaleString("hi-IN"))

let price = 2500

console.log(price.toLocaleString("en-US", { style: "currency", currency: "USD"}))
console.log(price.toLocaleString("en-US", { style: "currency", currency: "USD"}))
console.log(price.toLocaleString("en-US", { style: "currency", currency: "USD"}))
console.log(price.toLocaleString("en-US", { style: "currency", currency: "USD"}))

