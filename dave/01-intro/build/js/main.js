"use strict";
const stringEcho = (arg) => {
    return arg;
};
const isObject = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { value: arg, is: false };
    if (isObject(arg) && !Object.keys(arg).length)
        return { value: arg, is: false };
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process user logic
    return user;
};
class NewUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const user1 = new NewUser(4, "tuan");
//5. extend and keyof
// --> fn with have return type is array type of T with key value K extend from T
const getUseProperty = (users, key) => {
    return users.map((user) => user[key]);
};
console.log(getUseProperty([
    { id: 4, name: "tuan" },
    { id: 5, name: "long" },
    { id: 7, name: "jay" },
], "name"));
// 6. class with generic:
class StateObject {
    constructor(data) {
        this.data = data;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject(["tuan", "job"]);
store.state = ["4", "hei"];
console.log(store.state);
