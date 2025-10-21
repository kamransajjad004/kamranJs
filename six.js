//Scoping in JavaScript

// There are 3 types of Scoping in JS

// 1.Block Scope
// 2.Functional Scope
// 3.Global Scope

//Block Scope
/*
{

}
*/

// Block Scope                VAR       LET       CONST
// Inside of Block            ✅        ✅          ✅
// Outside of Block           ✅        ❌          ❌
{

    
    console.log(a);    
    
}

const a =  10