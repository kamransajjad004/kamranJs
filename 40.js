// 22. map() method

// map method
// Transforms each element returns a new array

//Return value : New array
// chainable : yes
// Changes original array : yes
// Common Use : Creating new arrays

// ex: creates in a new array with modified values and
// returns in a new array by default

let nums = [1,2,3,4,5]

let final = nums.map((x) => x * 2);
console.log(final);

// mutatating vs non mutating

/*
1 push
2 pop
3 shift
4 unshift
5 slice
6 sort
7 reverse
8 forEach (with forcefully)

non mutating

1 map
2 filter
3 slice
4 concat
5 reduce
