type Guitarist = {
  name: string;
  active: boolean;
  player?: (number | string)[];
};
let guitar1: Guitarist = {
  name: "player",
  active: true,
};
enum Grade {
  U = 10,
  D = "1",
  C = "time",
  B = "not",
  A = 5,
}
console.log(Grade["U"]);
