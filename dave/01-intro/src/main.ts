const stringEcho = <T>(arg: T): T => {
  return arg;
};

const isObject = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// 2. set up return type
// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) return { arg, is: false };
//   if (isObject(arg) && !Object.keys(arg as keyof T).length) return { arg, is: false };
//   return { arg, is: !!arg };
// };

// isTrue({ data: 1, data2: 3 });

// 3.inteface and generic
interface BoolCheck<T> {
  value: T;
  is: boolean;
}
const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) return { value: arg, is: false };
  if (isObject(arg) && !Object.keys(arg as keyof T).length) return { value: arg, is: false };
  return { value: arg, is: !!arg };
};
// 4.set up with interface

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  // process user logic

  return user;
};

class NewUser implements HasId {
  constructor(public id: number, public name: string) {}
}

const user1 = new NewUser(4, "tuan");

//5. extend and keyof
// --> fn with have return type is array type of T with key value K extend from T
const getUseProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map((user) => user[key]);
};
console.log(
  getUseProperty(
    [
      { id: 4, name: "tuan" },
      { id: 5, name: "long" },
      { id: 7, name: "jay" },
    ],
    "name"
  )
);

// 6. class with generic:

class StateObject<T> {
  constructor(private data: T) {}
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<(string | number | object)[]>(["tuan", "job"]);
store.state = ["4", "hei"];
console.log(store.state);
