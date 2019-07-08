/* 
Write a function that accepts two arguments: an array and a function
----
parameters: (myArray: array, f: function)
----
and returns an array that is equivalent to myArray.forEach(v=>f(v)) without 
ever explicitly calling the forEach method
*/

let myfunction = function(myArray, f) {
    let newArray = []
    for (let key in myArray) { 
        newArray[key] = f(myArray[key])
    }
    return newArray
}

let exampleF= a => (a*a*a)
let exampleArray = [2,5,10]
console.log(myfunction(exampleArray, exampleF));
