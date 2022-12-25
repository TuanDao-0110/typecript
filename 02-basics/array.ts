// 1. define as type
const superHero: string[] = [];

// const heroPower : number []= []
// heroPower.push(3)
// 2.define other synctag
const heroPower: Array<number> = [];
// 3. define by type
type User = {
  name: string;
  isActive: boolean;
};

const allUser: User[] = [];
allUser.push({
  name: "tuan",
  isActive: true,
});
// 4. define by array of type array number
const Mlmodels: number[][] = [];
Mlmodels.push([32, 324]);
// 
superHero.push("hello");
console.log(superHero);
