const score: Array<number> = [];
const identity = (val: boolean | number): boolean | number => {
  return val;
};
// 1. we can write like this:

const identityThree = <Type>(val: Type): Type => {
  // --> this can help to return value type same as paramter 3
  return val;
};
// 1.1 so this case work
identityThree("4");
// 1.2 but also this case work :
identityThree(4);

// 2. shorten way
const identityFour = <T>(val: T): T => {
  return val;
};

// 3. define by inteface: 
