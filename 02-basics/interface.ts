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

interface User {
  githubToken: string;
}
interface User {
    
}
// 1. apply to new variable

const newUser: User = {
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
