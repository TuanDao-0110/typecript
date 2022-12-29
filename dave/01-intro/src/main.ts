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
