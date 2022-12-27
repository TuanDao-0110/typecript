// 1. return as You can declare a type parameter that is constrained by another type parameter

const otherFn = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

interface DataBase {
  connection: string;
  username: string;
  pwd: string;
}
const otherFn2 = <T, V>(objectT: T, ObjectV: V) => {
  return objectT;
};

// 2. create class
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}
// 3. class as generic
class Sellable<T>{
  constructor(public name: string, private age: number = 4) {}
  public cart: T[] = [];
  addToCard(product: T) {
    this.cart.push(product);
  }
}
// --> define type for class in string
const newSellable = new Sellable<string>("newname");
newSellable.name;
newSellable.cart = ["4"];
newSellable.addToCard("5");
