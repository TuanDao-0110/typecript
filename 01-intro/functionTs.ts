// fn
const addTwo = (num: number) => {
  return num + 2;
};
addTwo(4);
const getUpper = (val: string) => {
  return val.toUpperCase();
};
let loginUser = (name: string, email: string, isPaid: boolean = true) => {};
const signUpUser = (name: string, email: string, age: number = 4) => {};
signUpUser("tuan", "ricky");
// fn type :

const getValue = (myVal: number) => {
  if (myVal > 5) return true;
  return "200 ok ";
};

const getHello = (s: string): string | number => {
  return "hello";
};

const heros = [2, "spiderman", "ironman"];
console.log(
  heros.map((hero): string => {
    return `${hero}`;
  })
);

const consoleErro = (errmsg: string): void => {
  throw new Error(errmsg);
};
export {};
