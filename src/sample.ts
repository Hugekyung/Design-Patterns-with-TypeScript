class Resource {}
class Water extends Resource {}
class Espresso extends Resource {}

class Cup {
    cup;
    constructor() {
        this.cup = {};
    }

    add(resource: Resource): void {
        this.cup = { ...this.cup, resource };
    }
}

function makeCoffee() {
    const cup: Cup = new Cup();
    const water: Water = new Water();
    const espresso: Espresso = new Espresso();

    cup.add(water);
    cup.add(espresso);
    cup.add("아메리카노");

    return cup;
}

const coffee = makeCoffee();
console.log("result >>", coffee);
