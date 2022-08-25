import { Cup, Espresso, Milk, PaperCup, Water } from "./sample";

abstract class CoffeeMaker {
    constructor() {}

    makeCup(): Cup {
        return new Cup();
    }

    makeWater(): Water {
        return new Water();
    }

    makeEspresso(): Espresso {
        return new Espresso();
    }

    createCoffee(): Cup {
        const cup: Cup = this.makeCup();
        const water: Water = this.makeWater();
        const espresso: Espresso = this.makeEspresso();

        console.log(water);
        console.log(espresso);
        cup.add(water);
        cup.add(espresso);
        console.log(cup);

        return cup;
    }
}

class LatteCoffeeMaker extends CoffeeMaker {
    // constructor() {
    //     super();
    // }

    makeCup(): Cup {
        return new PaperCup();
    }

    makeWater(): Water {
        return new Milk();
    }
}

const latte = new LatteCoffeeMaker().createCoffee();
console.log("latte >>", latte);
