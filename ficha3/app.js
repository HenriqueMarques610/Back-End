function started(){
    console.log("Started Download");
}

function update(value){
        console.log(value + "% of Download")
}

function completed(){
    console.log("Download Completed")
}

function performDownload(started,update,completed){
    started();

    for (let i = 0; i <= 100; i++) {
        update(i);
    }

    completed();
}
//performDownload(started,update,completed);

//==========================================
var log = require("./log.js");

//console.log(log.message);
//console.log(log.functionObj("Hello"));

//==========================================
var arrayUtils=require("./ArrayUtils.js");
var array=[12,4,6,88,9,0];

console.log("O array esta vazio? "+arrayUtils.isEmpty(array));
console.log("O maximo do array é: "+arrayUtils.Max(array));
console.log("O minimo do array é: "+arrayUtils.Min(array));
console.log("A media do array é: "+arrayUtils.Average(array));