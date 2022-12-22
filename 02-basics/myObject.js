"use strict";
exports.__esModule = true;
var user = {
    name: "tuan",
    email: "tuan@gmail.com",
    isActive: true
};
// so we now have function that create a any object
var createUser = function (newUser) { };
createUser({ name: "tuan", isPaid: true });
var createCourse = function () {
    return { name: "reactjs", price: 400 };
};
var createNewUser = function (user) {
    return user;
};
console.log(createNewUser({ name: "tuan", email: "tuan@gmail.com", isActive: true }));
