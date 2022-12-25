"use strict";
exports.__esModule = true;
// 1.
var score = 5;
var myName = { name: "tuan", id: 4 };
myName = {
    userName: "tuan",
    id: 4
};
// 2. multi parameter type
// const getDbId = (id: number | string) => {
//   // making api call
//   console.log(`Db id : ${id}`);
// };
//3. multi paramter type manipulate
var getDbId = function (id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id + 3;
    }
    return id;
};
// array :
// const data: number[] = [2, 3, 4, 5];
// combine
var data = [2, "4", 4, 5, true];
// 3. 
var seatAllotment;
// seatAllotment = 'left'
console.log(seatAllotment);
