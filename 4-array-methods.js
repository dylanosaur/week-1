// methods for functional programming


// counting array
myArray = [...Array(30).keys()]
console.log(myArray);

// filter - filter for the things you want
let newArray = myArray.filter(v => v%2==0);
console.log('evens', newArray)

// map - convert arrays to new values
let squares = myArray.map(v => Math.pow(v,2));
console.log('squares', squares)

// some - returns boolean value to determine if the array contains some item that makes 
// the provided function return true

console.log(squares.some( v => v==784))  // true

// also an every, like some but requires all elements to make callback return true

// forEach - accepts callback function and passes elements as arguments, 1 at a time

// reduce - aggregator operations, order not garunteed
// pass it (aggregator, element v)

sum = squares.reduce( (a,v) => a += v );
console.log('sum', sum)
