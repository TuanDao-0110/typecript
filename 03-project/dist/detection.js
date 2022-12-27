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
