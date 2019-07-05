/**
 * TypeScript is a superset of JavaScript (includes and extends JS)
 * The main reason we might choose ot use TS is that it allows static typing
 * with tooling support: a language feature that allows variable typing and
 * prevents invalid type assignment
 * 
 * Write TS then transpile/convert to JS
 * can even convert newer TS to old JS - these are polyfills
 * lets dev use newer features faster
 * 
 * Also has more OOP support: interfaces, abstract classes, etc...
 * 
 * to transpile with tsc we can use tsc file.ts at the cmd line
 */

 // declaring type

 let myString : string = 'this is a string'
 

class PersonTS { 
    firstName : string;
    lastName: string;

    // declaring constructor argument types
    constructor(fn: string, ln: string){
        this.firstName = fn;
        this.lastName = ln;
    }

    // declaring function return types
    sayHello() : void { console.log(`Hello I'm ${this.firstName} ${this.lastName}`)}

}

const Bobby = new Person('Bobby', 'Boberson')

// we can tell TS to not infer types on certain variables with the any type
let x : any = 'string'
x = 5
// but we can't assign this to a string/number type, since it is of type any
// ok well apparently it depends on the compiler
let myNum : number = x;

// we can do multiple types
let multiType : number | string = 5
multiType = 'its a string now'
// we can explicitly tell TSC to trust the programmer on the type though

let aString : string = <string> multiType;

// Generics: providing labels for classes about what they should hold
const myArr: Array<number> = []
myArr.push(0)
//myArr.push('cat') // doesn't work

