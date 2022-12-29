"use strict";
let a = "a";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
// we know that addOrConcat will return as string .
// ==> so we use  'as string' to specify type of fn.
// ==> so we will assume that fn will return only string event it can be number|string.
let myVal = addOrConcat(2, 2, "concat");
//1. be careful that fn may return a string:
let nexVal = addOrConcat(2, 2, "concat");
console.log(myVal);
//2. the DOM :
const img = document.querySelector("img");
//  but we can write:
const myImg = document.querySelector("#img"); // we can not write in .tjs file
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
let year = document.querySelector("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
