var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Parent = (function () {
    function Parent(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Parent.prototype.sayHello = function () { console.log("Hello my name is " + this.firstName + " " + this.lastName); };
    return Parent;
})();
// child inherits firstName, lastName from parent
// super is a call to the parent class, and needs to be in the child constructor
// do not necessarily need a child constructor if parent constructor is enough for our purposes
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(fn, ln, date) {
        if (date === void 0) { date = new Date(); }
        _super.call(this, fn, ln);
        this.birthday = date;
    }
    Child.prototype.sayHello = function () { console.log("Hi mister! I'm " + this.firstName); };
    return Child;
})(Parent);
var Mark = new Parent('Mark', 'Manson');
var Beth = new Child('Beth', 'Manson');
var Becca = new Child('Becca', 'Manson');
var people = [Mark, Beth, Becca];
people.forEach(function (p) { return p.sayHello(); });
