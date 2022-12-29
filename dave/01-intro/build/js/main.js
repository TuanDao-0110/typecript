"use strict";
const todayTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
const pizza = "Pizza";
const newOrder = [];
newOrder.push({ data: 4 }, { data1: 5, data3: 5 });
newOrder[0] = { data4: 5 };
console.log(newOrder);
console.log(todayTransaction[pizza]);
const student1 = {
    name: "tuan",
    GPA: 4,
};
const student2 = {
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
    console.log(student1[key]);
});
//3.  combime to function
const logStudentKey = (student, 
// we can write like this:
key
// or we can write: --> it will back straight to parent type to define the key
//   key: keyof Student
) => {
    console.log(`student key ${key}: ${student[key]}`);
};
logStudentKey(student1, "GPA");
let incomes = {
    bonus: 4,
    salary: 4,
    sidehustle: "4",
};
for (let i in incomes) {
    console.log(incomes[i]);
}
