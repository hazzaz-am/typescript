// ! Utility Types ! //

// ! Partial ! //

interface Assignment {
	studentId: string;
	title: string;
	grade: number;
	verified?: boolean;
}

const updateAssignment = (
	assign: Assignment,
	propsToUpdate: Partial<Assignment>
) => {
	return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
	studentId: "dsf84",
	title: "Final Project",
	grade: 0,
};

// console.log(updateAssignment(assign1, { grade: 4.5 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 50 });
// console.log(assignGraded);

// ! Required and Readonly ! //

const recordAssignment = (assign: Required<Assignment>): Assignment => {
	return { ...assign };
};
// console.log(recordAssignment({ ...assignGraded, verified: true }));

const assignVerified: Readonly<Assignment> = {
	...assignGraded,
};
// console.log(assignVerified);

//! Record !//
const hexColorMap: Record<string, string> = {
	red: "FF000",
	green: "00FF00",
	blue: "0000FF",
};

type Students = "Hazzaz" | "Amin";
type LetterGrades = "A" | "B" | "C" | "D" | "E" | "U";

const finalGrades: Record<Students, LetterGrades> = {
	Hazzaz: "A",
	Amin: "C",
};

// console.log(finalGrades);

interface Grades {
	assign1: number;
	assign2: number;
}

const finalGrades2: Record<Students, Grades> = {
	Hazzaz: { assign1: 80, assign2: 59 },
	Amin: { assign1: 60, assign2: 49 },
};

// console.log(finalGrades2);

//! Pick and Omit !//

type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignmentResult = {
	studentId: "40357",
	grade: 90,
};

type AssignmentPreview = Omit<Assignment, "studentId" | "grade">;

const preview: AssignmentPreview = {
	title: "Mid Term Result",
	verified: true,
};

// console.log(preview);

//! Exclude and Extract !//
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B" | "C">;

//! NonNullable !//
type allPossibleGrades = "John" | "Dev" | null | undefined;
type namesOnly = NonNullable<allPossibleGrades>;

//! ReturnType !//
// type newAssign = {
// 	title: string,
// 	points: number
// }

const createNewAssign = (title: string, points: number) => {
	return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Result", 70);
// console.log(tsAssign);

//! Parameters !//

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 80];

const taAssign2: NewAssign = createNewAssign(...assignArgs);
// console.log(taAssign2);

//! Awaited - helps us with the ReturnType of a Promise !//

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

const fetchUsers = async (): Promise<User[]> => {
	const data = await fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			if (err instanceof Error) console.log(err.message);
		});
	return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));