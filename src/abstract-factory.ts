import { makeCoffee } from "./makeCoffee";
import { Cup, Water, Espresso } from "./sample";

export interface ICoffeeFactory {
    makeCup(): Cup;
    makeWater(): Water;
    makeEspresso(): Espresso;
}

class CoffeeFactory implements ICoffeeFactory {
    constructor() {}
    makeCup(): Cup {
        return new Cup();
    }

    makeWater(): Water {
        return new Water();
    }

    makeEspresso(): Espresso {
        return new Water();
    }
}

const coffeeFactory = new CoffeeFactory();
const coffee = makeCoffee(coffeeFactory);
console.log("result >>", coffee);
