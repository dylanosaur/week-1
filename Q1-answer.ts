/*
 * Access modifiers are keywords attached to class members (fields and methods)
    to define where these fields/methods can be called from.
    TypeScript defines 3 access levels:
    public - can be accessed anywhere (Default)
    protected - can be accessed from extending classes
    private - can be accessed only from within defining class
 
    (Access modifiers are part of the encapsulation pillar of OOP)
    Encapsulation is the idea that a class or object should maintain
    its own state, which should not be directly accessed by any external
    code.
*/

class MyEncapsulatedClass {
    private privateField: string;
    protected protectedField: string;
    public publicField: string;

    constructor(a: string, b: string, c: string) {
        this.privateField = a;
        this.protectedField = b;
        this.publicField = c;
    }

    internalMethod() {
        this.privateField; // accessible
        this.protectedField; // accessible
        this.publicField; // accessible
    }
}



const instance: MyEncapsulatedClass =
         new MyEncapsulatedClass('private', 'protected', 'public');

//instance.privateField // not accessible, we're outside the class
//instance.protectedField // not accessible, we're outside any extending class
instance.publicField // accessible