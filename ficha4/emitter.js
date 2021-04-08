class Emitter {
    constructor() {
        //Propriedade
        this.events = {};
    }
}

//Funcao
Emitter.prototype.on = function (type, listener) {
    if (this.events[type] == undefined) {
        this.events[type] = [];
    }
    this.events[type].push(listener)

    //var z=this.events.teste;//2
    //var y=this.events.prog;//3
    //var w=this.events.benfica//Nulo ou undefined
    //Mesma funcao que o que esta em baixo
    //this.events["login"]
    //this.events[type] =[] ;
}

Emitter.prototype.emit = function (type) {
    if (this.events[type] != undefined) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports=Emitter;
var x = 0