const detectTypes = (val: number | string | number) => {};

const provided = (id: string | null | number) => {
  if (id) {
    if (typeof id === "string") {
      return id.toLowerCase();
    }
    return null;
  }
  console.log("provide id ");
  return;
};
//1. IN checking solution:
interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

const checkAdmin = (newUser: User | Admin) => {
  if ("isAdim" in newUser) {
    return console.log("Admin");
  }
  return console.log("user");
};
const user1: User = {
  name: "tuan",
  email: "tuan@gmail.com",
};
// checking it:
checkAdmin(user1);
// 2. instanceof
// 3. type:
type Fish = {
  swim(): void;
};
type Bird = {
  fly(): void;
};
// pet is Fish ==> help to return a in case it is Fish, Fn have to return a type of Fish.
const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

const getFood = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet;
    return "fish food";
  }
  return "bird food";
};

// 1. what is Discriminated
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}
type Shape = Circle | Square | Rectangle;
const getTrueShape = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //   return shape.side * shape.side;
};

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
};
