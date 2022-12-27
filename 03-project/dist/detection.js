"use strict";
const detectTypes = (val) => { };
const provided = (id) => {
    if (id) {
        if (typeof id === "string") {
            return id.toLowerCase();
        }
        return null;
    }
    console.log("provide id ");
    return;
};
const checkAdmin = (newUser) => {
    if ("isAdim" in newUser) {
        return console.log("Admin");
    }
    return console.log("user");
};
const user1 = {
    name: "tuan",
    email: "tuan@gmail.com",
};
// checking it:
checkAdmin(user1);
// pet is Fish ==> help to return a in case it is Fish, Fn have to return a type of Fish.
const isFish = (pet) => {
    return pet.swim !== undefined;
};
const getFood = (pet) => {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    return "bird food";
};
const getTrueShape = (shape) => {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //   return shape.side * shape.side;
};
const getArea = (shape) => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
};
