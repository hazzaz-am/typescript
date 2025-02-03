"use strict";
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
let d = "hello";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
// be careful ts will not throw an error if you try to assign a number to a string
const resultValue = addOrConcat(1, 2, "add");
const resultValue2 = addOrConcat(1, 2, "concat");
