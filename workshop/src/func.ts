/**
 * Typed Parameters
 * Typed Return Values
 * Optional Parameters
 * Default Parameters
 * Rest Parameters
 */

/**
 * take two numbers and returns a sum
 * @param a first number
 * @param b second number
 * @returns a string which is sum of a and b
 * @example
 * add(1 + 2) // 3.00
 */

function add(a: number, b: number): string {
	return (a + b).toFixed(2);
}

// console.log(add(2.343, 4.334));

/**
 * A greeting function for greet a specific person
 * @param name a person name
 * @param message a message to the person
 * @example
 * greet('Hazzaz', 'How are you?') // Hello, Hazzaz! How are you?
 */
function greet(name: string, message?: string) {
	console.log(
		`Hello, ${name}! ${message ? message : "Welcome to Stack Learner."}`
	);
}

greet("Hazzaz", "How are you?");

enum EmployeeRole {
	ADMIN = "ADMIN",
	DEVELOPER = "DEVELOPER",
	HR = "HR",
}

const employees: {
	id: number;
	name: string;
	role: EmployeeRole;
}[] = [];

employees.push({
	id: 1,
	name: "Hazzaz",
	role: EmployeeRole.DEVELOPER,
});

employees.push({
	id: 2,
	name: "Amin",
	role: EmployeeRole.HR,
});

employees.push({
	id: 3,
	name: "Hujjat",
	role: EmployeeRole.ADMIN,
});

/**
 * Finds an employee by their ID.
 * @param id - The unique identifier of the employee.
 * @returns The employee object if found, otherwise undefined.
 */

function findById(id: number): {
	id: number;
	name: string;
	role: EmployeeRole;
} {
	const user = employees.find((emp) => emp.id === id);

	if (!user) {
		throw new Error("User not found");
	}

	return user;
}

console.log(findById(3));
