class Parent {
    firstName: string;
    lastName: string;
    constructor(fn: string, ln:string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    sayHello () { console.log(`Hello my name is ${this.firstName} ${this.lastName}`); }

}

// child inherits firstName, lastName from parent
// super is a call to the parent class, and needs to be in the child constructor
// do not necessarily need a child constructor if parent constructor is enough for our purposes
class Child extends Parent {
    birthday: Date;
    constructor(fn: string, ln:string, date: Date = new Date()) {
        super(fn, ln);
        this.birthday = date;
    }
    sayHello () { console.log(`Hi mister! I'm ${this.firstName}`); }
}

// we can label these objects as Child/Parent if they're childs, this is a polymorphic reference
// if we call them Parent, we can only access the methods/fields defined on parent (such as sayHello)
let Mark: Parent = new Parent('Mark', 'Manson');
let Beth: Parent = new Child('Beth', 'Manson');
let Becca: Parent = new Child('Becca', 'Manson');

let people: Array<Parent> = [Mark, Beth, Becca];
people.forEach(p => p.sayHello() );

