var person = {
    name: "David",
    age: 23,
    gender: "male"
};

var personAsJson = JSON.stringify(person);

console.log(personAsJson.age);

var property = "name"

console.log(person[property]);

//var personAsObject=JSON.parse('{"name":"David",age:23,gender:"male"}');

//console.log(personAsObject.name);

var Emitter = require("./emitter.js");
var constants=require("./config.js")

//===============================================

//Criacao de uma nova instancia do class Emitter
var emitter = new Emitter();
//invocacao do metodo ON
emitter.on(constants.events.LOGIN, function () {
    console.log("O evento login 1 foi despoletado")
});

emitter.on(constants.events.LOGIN, function () {
    console.log("O evento login 2 foi despoletado")
});

emitter.on(constants.events.LOGOUT, function () {
    console.log("O evento logout foi despoletado")
});

emitter.emit(constants.events.LOGIN);
emitter.emit(constants.events.LOGOUT);