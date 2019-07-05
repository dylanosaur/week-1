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

interface ElevatorInterface { 
    targetFloor: number;
    goToFloor(targetFloor:number) : boolean
}

class Elevator implements ElevatorInterface {
    targetFloor: number;
    bottomFloor: number;
    topFloor: number;

    constructor(initialFloor: number=1, bottomFloor: number = 1, topFloor: number=2) { 
        this.targetFloor = initialFloor;
        this.bottomFloor = bottomFloor;
        this.topFloor = topFloor;
    }

    /**
     * a floor is invalid if it is below the bottom floor, above the top floor, or non-integer
     */
    private invalidFloor(floor: number): boolean {
        if ((floor%1 == 0) && (floor>=this.bottomFloor) && (floor<=this.topFloor)) { return false;}
        else {return true}
    }
    goToFloor(targetFloor: number): boolean {
        if (this.invalidFloor(targetFloor)) { 
            console.log('invalid floor!'); 
            this.targetFloor = targetFloor; 
            return false;}
        console.log(this.targetFloor, targetFloor);
        if (this.targetFloor < targetFloor) { console.log('going up');}
        else if (this.targetFloor === targetFloor) {console.log('at correct floor - ding!'); }
        else {console.log('going down'); }
        this.targetFloor = targetFloor; 
        return true
    }
}

let myElevator = new Elevator(1,1,10)
myElevator.goToFloor(3);
myElevator.goToFloor(2);
myElevator.goToFloor(2);