// for loop

for (let i =  1; i <=100; i++){
    console.log(`100 x ${i} = ${i *100}`);
}

let a = 100
while ( a <=100){;
    console.log(`100 x ${a} = ${a *100}`);a++

}

//Break nd continue

for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i == 5){
        console.log("i have stopped");
        break;
    }
}

for (let i = 1; i <=10; i++){
    if (i ==5){
        continue
    } console.log(i);
}