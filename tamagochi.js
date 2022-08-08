class Tamagochi {
    constructor( hunger, mood, name, stamina) {
        this._hunger = hunger;
        this._mood = mood;
        this._name = name;
        this._stamina = stamina;
        
    }
    get hunger (){
        return this._hunger;
    }
    get mood (){
        return this._mood;
    }
    get stamina (){
        return this._stamina;
    }
    eat (hunger) {
        this.Tamagochi.hunger = this.Tamagagochi.hunger - 2,
        this.Tamagochi.this.stamina = this.Tamagagochi.stamina - 1;
        
    }
    play() {
        return  this.hunger = this.hunger + 1,
                this.mood = this.mood + 1,
                this.stamina = this.stamina -1;
    }
    sleep(_) {
        return this.stamina = this.stamina +2;
    }
        
        

}




const axolotlTamagochi = new Tamagochi( 4, 4 , 'Axolotl', 4)
/* let axolotlTamagochi = new Tamagochi( 4, 4, 'axolotl', 4) */



console.log(Tamagochi)
console.log(axolotlTamagochi)

/* console.log(Tamagochi.eat)
console.log(Tamagochi.sleep)
console.log(Tamagochi.hunger) */

console.log(axolotlTamagochi.eat)
console.log(axolotlTamagochi.play)
console.log(axolotlTamagochi.sleep)

console.log(axolotlTamagochi.hunger)
console.log(axolotlTamagochi.mood)
console.log(axolotlTamagochi.stamina)


/* class Tamagochi {
    constructor( hunger, mood, name, stamina) {
        this.hunger = hunger;
        this.mood = mood;
        this.name = name;
        this.stamina = stamina;
        
    }
    eat (stamina) {
        return stamina = x - 1;
        
    }
    play(mood, stamina, hunger) {
        return  mood = this.mood + 1,
                this.stamina = stamina -1,
                hunger +1;
    }
    sleep(stamina) {
        return this.stamina = stamina
    }
}

let hunger = 4;
let mood = 4;
let stamina = 4;


let axolotlTamagochi = new Tamagochi( hunger, mood , 'Axolotl', stamina)
/* let axolotlTamagochi = new Tamagochi( 4, 4, 'axolotl', 4) */

/* Tamagochi */ 



/* --- */

/* class Tamagochi {
    constructor(eat, play, sleep) {
        this.eat = eat;
        this.play = play;
        this.sleep = sleep;
        
    }
}

let axolotlTamagochi = new Tamagochi(4, 4, 4)

Tamagochi

console.log(axolotlTamagochi) */

