type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

let d = <One>"hello";
let e = <string | number>"world";

const addOrConcat = (
	a: number,
	b: number,
	c: "add" | "concat"
): number | string => {
	if (c === "add") {
		return a + b;
	}
	return "" + a + b;
};

// be careful ts will not throw an error if you try to assign a number to a string
const resultValue: string = addOrConcat(1, 2, "add") as string;
const resultValue2: number = addOrConcat(1, 2, "concat") as number;



