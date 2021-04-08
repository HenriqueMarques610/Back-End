var array=[];

array.push(
    function(){
        //console.log("Hello World 1");
    }
);

array.push(function(params){

});

for (let i = 0; i < 10; i++) {
    array[0](i+1)
}

var array2=[2,3,4,5,6];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    console.log(element);
}

array2.forEach(function(element,i){
    console.log(element);
})