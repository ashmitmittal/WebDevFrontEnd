class student {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj) {
        return obj.constructor === student;
    }
}


var s = student('ashmit','mittal');
student.isStudent(s); // true