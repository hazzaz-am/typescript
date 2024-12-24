// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
	name?: string;
	active: boolean;
	albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal types
let myName: "Hazzaz";
let userName: "Dev" | "hazzaz";
userName = "hazzaz";

// Functions

const logMessage = (message: any): void => {
	console.log(message);
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b:number):number
// }

const multiply: mathFunction = (a, b) => {
	return a * b;
};

logMessage(multiply(2, 5));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== "undefined") {
		return a + b + c;
	}
	return a + b;
};

// Default parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
	return a + b + c;
};

logMessage(addAll(10, 20));
logMessage(sumAll(10, 20));

// rest parameters
const total = (...nums: number[]): number => {
	return nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(1, 2, 3, 4, 5));

// never type
const createError = (errMessage: string): never => {
	throw new Error(errMessage);
};

const infinite = () => {
	let i: number = 1;
	while (true) {
		i++;
		if (i > 100) break;
	}
};

// custom type guard
const isNumber = (value: any): boolean => {
	return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
	if (typeof value === "string") return "string";
	if (isNumber(value)) return "number";
	return createError("This should never happen");
};
