// String Methods
//1 . charAt()

let str1 = "Hello"
//          01234
console.log(str1.charAt(4,));

//2. concat()
let a1 = "hello"
let b1 = "World"

console.log(a1.concat(b1));

//3. includes

let a = "Hello I am CFI Students"
console.log(a.includes("z"));

//4. Length

let b = "Hello I am CFI Students"
console.log(b.length);

//5. indexOf

let c = "Hello I am CFI Students"
console.log(c.indexOf("e"));

let d = "Hello I am CFI Students"
console.log(d.lastIndexOf("S"));

//7. repeat() Method

let e1 = "Test CFI \n"
console.log(e1.repeat(10));

//8. replace()

let f = "Test CFI "
console.log(f.replace("CFI", "hehe"));

//9. split Method

let g = "Hello, I, am, Kamran"
console.log(g.split(","));

//10. toUpperCase() Method

let h = "Hello, I, am, Kamran"
console.log(h.toUpperCase());

//11.toLowerCase()

console.log(h.toLowerCase());

//12. trim() Method

let i = "   Hello I am CFI"
console.log(i.trim());
console.log(i);

//13. slice() Method

let m = "Hello";
console.log(m.slice(0,4));

//14. padStart method

let n = "Hello"
console.log(n.padStart(10, "*"));

//15. padEnd method

console.log(n.padEnd(10, "9"));