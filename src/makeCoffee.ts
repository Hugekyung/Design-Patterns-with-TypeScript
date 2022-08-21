import { ICoffeeFactory } from "./abstract-factory";
import { Cup, Water, Espresso } from "./sample";

export function makeCoffee(factory: ICoffeeFactory) {
    const cup: Cup = factory.makeCup();
    const water: Water = factory.makeWater();
    const espresso: Espresso = factory.makeEspresso();

    cup.add(water);
    cup.add(espresso);
    cup.add("아메리카노");

    return cup;
}
