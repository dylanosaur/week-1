/**
 * Interfaces are an object oriented programming structure that defines what functionality a class has
 * but leaves the details of how that functionality is accomplished to the implementating class
 *
 * classes implement the interface by providing the code blocks that accomplish the methods defined
 * in the interface
 *
 * the interfaces are meant to be public and define how other code/coders interact/operate your objects
 *
 */
var Elevator = (function () {
    function Elevator(initialFloor, bottomFloor, topFloor) {
        if (initialFloor === void 0) { initialFloor = 1; }
        if (bottomFloor === void 0) { bottomFloor = 1; }
        if (topFloor === void 0) { topFloor = 2; }
        this.targetFloor = initialFloor;
        this.bottomFloor = bottomFloor;
        this.topFloor = topFloor;
    }
    /**
     * a floor is invalid if it is below the bottom floor, above the top floor, or non-integer
     */
    Elevator.prototype.invalidFloor = function (floor) {
        if ((floor % 1 == 0) && (floor >= this.bottomFloor) && (floor <= this.topFloor)) {
            return false;
        }
        else {
            return true;
        }
    };
    Elevator.prototype.goToFloor = function (targetFloor) {
        if (this.invalidFloor(targetFloor)) {
            console.log('invalid floor!');
            this.targetFloor = targetFloor;
            return false;
        }
        console.log(this.targetFloor, targetFloor);
        if (this.targetFloor < targetFloor) {
            console.log('going up');
        }
        else if (this.targetFloor === targetFloor) {
            console.log('at correct floor - ding!');
        }
        else {
            console.log('going down');
        }
        this.targetFloor = targetFloor;
        return true;
    };
    return Elevator;
})();
var myElevator = new Elevator(1, 1, 10);
myElevator.goToFloor(3);
myElevator.goToFloor(2);
myElevator.goToFloor(2);
