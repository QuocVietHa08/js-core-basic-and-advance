var a ={
    name:"viet",
    sayHi:function(){
        console.log('my name is',this.name);
    }
};
//a.sayHi();

var speak=a.sayHi.bind(a);
speak();