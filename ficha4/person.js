function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

Person.prototype.greet =function(){
    console.log("Hello "+this.firstName+" "+this.lastName+" "+this.age);
}

var p1=new Person("David","Jardim",23);
var p2=new Person("Maria","Pontes",53);

p1.greet();
p2.greet();

console.log(p1.__proto__);
