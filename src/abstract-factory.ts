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

// * 아래와 같은 방식으로 CoffeeFactory를 상속 받아 다른 클래스를 생성할 수 있다.
class HotCoffeeFactory extends CoffeeFactory {
    constructor() {}

    makeCup(): Cup {
        return new PaperCup();
    }

    makeWater(): Water {
        return new HotWater();
    }
}

const coffeeFactory = new CoffeeFactory();
const coffee = makeCoffee(coffeeFactory);
console.log("result >>", coffee);
