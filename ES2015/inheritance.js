class Person {
    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

class Student extends Person {
    
}