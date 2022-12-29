"use strict";
let guitar1 = {
    name: "player",
    active: true,
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 10] = "U";
    Grade["D"] = "1";
    Grade["C"] = "time";
    Grade["B"] = "not";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade["U"]);
