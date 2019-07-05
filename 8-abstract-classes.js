abstract;
var Animal = (function () {
    function Animal() {
        this.abstract = makeSound();
    }
    Animal.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return Animal;
})();
