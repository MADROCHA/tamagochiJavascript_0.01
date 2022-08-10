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
        this._goldChunck = goldChunck 
    }
}

var itemTome = [
    waterCarrot = new Food ("Water Carrot", 1, ),
    soupFlowers = new Food ("Soup of Flowers", 1, ),
    axolotlGold = new Item ("Axolotl Reward", 0),
    bitBag = new Currency (50, 0, "Bit Poach", 1 ) ,
];
/* waterCarrot.effect = "food, increases stamina by 1 (next day?) && decreases hunger by 1 (instant?) "
soupFlowers.efect = "food, increases stamina & mood by 1 - decreases hunger by 1"

waterCarrot.description = "somewhat it seems yummy"
soupFlowers.description = "food, but isn't for you"
axolotlGold._description = "friendship is something beautiful, isn't really? "
bitBag._description = "Small amount of Bits " */

console.log(itemTome);
console.log(waterCarrot);
console.log(waterCarrot.effect);



/* class Item {
    constructor(bag, description, effect, name, category ) {
        this._bag = bag;
        this._description = description;
        this._effect = effect;
        this._name = name;
        this._category = category;
        
        Item.this_bag = [];
        
        console.log(Item);
    }
    getItem() {
    Item._bag = [];


    }
    useItem() {

    }

}
Item._bag = [];

console.log(this._bag);
console.log(this._bag); */