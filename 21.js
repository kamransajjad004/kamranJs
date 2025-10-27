// If else statement

/*

if...else is used to run code conditionalyy - only when a specific
expression evaluates to true.

*/

// There r 3 types of if else statements

//1. if statement
//2. if ...else statement
//3. if ...else if ...else

let age = 23

if (age >= 18) {
    console.log("hello adult");
}
console.log("hi bacche");

// If logic to check the age to vote

if (age >= 18) {
    console.log("you can vote")
}
else {
    console.log("cannot vote")
 }

//if ....else if ...else
//if ===> 1st condition
//else if ===> 2nd to nth condition
//else ===> false condition



//I want to make a program
//based on numbers i want to assigned

//90 - 100 ==> A+
//80 - 90 ==> A
//70 - 80 ==> B+
//60 - 70 ==> B
//50 - 60 ==> C
//40 - 50 ==> D
//30 - 0 ==> Fail


let marks = 25

if (marks >= 90)
 {
    console.log("A+");
}

else if (marks >= 80) 
{
    console.log("A");
}

else if (marks >= 70) {
    console.log("B+");
} 

else if (marks >= 60) {
    console.log("B");
}

else if (marks >= 50) {
    console.log("C");
}

else { 
    console.log("You Failed");
 }


 // if temp is greater than 35 ===> its hot
 //if temp is greater than 25 ==> its nice and normal
 // or else it cold

 //let temp = 40

 //if (temp >= 35){
 //   console.log("its hot");
 //}
 //else if (temp >= 25){
   // console.log("its nice and normal");
 //}
 //else {"its cold"}

temp = 18

if (temp >=25){
    console.log("its nice and normal");
}
else if (temp >= 19){
    console.log("cold");
}
else console.log("very cold");


let a = 2

if (a >=3){
    console.log("ok");
}
else if (a >=2){
    console.log("not ok");
}
else console.log("okok");








