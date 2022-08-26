class Resource {}
export class Water extends Resource {}
export class Espresso extends Resource {}
export class Milk extends Resource {}

export interface Resources {
    water?: Water;
    espresso?: Espresso;
    milk?: Milk;
}

export class Cup {
    cup;
    constructor() {
        this.cup = {};
    }

    add(resources: Partial<Resources>): void {
        this.cup = { ...this.cup, resources };
    }
}

export class PaperCup extends Cup {}

export class HotWater extends Water {}
export class ColdWater extends Water {}

export class Bean extends Resource {
    beanName: string;
    constructor(name: string) {
        super();
        this.beanName = name;
    }
}

export class EspressoMachine extends Resource {
    constructor() {
        super();
    }

    make(bean: Bean): Espresso {
        return bean;
    }
}
