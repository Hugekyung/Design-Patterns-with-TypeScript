class Resource {}
export class Water extends Resource {}
export class Espresso extends Resource {}

export class Cup {
    cup;
    constructor() {
        this.cup = {};
    }

    add(resource: Resource): void {
        this.cup = { ...this.cup, resource };
    }
}

export class PaperCup extends Cup {}
export class HotWater extends Water {}
