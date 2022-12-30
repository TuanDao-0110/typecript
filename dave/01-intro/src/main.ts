// utility type:

// 1.partial:
interface Assigment {
  [index: string]: string | number | boolean | undefined;
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssigment = (
  // assign type:
  assign: Assigment,
  // property to update
  propsToUpdate: Partial<Assigment>
): // return type
Assigment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assigment = {
  studentId: "abc",
  title: "final project",
  grade: 0,
  //   verified: true,
};

console.log(updateAssigment(assign1, { grade: 95 }));
// 2. readonnly and required
const recordAssigment = (
  // all property need to require
  assign: Required<Assigment>
): Assigment => {
  return assign;
};
console.log(recordAssigment({ grade: 4, studentId: "4", title: "not", verified: true }));
// we can not do like --> becuase it still think that verified is missing event we already add it
// console.log(recordAssigment(assign1))
console.log(recordAssigment({ ...assign1, verified: true }));
const assignVerify: Readonly<Assigment> = {
  ...assign1,
  verified: true,
};

// 3. record :
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Student = "Sara" | "Kelly";
type LetterGrade = "A" | "B" | "C" | "D" | "U";
// now we can set up as key is student vs value is Letter by using Record
const finalGrade: Record<Student, LetterGrade> = {
  Kelly: "A",
  Sara: "D",
};

interface Grade {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grade> = {
  Kelly: { assign1: 4, assign2: 4 },
  Sara: { assign1: 4, assign2: 5 },
};

// 4. pick vs omit :
// 4.1 now we picking

type AssignResult = Pick<Assigment, "title" | "studentId">;
const score: AssignResult = {
  studentId: "d",
  title: "4",
};

// 4.1 we omit ->
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 44,
};
console.log(todo);

// exclude vs extract
// nonnullable:
type AllPossibleGrade = "Dave" | "John" | "Anna" | null | undefined;
type NamesOnly = NonNullable<AudioListener>;

// return type :

// type newAssign = { title: string; points: number };
const creatNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof creatNewAssign>;

// parameter:
type AssignParams = Parameters<typeof creatNewAssign>;
const assinArg: AssignParams = ["title", 4];

const assignArg1: AssignParams = ["title2", 10];

// await: help us with return type is promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
// return type is a Promise with type of User
const fetchUser = async (): Promise<User[]> => {
  const data = await fetch("")
    .then((res) => res.json())
    .catch((error) => {
      if (error instanceof Error) return console.log(error);
    });
  return data;
};

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser>>;

fetchUser().then((user) => console.log(user));
