// Object.freeze()

/*
Freezes an object so that

you cannot add, remove, or change properties

it makes the object completely immutable
*/

let a = {
    name: "kamran",
    age: "20",
    city: "hyd"
}

console.log(Object.freeze(a));
a.name = "kam"
delete a.city
console.log(a);

// 5. isFrozen

/* it gives an output of boolean values if the arrays is either true or false*/

let b = {
    name: "kamran",
    age: "20",
    city: "hyd"
}

console.log(Object.isFrozen(b));


