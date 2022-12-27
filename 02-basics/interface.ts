interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail?: () => string;
  //   or we can write
  startTrail(): string;
  getCoupond(couponname: string, value: number): number;
}
// 1. add new feature:
interface User {
  githubToken: string;
}
// 2. extend new interface from User
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
// 3. apply to new variable

const newUser: Admin = {
  role: "admin",
  dbId: 3,
  email: "h@h.co",
  userId: 4,
  startTrail: () => {
    return "return as string";
  },
  getCoupond(couponname: "new couponname", value: 4) {
    return 10;
  },
  githubToken: "github",
};
newUser.email = "tuna";
// newUser.dbId=4 ==> can not change due to read only
