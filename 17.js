//Ex : let a = "10"





//There are two types of conversions in Js
//1.Implicit conversation
//2.Explicit conversation

//1.Implicit Conversions : ==> Automatic Conversations
//Anything (any datatype) to string

let result = 2 + "1"
console.log(result)

let a = 2 + 2
console.log(a);

let b = 2 + true
console.log(b);

let c = 2 + undefined
console.log(c);

let d = 2 + null
console.log(d);

//anything to number(-*/)

let e = '5' - '3'
let f = '5' / '3'
let g = '5' *'3'
let h = '5' - 'hi'
console.log(e,f,g,h)

//anything to boolean

let a1 = "2" + true
let a2 = 2 + true
let a3 = 0 - false
console.log(a3)

//Null to Number 

let c1 = 4 + null
console.log(c1)

//undefined to null

let d1 =  undefined + 1
console.log(d1) 

