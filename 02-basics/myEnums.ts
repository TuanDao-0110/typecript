// const AISLE = 0;
// const MIDDEL = 1;
// const WINDOW = 2;
// if (seat === AISLE) {
// }
enum SeatChoice {
  AISLE = 10,
  MIDDEL = "20",
  WINDOW = 4,
  FOURTH,
}
const hcSeat = SeatChoice.AISLE; // =10
console.log(SeatChoice.FOURTH); //0  as default value if dont assign value to it

export {};
