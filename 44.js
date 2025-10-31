const num = Array.from ({length: 1000}, (_, i) => i + 1)
console.log(num);


// for(let i = 1; i<= 3; i++){
//     console.log(`Outer Loop`, i);

// for(let j = 1; j<= 3; j++){ 
//     console.log(`Outer Loop`, j);
// }}

for (let i = 1; i <= 5; i++){
    let row = "";
    console.log(row, "Outer loop");
    for (let j = 1; j <= i; j++){
        row += "* ";
        console.log(row, "Inner loop");
    }
    console.log(row,"answer");
}