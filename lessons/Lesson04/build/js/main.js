"use strict";
// Literal types
let myName;
let userName;
userName = "hazzaz";
// Functions
const logMessage = (message) => {
    console.log(message);
};
// interface mathFunction {
//   (a: number, b:number):number
// }
const multiply = (a, b) => {
    return a * b;
};
logMessage(multiply(2, 5));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(10, 20));
logMessage(sumAll(10, 20));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4, 5));
// never type
const createError = (errMessage) => {
    throw new Error(errMessage);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return "string";
    if (isNumber(value))
        return "number";
    return createError('This should never happen');
};
