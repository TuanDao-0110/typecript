type stringOrNumber = string | number;
type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumber;
};

interface PostId {
  number?: number;
  name: "tuan" | "chau";
}

let post1: PostId = {
  number: 1,
  name: "tuan",
};

// fn :
const add = (a: number, b: number): number => {
  return b + a;
};

// type vs interface fn
interface mathFn {
  (a: number, b: number): number;
}

let multiply: mathFn = (a, b) => {
  return 4;
};

console.log(multiply(4, 4));

const addAll = (a: number = 10, b: number, c = 4): number => {
  return a + b + c;
};

console.log(addAll(undefined, 3));

// Rest Parameter:

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(total(2, 4, 5, 10));

// never fn
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const numberOrString = (val: number | string): string => {
  if (typeof val === "string") return "val";
  //   return createError("this should be string");
  // not like this
  return createError("use string");
};

console.log(numberOrString(4));
