//Formas de executar programas
//1-Executar em modo "normal"
//2-Executar em modo "debug"


var a = 10;
var b = 5;
var c = a + b;
console.log(c);

//Função com nome

function test(msg){
    console.log(msg + "test");
}

test("hello");
test(5);
test(2.5);

//Função sem nome

var fn = function (){
    console.log("anonymous");
}

function log(func){
    func();
}


log(fn);


log(function(){
    console.log("anonymous 2");
});
