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
//console.log(count);

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

    //console.log("Tempo de trabalho: "+hours+":"+minutos+":"+minutosRestantes);
}

calcularTrabalho(8,35,0,16,0,30)

//Alinea 6 ---------------------------------

function retangulo(largura,altura){

    for (let j = 0; j < altura; j++) {
        var linha="";
        for (let i = 0; i < largura; i++) {
            linha+="*";
        }
        //console.log(linha)
    }
}

retangulo(5,3);

//Alinea 7 ---------------------------------

function triangulo(altura){

    var linha="";
    for (let j = 1; j <= altura; j++) {
        linha +="*"
        //console.log(linha)
    }
}

triangulo(10);

//Alinea 8 --------------------------------

function caixa(largura,altura){

    for (let j = 0; j < altura; j++) {
        var linha="";
        for (let i = 0; i < largura; i++) {
            if(j==0 || j==altura -1 || i==0 || i== largura -1){
                linha +="*"
            }
            else{
                linha += " ";
            }
        }
        console.log(linha)
    }
}

console.log("");

caixa(10,10);

array2d=[[3,5,6,7]
        [9,4,1,3]
        [9,4,2,7]]

//var x=array2d[i][j];

//Alinea 9 ---------------------------------

var estudante1 = {firstName: "Pedro",lastName: "Marques",age:20,grade:16.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante2 = {firstName: "David",lastName: "Tiago",age:21,grade:15.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante3 = {firstName: "Sofia",lastName: "Bond",age:22,grade:14.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante4 = {firstName: "Marco",lastName: "Saint",age:23,grade:13.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante5 = {firstName: "Andre",lastName: "Raul",age:24,grade:12.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante6 = {firstName: "Ana",lastName: "Duarte",age:25,grade:11.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante7 = {firstName: "Joana",lastName: "Matos",age:26,grade:17.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante8 = {firstName: "Paulo",lastName: "Figueira",age:27,grade:18.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}
var estudante9 = {firstName: "Ivan",lastName: "Santos",age:28,grade:19.5, getGrade: function(){
    return this.firstName+" "+this.lastName+"com idade: "+this.age+" teve: "+ this.grade
}}

var estudantesList=[];

estudantesList.push(estudante1);
estudantesList.push(estudante2);
estudantesList.push(estudante3);
estudantesList.push(estudante4);
estudantesList.push(estudante5);
estudantesList.push(estudante6);
estudantesList.push(estudante7);
estudantesList.push(estudante8);
estudantesList.push(estudante9);


function mostrarNotas(array){
    for (let i = 0; i < array.length; i++) {
        const estudante = array[i];
        console.log(estudante.getGrade());
    }
}

console.log("Alinea 9")
mostrarNotas(estudantesList)

function obterMelhorNota(array){
    var max=array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].grade>max.grade){
            max = array[i];
        }  
    }
    return max;
}
var melhorNota= obterMelhorNota(estudantesList);
console.log("Melhor nota: "+melhorNota.getGrade());

function obterPiorNota(array){
    var max=array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].grade<max.grade){
            max = array[i];
        }  
    }
    return max;
}
var piorNota= obterPiorNota(estudantesList);
console.log("Pior nota: "+piorNota.getGrade());

function obterNotasNegativas(array){
    console.log("Nota Negativa")
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        if(array[i].grade<9.5){
            console.log(estudante.getGrade());
        }
    }
}
var negativas=obterNotasNegativas(estudantesList)

function getAverage(array){
    var average=0;
    for (let i = 0; i < array.length; i++) {
        average += array[i].grade;
    }
    average=average / array.length;
    return average
}
var studentAverage=getAverage(estudantesList);
console.log("Media: "+studentAverage);

function getClosestFromAverage(array){
    var average=getAverage(array);
    var min=array[0];
    var index=0;
    for (let i = 0; i < array.length; i++) {
        var diff=Math.abs(array[i].grade - average);
        if(diff<min){
            min=diff;
            index=i;
        }
    }
    return array[index];
}