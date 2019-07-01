'use strict'

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)



function printParams(greet: string, name: string) {
    console.log(arguments[0], arguments[1])
}

printParams('Hali', 'Jani')