class Emitter{
    constructor(){
        //Propriedade
        this.events= {};
    }
}

//Funcao
Emitter.prototype.on =function(type,listener){
    console.log("Type: "+type+", Listener: "+listener);
}

//Criacao de uma nova instancia do class Emitter
var emitter=new Emitter();
//invocacao do metodo ON
emitter.on("Tipo","Ouvinte")