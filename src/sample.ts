class Resource {}
export class Water extends Resource {}
export class Espresso extends Resource {}
export class Milk extends Resource {}

export class Cup {
    cup;
    resource: any;
    constructor() {
        this.cup = {};
    }

    add(resource: Resource): void {
        this.cup = { ...this.cup, resource };
    }
}

export class PaperCup extends Cup {}

export class HotWater extends Water {}
// export class Milk extends Water {}
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

    make(bean: Bean) {
        return bean;
    }
}
