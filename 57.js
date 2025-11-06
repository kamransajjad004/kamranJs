// try ...catch...finally
// Its a way to handle errors in Javascript so your
// program doesn't crash.

// Syntax

try{
    //code that might cause an error
} catch (error) {
    // Code that runs *if* an error happens
} finally {
    // code that always runs (error or not
}

try{
    let output = 10 / 0;
    console.log(output)
    console.log(output + a )
} catch (error) {
    console.log("Error");
    console.log(error.name, error.message);
} finally {
    console.log("Hello I ll be there");
}