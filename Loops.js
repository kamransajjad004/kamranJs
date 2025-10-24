// @ts-nocheck
//                  JS COMMANDS

// Loops

//1.for loops
  for (let i = 3; i <=5; i++){
    console.log("hello cfi");
}
// 2. while loop
let i = 1;
while (i <=5){
    console.log("hello cfi"); i++
}
//3. do while loop 
let = 1
do {
    console.log(i);
    i++
}while (i <= 5);

// for loop table

for (let i =  1; i <=10; i++){
    console.log(`2 x ${i} = ${i *2}`);
}


//Break nd continue

for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i == 5){
        console.log("i have stopped");
        break;
    }
}

// Continue loop

for (let i = 1; i <=10; i++){
    if (i ==5){
        continue
    }console.log(i);
}