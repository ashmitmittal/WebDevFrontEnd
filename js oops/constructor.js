function Dog(name,age) {
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name+" just barked");
    }
}

var rusty = new Dog('rusty',3);
var fido = new Dog('fido',3);

rusty.bark() // rusty just barked
fido.bark() // fido just barked