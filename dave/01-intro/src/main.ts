// // index signatures:
// interface Transaction {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
//1. introduction of index signature
interface Transaction {
  // we define all index inside object interface is string vs value is number
  //   all the variable will be string with return type is number
  readonly [index: string]: number;
  //   Pizza: number;
  //   Books: number;
  //   Job: number;
}
const todayTransaction: Transaction = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};
const pizza: string = "Pizza";

const newOrder: Transaction[] = [];
newOrder.push({ data: 4 }, { data1: 5, data3: 5 });
newOrder[0] = { data4: 5 };
console.log(newOrder);
console.log(todayTransaction[pizza]);

//2. without index signature

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  //   we use undefined becuase may be we dont create it in object --> that why value maybe underfined
  classes?: number[];
}

const student1: Student = {
  name: "tuan",
  GPA: 4,
};

const student2: Student = {
  name: "tuan",
  GPA: 4,
  classes: [4, 5],
};

for (const key in student1) {
  //   console.log(`${key} : ${student1[key as keyof Student]}`);
}

Object.keys(student1).map((key) => {
  // this return as key of this student 1 type
  //  --> TS will know that key in this case is Key of student1
  console.log(student1[key as keyof typeof student1]);
});

//3.  combime to function
const logStudentKey = (
  student: Student,
  // we can write like this:
  key: keyof typeof student
  // or we can write: --> it will back straight to parent type to define the key
  //   key: keyof Student
): void => {
  console.log(`student key ${key}: ${student[key]}`);
};

logStudentKey(student1, "GPA");

// 4.

// interface Incomes {
//   [key: string]: number;
// }

type Stream = "salary" | "bonus" | "sidehustle";
// Record will be use to store all key, and return value type
type Incomes = Record<Stream, number | string>;

let incomes: Incomes = {
  bonus: 4,
  salary: 4,
  sidehustle: "4",
};

for (let i in incomes) {
  console.log(incomes[i as keyof typeof incomes]);
}
