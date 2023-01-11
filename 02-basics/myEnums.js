"use strict";
exports.__esModule = true;
// const AISLE = 0;
// const MIDDEL = 1;
// const WINDOW = 2;
// if (seat === AISLE) {
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice["MIDDEL"] = "20";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE; // =10
console.log(SeatChoice.FOURTH); //0  as default value if dont assign value to it
