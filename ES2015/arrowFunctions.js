// =>

var arr = [1,2,3];
arr.map(value => value*2);


var instructor = {
    firstname: "Ashi",
    sayHi: function() {
        setTimeout( () => {
            console.log("Hello",this.firstname);
        },1000);
    }
}

instructor.sayHi();



//double odd number with arrow functions
let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val *2);