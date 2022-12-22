const user = {
  name: "tuan",
  email: "tuan@gmail.com",
  isActive: true,
};
// so we now have function that create a any object
const createUser = (newUser: { name: string; isPaid: boolean }) => {};
createUser({ name: "tuan", isPaid: true });
// or way to create any object
interface course {
  name: string;
  price: number;
}
const createCourse = (): course => {
  return { name: "reactjs", price: 400 };
};

// other senerio:
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const createNewUser = (user: User): User => {
  return user;
};
console.log(createNewUser({ name: "tuan", email: "tuan@gmail.com", isActive: true }));
export {};
