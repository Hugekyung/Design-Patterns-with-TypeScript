class Resource {}
class Water extends Resource {}
class Espresso extends Resource {}

class Cup {
    constructor() {}
    add(resource: Resource): void {}
}

function makeCoffee() {
    const cup: Cup = new Cup();
    const water: Water = new Water();
    const espresso: Espresso = new Espresso();

    cup.add(water);
    cup.add(espresso);

    return cup;
}

const coffee = makeCoffee();
console.log("result >>", coffee);
