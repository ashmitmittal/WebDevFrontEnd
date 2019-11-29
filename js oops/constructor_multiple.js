//first constructor
function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

//second constructor
function Motorctcle(make,model,year) {
    //using call
    Car.call(this,make,model,year); // now we don't need to define that again here
    this.numWheels = 2;
}

//some otherways of writing this other than call
function Motorctcle(make,model,year) {
    //using apply
    Car.apply(this,[make,model,year]);
    this.numWheels =2;
}

function Motorctcle() { //we don't need to pass in parameters
    //using apply with arguments
    Car.apply(this,arguments);
    this.numWheels =2;
}