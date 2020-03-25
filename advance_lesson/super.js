// aim:dc dung de gọi  doi tuong chac
class Hero {
    constructor(name,hp, damage){
        this.name=name;
        this.hp=hp;
        this.damage=damage;
    }

applyDamege(damage){
    this.hp -= damage;
}

attack(enemy){
    enemy.applyDamege(this.damage);
}

}



class RangeHero extends Hero{//subclass
    constructor(name,hp,damage,range){
        super(name,hp,damage);
        this.range=range;
    }
    attack(enemy)
    {
        super.attack(enemy);
        this.hp +=this.damage;

    }
}

const HeroA=new RangeHero('viet',1000,10);
const HeroB=new Hero('hoang',2000,5);
console.log({HeroA,HeroB});
HeroA.attack(HeroB);
console.log({HeroA,HeroB});

