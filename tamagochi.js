class Tamagochi {
    constructor( hunger = 4, mood = 4, name, stamina = 4) {
        this._hunger = hunger;
        this._mood = mood;
        this._name = name;
        this._stamina = stamina;

        
        console.log(Tamagochi)
    
    }


    tamagochiStatus( _hunger, _mood, _name, _stamina){
        return ":)"
        
    
    }
    tamagochiEat( _hunger, _stamina){
    ":)"
    }
        
    tamagochiPlay( _hunger, _mood, _stamina){
    }

    tamagochiSleep(_stamina){
    }
}

const axolotlTamagochi = new Tamagochi( 4, Tamagochi._mood,'Axolotl', 5)
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




