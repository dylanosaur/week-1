/**
 * A method of breaking apart data structures into accessible fields. It's used
 * primarily in instances where we have some kind of structure containing data
 * but we want to access the discrete variables
 * 
 */

function getXY() { return [10, 50]; }
const [x, y] = getXY();
let [a, b] = [100,200,300] //a=100, b=200, 300 gone with the wind
let [c, d, ...e] = [100,200,300,400] //c=100, d=200, e =[300, 400]

/**
 * We can also destructure objects but the assignment variables must have 
 * the same names as the properties
 * 
 */

const person = {
     firstName: 'Emily',
     lastName: 'Edwards'
}

let {firstName, lastName} = person;
console.log(firstName, lastName);

/**
 * Although we can map the values to variables
 * 
 */

({firstName: a, lastName: b} = person);
console.log(a, b)