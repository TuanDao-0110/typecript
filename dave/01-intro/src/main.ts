interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {}
  play(action: string): string {
    return "";
  }
}
class Peeps {
  static count: number = 1;
  constructor(public other: number = Peeps.getCount()) {}
  static getCount(): number {
    return Peeps.count + 50;
  }
  getOther() {
    console.log(this.other);
  }
}
const newPeeps = new Peeps();
// console.log(newPeeps.getCount());
newPeeps.getOther();
class other extends Peeps {}

const a = new other();
// console.log(a.getCount());
