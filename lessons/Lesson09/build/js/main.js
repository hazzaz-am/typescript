"use strict";
// ! Utility Types ! //
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "dsf84",
    title: "Final Project",
    grade: 0,
};
// console.log(updateAssignment(assign1, { grade: 4.5 }));
const assignGraded = updateAssignment(assign1, { grade: 50 });
// console.log(assignGraded);
// ! Required and Readonly ! //
const recordAssignment = (assign) => {
    return Object.assign({}, assign);
};
// console.log(recordAssignment({ ...assignGraded, verified: true }));
const assignVerified = Object.assign({}, assignGraded);
// console.log(assignVerified);
//! Record !//
const hexColorMap = {
    red: "FF000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Hazzaz: "A",
    Amin: "C",
};
const finalGrades2 = {
    Hazzaz: { assign1: 80, assign2: 59 },
    Amin: { assign1: 60, assign2: 49 },
};
const score = {
    studentId: "40357",
    grade: 90,
};
const preview = {
    title: "Mid Term Result",
    verified: true,
};
//! ReturnType !//
// type newAssign = {
// 	title: string,
// 	points: number
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Result", 70);
const assignArgs = ["Generics", 80];
const taAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
