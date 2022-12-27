"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "new city";
    }
    //   private method
    deleteToken() {
        console.log("delete");
    }
    get getEmail() {
        return `email ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("error");
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        // with extend new sub can not access private
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const newUser = new User("emai", "name", "4");
// 1.readonly not allow to changed
// newUser.city = '4'
// 2. cannot access: because of private
// newUser.city
