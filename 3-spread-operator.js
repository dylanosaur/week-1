/**
 * The spread operator is used to spread out values from an array or structure into individual values
 * 
 * 
 */

 let originalArray = [1,2,3.4,5,6];
 let spreadArray = [...originalArray];
 spreadArray = [...originalArray, 100, 200] //adding new values
 spreadArray = [...originalArray, ...originalArray] //adding two arrays together

let abby = {
    firstName: 'Abby',
    lastName: 'Anderson'
}

// spreading onto new object
let newAbby = {...abby}

// spreading onto new object and adding other objects
newAbby = {
    ...abby,
    ...{newObjectField: 'information' }
}

// spreading onto new object and adding fields
newAbby = {
    ...abby,
    favoriteColor: 'blue',
}

// this is a shallow copy - copying objects into new objects creates references to objects held by 
// the old object, not entire copies themselves. For a deep copy, copies of the objects held by the object
// to be copied must be done first, and then those object copies assigned when creating the new container object 