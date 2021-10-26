// [1] return function
function sumOfTwoNumber(number1: number, number2: number): number {
  return number1 + number2;
}

// [2] void function
function doSteps() {
  console.log("Step1");
  const sumResult = sumOfTwoNumber(4, 6);
  console.log(sumResult);
}

// [3] arrow return function
const thisIsArrowReturn = (name : string) => {
  return `I'm Arrow return, ${name}`;
};

// [4] arrow void function
const thisIsArrowVoid = () => {
  console.log("I'm Arrow Void");
};

// test code
// [1]
let result = sumOfTwoNumber(23, 56.45);
console.log(result);

// [2]
doSteps();

// [3]
const arrow = thisIsArrowReturn("Bigbang");
console.log(arrow);

// [4]
thisIsArrowVoid();
