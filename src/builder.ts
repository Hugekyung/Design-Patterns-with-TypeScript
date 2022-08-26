import { Bean, ColdWater, Cup, EspressoMachine } from "./sample";

interface CoffeeBuilder {
    buildCup(): void;
    buildWater(): void;
    buildEspresso(): void;
    getCoffee(): Cup;
    // getBeanName(): Bean;
}

class ColdCoffeeBuilder implements CoffeeBuilder {
    cup: Cup;
    constructor() {
        this.cup = new Cup();
    }

    buildCup() {
        this.cup = new Cup();
    }

    buildWater() {
        const water = new ColdWater();
        this.cup.add(water);
    }

    buildEspresso() {
        const machine = new EspressoMachine();
        const bean = new Bean("콜롬비아");
        const espresso = machine.make(bean);
        this.cup.add(espresso);
    }

    getCoffee(): Cup {
        return this.cup;
    }

    // Bean Class 따로 만들어서 builder 만들어야 할듯
    // getBeanName(): Bean {
    //     return this.cup.resource.beanName;
    // }
}

function makeCoffee(builder: CoffeeBuilder) {
    builder.buildCup();
    builder.buildWater();
    builder.buildEspresso();

    return builder.getCoffee();
}

// function getBeanName(builder: CoffeeBuilder) {
//     return builder.getBeanName();
// }

const coffee = new ColdCoffeeBuilder();
const product = makeCoffee(coffee);
console.log(product);
// const beanName = getBeanName(coffee);
// console.log("커피 원두의 이름 >>", beanName);
