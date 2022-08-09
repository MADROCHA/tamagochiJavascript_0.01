let hungerDisplay = document.querySelector('.displayHunger');
let moodDisplay = document.querySelector('.displayMood');
let staminaDisplay = document.querySelector('.displayStamina');
let faceDisplay= document.querySelector('.displayFace'); 

let counterPlayElement = document.querySelector('.counterPlay');
let counterFeedElement = document.querySelector('.counterFeed');
let counterSleepElement = document.querySelector('.counterSleep');

let hunger = 4;
let mood = 4;
let stamina = 4;
let face ="^u^";
updateDisplay();


counterPlayElement.addEventListener("click",()=>{
    hunger ++;
    mood++;
    stamina--;
    updateDisplay();

});

counterFeedElement.addEventListener("click",()=>{
    hunger = hunger-2;
    mood = mood+3;
    stamina--;
    updateDisplay();

});


function tamagotchiFace()
{ 
    if (hungerDisplay >8){
        return "*O*";
        updateDisplay();
        
    }
    if (stamina<3){
        return "cansado";
        updateDisplay();
        
    }
    if (mood<2){
        return "enfadado";
        updateDisplay();
    }
    
}

function updateDisplay(){
    hungerDisplay.innerHTML = hunger;
    moodDisplay.innerHTML = mood;
    staminaDisplay.innerHTML = stamina;
    faceDisplay.innerHTML = face;

};

// function tamagotchiStatus(value) {
        
//         switch (value) {
//             case this._stamina < 3 && this._stamina >= 2:
//                 return "e__e";
//                 break;
//             case this._stamina <= 1 && this._stamina > 0:
//                 return"-__-";
//                 break;
//             case this.mood >= 8:
//                 return "*__*";
//                 break;
//             default:
//                     return ":-|"
//         }
//         console.log(tamagotchiStatus);
//     }