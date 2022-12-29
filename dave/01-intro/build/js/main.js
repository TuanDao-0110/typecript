"use strict";
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return "";
    }
}
class Peeps {
    constructor(other = Peeps.getCount()) {
        this.other = other;
    }
    static getCount() {
        return Peeps.count + 50;
    }
    getOther() {
        console.log(this.other);
    }
}
Peeps.count = 1;
const newPeeps = new Peeps();
// console.log(newPeeps.getCount());
newPeeps.getOther();
class other extends Peeps {
}
const a = new other();
// console.log(a.getCount());
