class Person {
    constructor(firstName, lastName) { 
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello = function() { 
        console.log(`Hello I'm ${this.firstName} ${this.lastName}`);
    }
}

let abby = new Person('Abby', 'Alongi');
console.log(abby);

// creating child classes off parent objects
myChild = Object.create(Person)

