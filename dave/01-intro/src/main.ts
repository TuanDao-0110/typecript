type One = string;
type Two = string | number;
type Three = "hello";
let a: One = "a";
let b = a as Two; // less specific
let c = a as Three; // more specific
let d = <One>"world";
let e = <string | number>"world";
const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};
// we know that addOrConcat will return as string .
// ==> so we use  'as string' to specify type of fn.
// ==> so we will assume that fn will return only string event it can be number|string.

let myVal: string = addOrConcat(2, 2, "concat") as string;
//1. be careful that fn may return a string:
let nexVal: number = addOrConcat(2, 2, "concat") as number;

console.log(myVal);

//2. the DOM :
const img = document.querySelector("img") as HTMLImageElement;
//  but we can write:
const myImg = <HTMLImageElement>document.querySelector("#img"); // we can not write in .tjs file

img.src = "url"; // TS know that img is tag image that why they offer us more query on image tag

// 1s variation:
// let year: HTMLElement | null;
// year = document.querySelector("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

// 2nd variation

let year = document.querySelector("year") as HTMLElement;

let thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
