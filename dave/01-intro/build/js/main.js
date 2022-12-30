"use strict";
// utility type:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssigment = (
// assign type:
assign, 
// property to update
propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "abc",
    title: "final project",
    grade: 0,
    //   verified: true,
};
console.log(updateAssigment(assign1, { grade: 95 }));
// 2. readonnly and required
const recordAssigment = (
// all property need to require
assign) => {
    return assign;
};
console.log(recordAssigment({ grade: 4, studentId: "4", title: "not", verified: true }));
// we can not do like --> becuase it still think that verified is missing event we already add it
// console.log(recordAssigment(assign1))
console.log(recordAssigment(Object.assign(Object.assign({}, assign1), { verified: true })));
const assignVerify = Object.assign(Object.assign({}, assign1), { verified: true });
// 3. record :
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
// now we can set up as key is student vs value is Letter by using Record
const finalGrade = {
    Kelly: "A",
    Sara: "D",
};
const gradeData = {
    Kelly: { assign1: 4, assign2: 4 },
    Sara: { assign1: 4, assign2: 5 },
};
const score = {
    studentId: "d",
    title: "4",
};
const todo = {
    title: "Clean room",
    completed: false,
    createdAt: 44,
};
console.log(todo);
// return type :
// type newAssign = { title: string; points: number };
const creatNewAssign = (title, points) => {
    return { title, points };
};
const assinArg = ["title", 4];
const assignArg1 = ["title2", 10];
// return type is a Promise with type of User
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("")
        .then((res) => res.json())
        .catch((error) => {
        if (error instanceof Error)
            return console.log(error);
    });
    return data;
});
fetchUser().then((user) => console.log(user));
