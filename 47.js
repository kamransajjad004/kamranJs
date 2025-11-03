// 22. filter method
/*The filter() method creates a new array filled with element
that pass a test (a cindition you define in a function.)

It does not change the original array

*/

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let output = arr.filter((x)=>{return x 5})

// let arr1 = [10,20,30,40,50]

// let output1 = arr1.filter((x))

let classroom = [
    {
        fullName: "Kamran",
        age: 21,
        college: "MJ"
    },
    {
        fullName: "Ibrahim ",
        age: 81,
        college: "MJ"
    },
    {
        fullName: "Kaif",
        age: 21,
        college: "lords"
    },
    {
        fullName: "Malik",
        age: 40,
        college: "Drop"
    }
]

let output2 = classroom.filter((a) => a.age < 40);

console.log(output2);