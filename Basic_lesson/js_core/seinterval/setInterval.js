var fs=require('promise-fs')
var promise =require('promise');

function countForm(a,b){
    return new Promise(function(resolve,reject){
        var x=setInterval(function(){
            console.log(a);
            ++a;
            if(a===(b+1)){
                clearInterval(x);
                resolve();
            }
        },1000);
    });
}
countForm(1,10)
    .then(function(){ console.log('Done');})
    .catch(function(){console.log('false');})
