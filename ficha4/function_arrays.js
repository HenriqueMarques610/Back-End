var array=[];

array.push(
    function(){
        console.log("Hello World 1");
    }
);

array.push(function(params){

});

for (let i = 0; i < 10; i++) {
    array[0](i+1)
}