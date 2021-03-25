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
var otherArray=[7,10];

console.log("O array esta vazio? "+arrayUtils.isEmpty(array));
console.log("O maximo do array é: "+arrayUtils.Max(array));
console.log("O minimo do array é: "+arrayUtils.Min(array));
console.log("A media do array é: "+arrayUtils.Average(array));

var value=6;
console.log("O indice do valor é: "+ value +" é:"+arrayUtils.indexOf(array,value));

var subArray=arrayUtils.subArray(array,3,5);
console.log("O sub array é: "+subArray)

var sameSize= arrayUtils.isSameLength(array,otherArray)
console.log("Os array sao do mesmo tamanho?: "+sameSize);

var invertedArray=arrayUtils.reverse(array);
console.log("O array invertido fica: "+invertedArray)

var swappedArray=arrayUtils.swap(array,0,4);
console.log("O array alterado é: "+swappedArray)

console.log("O contem o valor "+value+"? "+ arrayUtils.contains(array,value));

var concatArray=arrayUtils.concat(array,otherArray);
console.log("O array concatenado é: "+concatArray);