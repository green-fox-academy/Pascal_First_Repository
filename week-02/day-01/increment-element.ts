'use strict'

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList = [1, 2, 3, 4, 5].map(function(i){
    i = numList[2];
    return i++
})


