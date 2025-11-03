/*
recursion





*/

// function call(){
//     console.log("Hello CFI");
//     hello()
// }
// hello()
 // 10th line hello()
 // 5th function hello
 // 6th ===> hello cfi
 // 5th function hello
 // 6th ===> hello cfi

 function call(num) {
    console.log("num value = ", num); //10
    if (num == 3)
         {return console.log("stopped");
    }
 console.log("calling the function");
 call(num - 1)
}
 call(5)

 let result = 1
 for (let i = 5; i > 0; i--){
    result = result * i
 }

 console.log(result)

 function fac(n) {
    let finalOutput = 1;
    for (let i = n; i > 0; i--){
        finalOutput *= i
    }
    return finalOutput;
 }

 let answer = fac(4)
 console.log(answer);

 // with recursion

 function factorial(a){
    if (a == 0) return 1;
    return a * factorial(a - 1)
 }

 let output = factorial(10)
 console.log(output);