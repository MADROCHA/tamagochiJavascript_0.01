class Item {
    constructor( name, stat, description ) {
        this._name = name;
        this._stat = stat;
        this._description = description;
    }
};
class Food extends Item {
    constructor( name, stat, effect, description) {
        super (name, stat, description);
        this._effect = effect;
        
    }
};
class Currency extends Item {
    constructor(bit,  goldChunck, name, stat, _description) {
        super (name, stat, _description);
        this._bit = bit ;
        this._goldChunck = goldChunck ;
        
    }
}
/* stat value 0 = the item isnt known, it remains yet to discover */
/* stat value 1 = the item is known, the character doesnt have the item on inventory */
/* stat value 2 = the item is carried by the character, the player does have acces that item on inventory */
var worldItems = [
    waterCarrot = new Food ("Water Carrot", 0, ),
    soupFlowers = new Food ("Soup of Flowers", 0, ),
    axolotlGold = new Item ("Axolotl Reward", 0),
    bitBag = new Currency (1, 2, "Bit Poach", 2 ) 
];
waterCarrot.effect = "foodEffect, increases stamina by 1 (next day?) && decreases hunger by 1 (instant?) ";
waterCarrot.description = "somewhat it seems yummy";

soupFlowers.efect = "foodEffect, increases stamina & mood by 1 - decreases hunger by 1";
soupFlowers.description = "food.. but doesn't fit your taste";

axolotlGold._description = "friendship is something beautiful, isn't really? ";
bitBag._description = "the fabric is a bit worn, yet useful";

var inventory = [];
for (let i of worldItems) {
    if (i._stat === 2) {
        inventory.push(i._name);
    }
};


function countBits() {
    let countBitsReply = `Your open ${bitBag._name} holds `;
    if (bitBag._bit) {
        countBitsReply = countBitsReply + `${bitBag._bit} bit`;
        if (bitBag._bit > 1 && bitBag._goldChunck > 0) {
            countBitsReply = countBitsReply + "s";
        };
        if (bitBag._goldChunck && bitBag._bit) {
                countBitsReply = countBitsReply + " and ";
        };
    };
    if (bitBag._goldChunck) {
        countBitsReply = countBitsReply + `${bitBag._goldChunck} guile`;

    };
    if (!bitBag._goldChunck && !bitBag._bit) {
        countBitsReply = countBitsReply + "no";
    };
    countBitsReply = countBitsReply + " chunck"
    if (bitBag._bit > 1 || bitBag._goldChunck > 1 || (bitBag._bit > 0 && bitBag._goldChunck > 0) || (!bitBag._goldChunck && !bitBag._bit)) {
        countBitsReply = countBitsReply + "s"
    };
    countBitsReply = countBitsReply + "."
    console.log(countBitsReply);
    console.log(bitBag);
    
};
countBits();


console.log(worldItems[3]);
console.log(inventory);
console.log(bitBag);
console.log(bitBag._name);
console.log(bitBag._bit);

console.log(countBits());







console.log(worldItems);
console.log(waterCarrot);
console.log(waterCarrot.effect);



