"use strict";
exports.__esModule = true;
// fn
var addTwo = function (num) {
    return num + 2;
};
addTwo(4);
var getUpper = function (val) {
    return val.toUpperCase();
};
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
var signUpUser = function (name, email, age) {
    if (age === void 0) { age = 4; }
};
signUpUser("tuan", "ricky");
// fn type :
var getValue = function (myVal) {
    if (myVal > 5)
        return true;
    return "200 ok ";
};
var getHello = function (s) {
    return "hello";
};
var heros = [2, "spiderman", "ironman"];
console.log(heros.map(function (hero) {
    return "".concat(hero);
}));
var consoleErro = function (errmsg) {
    throw new Error(errmsg);
};
consoleErro('fail');
