"use strict";
exports.__esModule = true;
// 1. define as type
var superHero = [];
// const heroPower : number []= []
// heroPower.push(3)
// 2.define other synctag
var heroPower = [];
var allUser = [];
allUser.push({
    name: "tuan",
    isActive: true
});
// 4. define by array of type array number
var Mlmodels = [];
Mlmodels.push([32, 324]);
superHero.push("hello");
//5. readonly array :
var schoolName = ["a", "b", "c", 4];
// 6. function array :
var addSchoolName = function (newSchool) { };
// we can write
// let newStudent: Array<student> = [];
// or
var newStudent = [];
// newStudent.push([4, "tuan", true]);
// newStudent.push([10, "long", false]);
newStudent.push([3, "tuan", true]);
// 8. define as fn's parameter
var addNewStudent = function (morestudent) {
    console.log(morestudent);
    return newStudent;
};
console.log(newStudent);
