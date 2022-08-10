class Tamagochi {
    constructor( hunger = 4, mood = 4, name, stamina = 4, status ) {
        this._hunger = hunger;
        this._mood = mood;
        this._name = name;
        this._stamina = stamina;
        
        this._status = status;
        
        console.log(Tamagochi)
    
    }


    tamagochiStatus( _hunger, _mood, _name, _stamina, _status){
        
        document.getElementById("tamagochiHunger").innerHTML = axolotlTamagochi._hunger;
        document.getElementById("tamagochiMood").innerHTML = axolotlTamagochi._mood;
        document.getElementById("tamagochiStamina").innerHTML = axolotlTamagochi._stamina;

        if (this._stamina <= 3 && this._stamina >= 2) {
            this._status = "e__e";
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = '';

        }  else if (this._stamina <= 1 && this._stamina > 0) {
            this._status = "-__-"
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = '';

        }  else if (this._stamina <= 0) {
            this._status = "x__x"
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = 'zZz';

        }   else if (this._mood >= 8) {
            this._status = "*__*";
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = '';

        }   else if (this._mood <= 2) {
            this._status = "`__´";
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = '';

        }   else {
            this._status = "^__^";
            document.getElementById("tamagochiStatus").innerHTML = axolotlTamagochi._status;
            document.getElementById("tamagochiYawn").innerHTML = '';
        }
    }

    
    

    tamagochiEat( _hunger, _stamina, _status){
    this._hunger -= 2,
    this._stamina -= 1;
    /* status preUpdate */
    console.log(axolotlTamagochi)
    /* status preUpdate */
    /* update */
    this.tamagochiStatus();
    /* update */
    /* status mood postUpdate */
    console.log(this._status + ' <3 Delicious')
}

tamagochiPlay( _hunger, _mood, _stamina){
    this._hunger += 1,
    this._mood += 1,
    this._stamina -= 1;
    
    console.log(axolotlTamagochi)
    this.tamagochiStatus();
    console.log(axolotlTamagochi._status + ' ! Fun')
    
}

tamagochiSleep(_stamina){
    this._mood -= 1;

    this._stamina += 2;
    console.log(axolotlTamagochi)
    this.tamagochiStatus();
    console.log(axolotlTamagochi._status + ' zZz')
}
}

const axolotlTamagochi = new Tamagochi( Tamagochi._hunger, Tamagochi._mood,'Axolotl', 4, Tamagochi._status )

console.log(axolotlTamagochi._status)
console.log(axolotlTamagochi.tamagochiStatus)

console.log(axolotlTamagochi)
/* axolotlTamagochi.tamagochiEat(); */
axolotlTamagochi.tamagochiStatus();
console.log(axolotlTamagochi)



console.log(axolotlTamagochi.tamagochiStatus)
console.log(axolotlTamagochi._status)





/*     tamagochiStatus( _hunger, _mood, _name, _stamina, _status){
        if (this._stamina < 3) {
            this._status = "e__e";
            
        }  else if (this._stamina <= 0) {
            this._status = "-__-"
            tamagochiSleep();

        }   else if (this._mood >= 8) {
            this._status = "*__*";
            
        }   else if (this._mood <= 2) {
            this._status = "`__´";

        } else {
            this._status = "^__^";
        }
    }
 */

/* console.log(axolotlTamagochi._status)
console.log(axolotlTamagochi)
axolotlTamagochi.tamagochiEat();
function axolotlFeed() {
    axolotlTamagochi.tamagochiEat();
}
console.log(axolotlTamagochi)
axolotlFeed();

console.log(axolotlTamagochi)
console.log(axolotlTamagochi._status)

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

console.log(axolotlTamagochi._hunger)
console.log(axolotlTamagochi._mood)
console.log(axolotlTamagochi._stamina)
console.log(axolotlTamagochi._name) */

