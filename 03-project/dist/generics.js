"use strict";
const score = [];
const identity = (val) => {
    return val;
};
// 1. we can write like this:
const identityThree = (val) => {
    // --> this can help to return value type same as paramter 3
    return val;
};
// 1.1 so this case work
identityThree("4");
// 1.2 but also this case work :
identityThree(4);
// 2. shorten way
const identityFour = (val) => {
    return val;
};
// 3. define by inteface: 
