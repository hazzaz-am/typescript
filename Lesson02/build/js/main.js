"use strict";
let myName;
let dob;
let isDeveloper;
let hobby;
myName = "Hazzaz Abdul Manna";
dob = 23;
isDeveloper = true;
/**
 * "any type" defeat typescript it can be store any type of value.
 */
hobby = "reading";
hobby = 1;
hobby = false;
const functionType = (a, b) => {
    return a + b;
};
const numberString = (a, b) => {
    return a + b;
};
/**
 * Union type tells it can be either this type or that type
 */
let unionType;
let postId;
let userLoggedIn;
