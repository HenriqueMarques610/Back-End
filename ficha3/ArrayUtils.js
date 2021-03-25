var arrayUtils={
    isEmpty: function(array){
        if(array!=undefined && array!=null){
            return  array.length==0;
        }
        else{
            return "Array is undefined";
        }
        
    },
    Max: function(array){
        var m=array[0];
        for (let i = 1; i < array.length; i++) {
            if(array[i]>m){
                m=array[i];
            }
        }
        return m;
    },
    Min: function(array){
        var m=array[0];
        for (let i = 1; i < array.length; i++) {
            if(array[i]<m){
                m=array[i];
            }
        }
        return m;
    },
    Average: function(array){
        var sum=0
        for (let i = 0; i < array.length; i++) {
            sum+=array[i];
        }
        var avg=sum/array.length;
        return avg;
    },
    indexOf: function(array,value){
        var sum=0
        for (let i = 0; i < array.length; i++) {
            if(value==array[i]){
                return i;
            }
        }
     
        return -1;
    },
    subArray: function(array,startIndex,endIndex){
        var a=[];
        for (let i = startIndex; i <= endIndex; i++) {
            a.push(array[i]);
        }
        return a;
    },
    isSameLength: function(array,otherArray){
        return array.length==otherArray.length
    },
    reverse: function(array){
        var r=[];
        for (let i = array.length-1; i >= 0; i--) {
            r.push(array[i]);
        }
        return r;
    },
    swap: function(array,index1,index2){
        
        //Obter valor que esta num determinado indice no array
        var val1=array[index1];
        var val2=array[index2];

        //Alterar um determinado indice com outro valor
        array[index1]=val2;
        array[index2]=val1;

        return array;
    },
    contains: function(array,value){
        // var sum=0
        // for (let i = 0; i < array.length; i++) {
        //     if(value==array[i]){
        //         return true;
        //     }
        // }
        // return false;

        //Forma mais simplificada
        return this.indexOf(array,value)!=-1
    },
    concat: function(array,otherArray){
        var concatArray=array;
        for (let i = 0; i < otherArray.length; i++) {
            concatArray.push(otherArray[i])
            
        }
        return concatArray;
    },

};

module.exports=arrayUtils;
