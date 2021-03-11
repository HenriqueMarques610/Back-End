var a = 10;
var b = 5;

var c = a + b;

//console.log(c);

//Exercicio 5

var miniProj = 16;
var freq = 10;
var projFinal = 12;

var notaFinal = miniProj * 0.3 + freq * 0.3 + projFinal * 0.4;

//Propriedade
Math.PI;

//Função
Math.round();

//Concatenar uma string
//console.log("A avaliação final é :" + Math.round(notaFinal) + " valores");

//Exercicio 6
var month = 0;

// switch (month) {
//     case 1:
//         console.log("Janeiro")
//         break;
//     case 2:
//         console.log("Fevereiro")
//         break;
//     case 3:
//         console.log("Março")
//         break;
//     case 4:
//         console.log("Abril")
//         break;
//     case 5:
//         console.log("Maio")
//         break;
//     case 6:
//         console.log("Junho")
//         break;
//     case 7:
//         console.log("Julho")
//         break;
//     case 8:
//         console.log("Agosto")
//         break;
//     case 9:
//         console.log("Setembro")
//         break;
//     case 10:
//         console.log("Outubro")
//         break;
//     case 11:
//         console.log("Novembro")
//         break;
//     case 12:
//         console.log("Dezembro")
//         break;
//     default:
//         console.log("Mês Invalido")
//         break;
// }

// var months=["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

// if(months[month-1]==undefined)
// {
//     console.log("Mes Invalido")
// }
// else
// {
//     console.log(months[month-1]);
// }

// if(month-1>12 || month-1<1)
// {
//     console.log("Mes invalido")
// }
// else
// {
//     console.log(months[month-1]);
// }


// if(month==1)
// {
//     console.log("Janeiro");
// }
// else if(month==2)
// {
//     console.log("Fevereiro");
// }
// else if(month==3)
// {
//     console.log("Março");
// }

//7

var operador1=2;
var operador2=2;
var operando="^";
resultado=0

if(operando=="+")
{
    resultado=operador1+operador2
}
else if(operando=="-")
{
    resultado=operador1-operador2
}
else if(operando=="*")
{
    resultado=operador1*operador2
}
else if(operando=="/")
{
    resultado=operador1/operador2
}
else if(operando=="^")
{
    resultado=Math.pow(operador1,operador2)
}

// console.log(resultado)

//8
var i=0;

var d=3/2;
var r=3%2;

// console.log("Divisao: "+d);
// console.log("Divisao: "+r);

//guarda ou codição
// while(i<=20)
// {
//     console.log(i);
//     i+=5;
// }

// for(let j=0; j<=20;j++)
// {
//     if(j%5==0)
//     {
//         console.log(j);
//     }
// }

// for(let j=0; j<=20;j+=5)
// {
//         console.log(j);
// }

//9
var sum=0;

for(let j=0;j<=100;j++)
{
    sum=sum+j;
}
//console.log(sum)

//10
var fact=1;

for(let j=1; j<=3;j++)
{
    fact*=j;
    //1*1=1
    //1*2=2
    //2*3=6
}

//console.log(fact);

//11

var array = [1,4,5,6,0,12];

var max=array[0];
for(let i=0;i<array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
}
console.log(max);


var min=array[0];
for(let i=0;i<array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i];
    }
}
console.log(min);


var soma=0;
var med=0
for(let i=0;i<array.length;i++)
{
    soma+=array[i];
}
med=soma/array.length;
console.log(med);