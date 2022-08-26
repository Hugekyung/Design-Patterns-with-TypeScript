import { Cup, Espresso, Milk, PaperCup, Water } from "./sample";

// 커피 생성에 필요한 함숟르을 모아둔 클래스
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

        const resources = { water, espresso };
        cup.add(resources);

        return cup;
    }
}

// 어떤 객체를 만들 것인지 내용을 정의하는 클래스
class LatteCoffeeMaker extends CoffeeMaker {
    makeCup(): Cup {
        return new PaperCup();
    }

    makeWater(): Water {
        return new Milk();
    }
}

const latte = new LatteCoffeeMaker().createCoffee();
console.log("latte >>", latte);
