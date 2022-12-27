"use strict";
// 1. return as You can declare a type parameter that is constrained by another type parameter
const otherFn = (obj, key) => {
    return obj[key];
};
const otherFn2 = (objectT, ObjectV) => {
    return objectT;
};
// 3. class as generic
class Sellable {
    constructor(name, age = 4) {
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    addToCard(product) {
        this.cart.push(product);
    }
}
// --> define type for class in string
const newSellable = new Sellable("newname");
newSellable.name;
newSellable.cart = ["4"];
newSellable.addToCard("5");
