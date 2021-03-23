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
};

module.exports=arrayUtils;
