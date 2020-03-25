function Animal(name){
        this.name=name;
}

Animal.prototype.eat= function(){
    console.log('Eating ....');
}

function Bird(name){
    Animal.apply(this,arguments);
}

Bird.prototype= new Animal();