class vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return "VRROM!"
    }
    tostring(){
        `${this.make} ${this.model} ${this.year}`;
    }
}

class car extends vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 4;
    }
}

class motorcycle extends vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 2;
    }
}