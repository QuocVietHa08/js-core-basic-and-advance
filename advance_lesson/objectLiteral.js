//la 1 dang viet tat cua ES6 
/*
    khai bao 1 function bth se ntn:
    var name='viet';
    var read{
        name:name;
        sayHi:function(){
            console.log('Hi" + this.name);
        }
    }

*/
var name="viet";
var reade={
    name,
    sayHi(){
        console.log('Hi' + this.name);
    }
};
reade.sayHi();