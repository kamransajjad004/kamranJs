//Explicit Conversion ==> Manual Conversion

//1.Using Number() Method

let a = Number("10")
console.log(a);

a = Number(true)
console.log(a);

a = Number(null)
console.log(a);

a = Number('')
console.log(a);


// String Method

let b = String(234)
console.log(b);

b = String(true)
console.log(b);

b = String(null)
console.log(b);

b = String(undefined) 
console.log(b);

//

let c = Boolean(234)
console.log(c);
c = Boolean(null)
console.log(c);
c = Boolean("true")
console.log(c);
c = Boolean(undefined)
console.log(c);
c = Boolean("5")
console.log(c);