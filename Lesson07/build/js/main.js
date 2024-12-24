"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dev: 45,
};
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Doug",
    GPA: 4.5,
    classes: [100, 200],
};
// console.log(student.test);
// One way without [key: string]: string | number | number[] | undefined
console.log("One Way--------------------");
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Second way without [key: string]: string | number | number[] | undefined
console.log("Second Way--------------------");
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
});
// Third way without [key: string]: string | number | number[] | undefined
console.log("Third Way--------------------");
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, "classes");
// Four way without [key: string]: string | number | number[] | undefined
console.log("Four Way--------------------");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
