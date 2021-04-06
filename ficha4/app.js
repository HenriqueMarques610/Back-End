var person = {
    name:"David",
    age:23,
    gender:"male"
};

var personAsJson=JSON.stringify(person);

//console.log(personAsJson.age);

var property="name"

console.log(person[property]);

console.log(personAsJson.age);

var personAsObject=JSON.parse('{"name":"David",age:23,gender:"male"}');

console.log(personAsObject.name);