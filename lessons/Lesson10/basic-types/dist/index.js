"use strict";
// type in function
// type UserName = (a: number, b: number) => number;
/**
 *  Return<type>
 * take function type and detact the type
 */
const hello = (s) => {
    return s;
};
const users = [
    {
        name: "hazzaz",
        age: 23,
    },
    {
        name: "amin",
        age: 34,
    },
    {
        name: "hujjat",
        age: 34,
    },
];
const filterUser = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
console.log(filterUser(users, "name", "hazzaz"));
console.log(filterUser(users, "age", 34));
