// type in function
type UserName = (a: number, b: number) => number;

const fun: UserName = (n, m) => {
	return n * m;
};

// type in arrays
const numbers: number[] = [4, 5, 6, 7, 8];
const mix: (string | number)[] = [3, 4, 5, "4"];
const mixed: (string | number | boolean)[] = [4, 5, 6, 7, "56", true];

const arrays: Array<number | string> = [3, 4, 5, 6];
arrays.push("45");

// function with object

type ProductType = {
	name: string;
	position: string;
	active: boolean;
};

function getData(product: ProductType) {
	return product;
}

const demoData = {
	name: "hazzaz",
	position: "frontend",
	active: true,
};

console.log(getData(demoData));
