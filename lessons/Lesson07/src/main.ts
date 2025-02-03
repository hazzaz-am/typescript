// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number
// }

interface TransactionObj {
	readonly [index: string]: number;
	Pizza: number;
	Books: number;
	Job: number;
}

const todaysTransactions: TransactionObj = {
	Pizza: -10,
	Books: -5,
	Job: 50,
	Dev: 45,
};

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);

const todayNet = (transactions: TransactionObj): number => {
	let total = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

// console.log(todayNet(todaysTransactions));

///////////////////////////////////////////

interface Student {
	// [key: string]: string | number | number[] | undefined
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: "Doug",
	GPA: 4.5,
	classes: [100, 200],
};

// console.log(student.test);

// One way without [key: string]: string | number | number[] | undefined
console.log("One Way--------------------");
for (const key in student) {
	console.log(`${key}: ${student[key as keyof Student]}`);
}

// Second way without [key: string]: string | number | number[] | undefined
console.log("Second Way--------------------");
Object.keys(student).map((key) => {
	console.log(`${key}: ${student[key as keyof typeof student]}`);
});

// Third way without [key: string]: string | number | number[] | undefined
console.log("Third Way--------------------");

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`${key}: ${student[key]}`);
};

logStudentKey(student, "classes");

// Four way without [key: string]: string | number | number[] | undefined
console.log("Four Way--------------------");

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
	salary: 500,
	bonus: 100,
	sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
	console.log(monthlyIncomes[revenue as keyof Incomes]);
}
