/**
 * Simplest constructor is using object.create
 * This assigns the object as the .__proto__ field of the new object, and the 
 * child object inherits the properties of the parent object
 * 
 * Furthermore, if properties are accessed on the child object, but not found, 
 * they are searched for up the object chain.
 * 
 * A parent child relationship can be created anytime by assigning an object's
 * .__proto__ field to another object.
 * 
 * 
 */

 /**
  * Constructor functions - a function used to create new objects. 
  *     1. It must assign values to 'this'
  *     2. functions must be called with the 'new' keyword
  * 
  */

function personConstructor(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function() { 
        console.log(`Hello I'm ${this.firstName} ${this.lastName}`);
    }
}

const billy = new personConstructor('Billy', 'Bob');
billy.sayHello();