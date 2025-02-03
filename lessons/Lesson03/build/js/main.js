"use strict";
let strArr = ["hey", "hazzaz"];
let doubleArr = ["num1", 34];
let mixedArr = ["arr", 34, true];
// we can push only string in strArr because it contains all string. This is called array of string
strArr[1] = "hello";
strArr.push("how are you?");
// it is uniun type array here we can push only string or number. Order is doesn't matter
doubleArr.push(0);
doubleArr.unshift();
// in this array we can give string, number, boolean type of data and again order is doesn't matter
mixedArr.push(45);
mixedArr[mixedArr.length - 1] = "arr2";
mixedArr[2] = false;
// it defineds array can receive any type of data
let array = [];
// we can declare array with tell the type explictly. now it receives only string you can't assign other type of data
let arrayOfString = [];
// we can assign one array to another array but if there type doesn't match you can't do that
// strArr = doubleArr  // => Type '(string | number)[]' is not assignable to type 'string[]'.
// Tuple
// array length and element order doesn't matter but you could be more strict using tuple type where it is matter
let myTuple = ["hazzaz", 23, "old"];
// we can't do that because we define second element in tuple is number so we have to give number in the second element
// myTuple[1] = "is"; Type 'string' is not assignable to type 'number'.
myTuple[1] = 45;
// also we can't increase the length of the array as we define that myTuple can receive only 3 valus and it's length will be three. but here we are trying to assign value in 3 number index which we were not define
// myTuple[myTuple.length] = 21 Tuple type '[string, number, string]' of length '3' has no element at index '3'.
let tupleMixed = ["45", 45, "45"];
tupleMixed = myTuple;
/** myTuple = tupleMixed
 * Type '(string | number)[]' is not assignable to type '[string, number, string]'.
   Target requires 3 element(s) but source may have fewer.
   In first assignment we didn't get any error
 */
// Objects
// because in js array type is object
let obj;
obj = [];
obj = {};
// 1st way to declare object
let user = {
    userId: 1,
    userTitle: "Number One Course",
};
let post = {
    postId: 1,
    postTitle: "hello",
    postAuthor: "karishma",
    isApproved: true,
};
let hazzaz = {
    userId: 12,
    // user: "hazzaz",
    isLogged: true,
    skills: ["js", "c", "python"],
};
const functionObj = (givemeObj) => {
    var _a;
    return (_a = givemeObj.user) === null || _a === void 0 ? void 0 : _a.toUpperCase();
};
// Enums
// Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime
var GradeBook;
(function (GradeBook) {
    GradeBook[GradeBook["F"] = 0] = "F";
    GradeBook[GradeBook["D"] = 1] = "D";
    GradeBook[GradeBook["C"] = 2] = "C";
    GradeBook[GradeBook["B"] = 3] = "B";
    GradeBook[GradeBook["A"] = 4] = "A";
})(GradeBook || (GradeBook = {}));
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 1] = "F";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
