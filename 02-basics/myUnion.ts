// 1.
let score: number | string | boolean = 5;

// 2.
type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let myName: User | Admin = { name: "tuan", id: 4 };
myName = {
  userName: "tuan",
  id: 4,
};
// 2. multi parameter type
// const getDbId = (id: number | string) => {
//   // making api call
//   console.log(`Db id : ${id}`);
// };

//3. multi paramter type manipulate

const getDbId = (id: number | string) => {
  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id + 3;
  }
  return id;
};

// array :

// const data: number[] = [2, 3, 4, 5];
// combine
const data: (number | string | boolean)[] = [2, "4", 4, 5, true];
// 3. 


let seatAllotment: 'left' |'middle'|'window'
seatAllotment = 'left'
console.log(seatAllotment)
export {};
