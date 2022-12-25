// 1. define as type
let superHero: string[] = [];

// const heroPower : number []= []
// heroPower.push(3)
// 2.define other synctag
let heroPower: Array<number> = [];
// 3. define by type
type User = {
  name: string;
  isActive: boolean;
};

let allUser: User[] = [];
allUser.push({
  name: "tuan",
  isActive: true,
});
// 4. define by array of type array number
let Mlmodels: number[][] = [];
Mlmodels.push([32, 324]);
superHero.push("hello");
//5. readonly array :
let schoolName: ReadonlyArray<string | number> = ["a", "b", "c", 4];
// 6. function array :
let addSchoolName = (newSchool: Array<string>): void => {};
// 7. define as array type
type student = [age: number, name: string, isActived: boolean];
// we can write
// let newStudent: Array<student> = [];
// or
let newStudent: student[] = [];
newStudent.push([4, "tuan", true]);
newStudent.push([10, "long", false]);
// 8. define as fn's parameter
const addNewStudent = (morestudent: student) => {
  console.log(morestudent);
  return newStudent;
};

console.log(newStudent);
export {};
