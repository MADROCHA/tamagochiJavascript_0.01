class Tamagochi {
    constructor( hunger = 4, mood = 4, name, stamina = 4) {
        this._hunger = hunger;
        this._mood = mood;
        this._name = name;
        this._stamina = stamina;

        
        console.log(Tamagochi)
    
    }


    tamagochiStatus( _hunger, _mood, _name, _stamina){
        return ":)";
        
    
    }
    tamagochiEat( _hunger, _stamina){
    this._hunger -= 2,
    this._stamina -= 1;
    }
        
    tamagochiPlay( _hunger, _mood, _stamina){
        this._hunger += 1,
        this._mood += 1,
        this._stamina -= 1;
    }

    tamagochiSleep(_stamina){
        this._stamina += 2;
    }
}

const axolotlTamagochi = new Tamagochi( Tamagochi._hunger, Tamagochi._mood,'Axolotl', 4)

console.log(axolotlTamagochi)
axolotlTamagochi.tamagochiEat();
console.log(axolotlTamagochi)
axolotlTamagochi.tamagochiPlay();
console.log(axolotlTamagochi)
axolotlTamagochi.tamagochiSleep();
console.log(axolotlTamagochi)

console.log(axolotlTamagochi.tamagochiStatus)
console.log(axolotlTamagochi.tamagochiEat)
console.log(axolotlTamagochi.tamagochiPlay)
console.log(axolotlTamagochi.tamagochiSleep)



/* console.log(axolotlTamagochi.eat)
console.log(axolotlTamagochi.play)
console.log(axolotlTamagochi.sleep) */

console.log(axolotlTamagochi._hunger)
console.log(axolotlTamagochi._mood)
console.log(axolotlTamagochi._stamina)
console.log(axolotlTamagochi._name)




