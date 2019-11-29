function Vehicle(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    if(this.isRunning) {
        return "beep";
    }
}
//=============
// INHERITANCE
//=============


function Car(make,model,year) {
    Vehicle.apply(this,arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make,model,year) {
    Vehicle.apply(this,arguments);
    this.numWheels = 2;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;