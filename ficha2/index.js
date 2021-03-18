//inputs ?
//peso e altura

//outputs?
//imc

//Alinea 1 -----------------------------
// function calcularimc(peso,altura){
//     var imc=peso/Math.pow(altura,2);
//     return imc;
// }

function logimc(peso,altura){
    var imc = calcularimc(peso,altura);
    if(imc<18.5){
        console.log("IMC: " + imc + ", Esta abaixo do peso");
    }
    else if(imc >=18.5 && imc<25){
        console.log("IMC: " + imc + ", Esta no peso normal");
    }
    else if(imc >=25 && imc<30){
        console.log("IMC: " + imc + ", Esta acima do peso");
    }
    else{
        console.log("IMC: " + imc + ", Obeso");
    }
}

//logimc(40,2);

//Invocação da função com argumentos e atribuição
//Usar variavel quando queremos guardar o valor
//var imc = calcularimc(80,2);
//console.log(imc);

//Usar este quando so queremos o resultado sem guardar a variavel
//console.log(calcularimc(80,2));


//Alinea 2 ---------------------------

function inverterpalavra(str){
    var inv="";
    for (let index = str.length-1; index >= 0; index--){
        inv += str[index];
    }
    return inv;
}

function inverterstring(str){
    var inv="";
    var split = str.split(" ");
    for (let index = 0; index < split.length; index++) {
        var word = inverterpalavra(split[index])
        inv += word + " ";
    }
    return inv;
}

var inverterstr = inverterstring("Hoje é Domingo");
//console.log(inverterstr);


//Alinea 3 --------------------------

function contarvogal(str){
    var count=0;
//     var vogal=["a","e","i","o","u"];

//     for (let index = 0; index < str.length; index++) {
//         for (let j = 0; j < vogal.length; j++) {
//             if(str[index]==vogal[j]){
//                 count++
//             }
//         }
//     }

    for (let index = 0; index < str.length; index++) {
        if(str[index]=="a" || str[index]=="e" || str[index]=="i" || str[index]=="o" || str[index]=="u"){
            count++;
        }
    }
    return count;
}
var vogal = contarvogal("Hello");
//console.log(vogal);

//Alinea 4 ---------------------------

function contarletra(str,letra){
    str= str.toLowerCase();
    var count=0;
    for (let index = 0; index < str.length; index++) {
        if(str[index]== letra){
            count++;
        }
    }
    return count;
}


var count = contarletra("HellE","e");
console.log(count);

//Alinea 5 ---------------------------

function calcularTrabalho(he,me,se,hs,ms,ss){

    if(he<8 || hs>18){
        console.log("Horario nao permitido");
        return
    }

    var enterInSeconds=he*3600+me*60+se;
    var exitInSeconds=hs*3600+ms*60+ss;

    var timeInSeconds=exitInSeconds-enterInSeconds;

    var horasRestantes=timeInSeconds%3600;
    var hours=(timeInSeconds-horasRestantes)/3600;

    var minutosRestantes=horasRestantes%60;
    var minutos=(horasRestantes-minutosRestantes)/60;

    console.log("Tempo de trabalho: "+hours+":"+minutos+":"+minutosRestantes);
}

calcularTrabalho(8,35,0,16,0,30)