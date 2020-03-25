function sum (){
    var result=0;
    for(var i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    console.log(result);
}

sum(1,23,4,5,6);