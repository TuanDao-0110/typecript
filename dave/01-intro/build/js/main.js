"use strict";
let post1 = {
    number: 1,
    name: "tuan",
};
// fn :
const add = (a, b) => {
    return b + a;
};
let multiply = (a, b) => {
    return 4;
};
console.log(multiply(4, 4));
const addAll = (a = 10, b, c = 4) => {
    return a + b + c;
};
console.log(addAll(undefined, 3));
// Rest Parameter:
const total = (...nums) => {
    return nums.reduce((prev, curr) => {
        return prev + curr;
    });
};
console.log(total(2, 4, 5, 10));
// never fn
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const numberOrString = (val) => {
    if (typeof val === "string")
        return "val";
    //   return createError("this should be string");
    // not like this
    return createError("use string");
};
console.log(numberOrString(4));
