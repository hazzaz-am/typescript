function functionName<T>(arg: T): T {
	console.log(typeof arg);
	return arg;
}

functionName<string>("Hazzaz");
functionName<number>(7777);
functionName<boolean>(true);

// type inferenceasdf
functionName("Amin");
functionName(8888);
functionName(false);

function mergeObject<T, U>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const merged1 = mergeObject({ a: 1 }, { b: 3, c: 4 });
const merged2 = mergeObject({ name: "Hazzaz" }, { age: 45 });

type MysteryBox<T> = {
	value: T;
};

type User2 = {
	name: string;
	age: number;
	role: string;
};

type Users = User2[];

const box: MysteryBox<string> = { value: "Hazzaz" };
const users: MysteryBox<Users | null> = { value: [] };
const user2: MysteryBox<User2 | null> = { value: null };

type APIResponse<T> = {
	data: T;
	status: number;
	message: string;
};

type User3 = {
	id: string;
	firstName: string;
	lastName: string;
};

type Product3 = {
	id: string;
	name: string;
	price: number;
	discount: number;
};

// async function fetchUser(): Promise<APIResponse<User3>> {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const data = await response.json();

// 	return {
// 		data,
// 		status: response.status,
// 		message: response.statusText,
// 	};
// }

const fetchData = async <T>(url: string): Promise<APIResponse<T>> => {
	const response = await fetch(url);
	const data = await response.json();

	return {
		data,
		status: response.status,
		message: response.statusText,
	};
};

async function main() {
	const user = await fetchData<User3>(
		"https://jsonplaceholder.typicode.com/users"
	);
	console.log(user.data.firstName);

	const products = await fetchData<Product3>("https://dummyjson.com/products");
	console.log(products.data.discount);
}

main();

/**
 * Record Type
 */

type ObjType = Record<string, number>;

const obj: ObjType = {};
