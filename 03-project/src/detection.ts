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
// checking solution:
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
