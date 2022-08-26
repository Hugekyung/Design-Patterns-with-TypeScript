import { Cup, Espresso, Water } from "./sample";

class CoffeeMaker {
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

        const resources = { water, espresso };
        cup.add(resources);

        return cup;
    }
}

class CoffeeMakerFactory {
    // static으로 선언함으로써 전역적으로 접근 가능한 하나의 인스턴스를 생성한다.
    static Instance(): CoffeeMaker {
        if (!CoffeeMakerFactory._instance) {
            CoffeeMakerFactory._instance = new CoffeeMaker();
        }
        return CoffeeMakerFactory._instance;
    }

    private static _instance: CoffeeMaker;
}

const coffeeMaker = CoffeeMakerFactory.Instance();
console.log(coffeeMaker.createCoffee());
