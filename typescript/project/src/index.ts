// type in function
// type UserName = (a: number, b: number) => number;

// const fun: UserName = (n, m) => {
// 	return n * m;
// };
// fun(2, 3);

// type in arrays
// const numbers: number[] = [4, 5, 6, 7, 8];
// const mix: (string | number)[] = [3, 4, 5, "4"];
// const mixed: (string | number | boolean)[] = [4, 5, 6, 7, "56", true];

// const arrays: Array<number | string> = [3, 4, 5, 6];
// arrays.push("45");

// console.log(numbers, mix, mixed);

// function with object

// type ProductType = {
// 	name: string;
// 	position: string;
// 	active: boolean;
// };

// function getData(product: ProductType) {
// 	return product;
// }

// const demoData = {
// 	name: "hazzaz",
// 	position: "frontend",
// 	active: true,
// };

// console.log(getData(demoData));

// classes in typescript
// console.log("Typescript class -------------------------");
// class Player {
// private: only access height in class
// private height = 34;

// weight = 20;
// protected: only access in class and is sub class

// 	constructor(
// 		private height: number,
// 		public weight: number,
// 		protected power: number
// 	) {}

// getHeight = () => this.height;
// 	get playerHeight() {
// 		return this.height;
// 	}

// 	set fixPlayerHeight(val: number) {
// 		this.height = val;
// 	}
// }

// const payer1 = new Player(40, 50, 80);

// class Player2 extends Player {
// 	special?: false;

// 	constructor(
// 		height: number,
// 		weight: number,
// 		power: number,
// 		special?: boolean
// 	) {
// 		super(height, weight, power);
// 		this.special = special;
// 	}

// 	getPower = () => this.power;
// }

// const payer2 = new Player2(40, 50, 80);

// console.log("Player 1: ", (payer1.fixPlayerHeight = 100));
// console.log("Player 2: ", payer2);

// console.log("Interface with class -------------------------");
// interface ProductType {
// 	name: string;
// 	price: number;
// 	stock: number;
// }

// interface IdGetter {
// 	getId: () => string;
// }

// class Product implements ProductType, IdGetter {
// 	private id: string = String(Math.round(Math.random() * 10000));

// 	constructor(
// 		public name: string,
// 		public price: number,
// 		public stock: number
// 	) {}

// 	getId() {
// 		return this.id;
// 	}
// }

// const newProduct = new Product("Watch", 10000, 60);
// console.log(newProduct);

// console.log("Type assertion -------------------------");

/**
 * as: i know what i am doing so just keep the type as i say. this is the thing that "as" do
 * const btn = document.getElementById("btn") as HTMLElement;
 */

/**
 * ! : it says that I am sure that it is not possibly null
 *  const btn = document.getElementById("btn")!;
 */

/**
 * <HtmlElement>
 *  const btn = <HTMLElement>document.getElementById("btn");
 */

// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick = function () {
// 	console.log("clicked");
// };

// image type assertion
// const image = document.getElementById("image") as HTMLImageElement;
// const image = document.querySelector("img")!;

// image.src =
// 	"https://images.unsplash.com/photo-1737320372090-c61d2cb88ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const form = document.getElementById("myForm") as HTMLFormElement;
// const input = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
// 	e.preventDefault();

// 	const p = document.createElement("p");
// 	const body = document.querySelector("body")!;

// 	p.innerText = String(Number(input.value) + 20);
// 	body.append(p);
// };

/**
 * this is one type of type assertion to access key of a object but there is a  issue because user can give any type of key which is not in the object but it is a string than we have to handle error cases
 */
// interface Person {
// 	[key: string]: string;
// }

// interface Person {
// 	name: string;
// 	age: string;
// }

// const myObj: Person = {
// 	name: "Hazzaz",
// 	age: "69",
// };

// function getName() {
// 	return myObj.name;
// }

// getName();

// function getAge() {
// 	return myObj.age;
// }

// getAge();

/**
 *
 * @param key is a key of Person interface which is now name or email
 * @returns string
 */
// function getValue(key: keyof Person) {
// 	return myObj[key];
// }

/**
 *
 * @param key is type of myObj key type. We can use this when we don't have the interface and myObj is coming from third party library
 * @returns
 */

// function getValue(key: keyof typeof myObj) {
// 	return myObj[key];
// }

// getValue("name");

// Utility types -------------------------------------

/**
 *  Partial<Type>
 */
// type User = {
// 	name: string;
// 	email: string;
// 	age: number;
// };

// type User1 = Partial<User>;

// const user1: User = {
// 	name: "Hazzaz",
// 	email: "hazzaz@gmail.com",
// 	age: 20,
// };

// console.log(user1);

// const user2: User1 = {
// 	name: "Hazzaz",
// 	age: 20,
// };
// console.log(user2);

/**
 *  Required<Type>
 * make optional type required
 */

// type User = {
//   name?: string,
//   age?: number
// }

// const user: Required<User> = {
//   name: 'hazzaz',
//   age: 34
// }

/**
 *  Readonly<Type>
 * make optional property read only
 */

// type User = {
// 	name: string;
// 	age: number;
// };

// const user: Readonly<User> = {
// 	name: "hazzaz",
// 	age: 34,
// };

/**
 *  Record<key, value>
 * take object keys and set it's value
 */

// interface User {
// 	age: number;
// }

// type Username = "hazzaz" | "amin" | "shafin";

// const abc: Record<Username, User> = {
// 	hazzaz: {
// 		age: 56,
// 	},
// 	amin: {
// 		age: 45,
// 	},
// 	shafin: {
// 		age: 45,
// 	},
// };

/**
 *  Pick<type, keys>
 * take another type as first argument and take second argument for what keys it wanted to take
 */

// type UserInfo = {
// 	name: string;
// 	age: number;
// 	isActive: boolean;
// 	posts: string[];
// };

// const userPosts: Pick<UserInfo, "posts"> = {
// 	posts: ["my first day at school"],
// };

/**
 *  Omit<type, keys>
 * take another type as first argument and take second argument for what keys it wanted to remove from the type
 */

// type UserInfo = {
// 	name: string;
// 	age: number;
// 	isActive: boolean;
// 	posts: string[];
// };

// const userPosts: Omit<UserInfo, "posts"> = {
// 	name: "hazzaz",
// 	age: 45,
// 	isActive: true,
// };

/**
 *  Exclude<union type, excludemembers>
 * first argument is telling that which arguments are available and second argument is telling that which argument i want to remove
 */

type ABC = string | number | boolean;

type NewAbc = Exclude<ABC, boolean>;

/**
 *  Extract<type, union>
 * first argument is telling the type and second argument is telling that which argument i want to keep
 */

type LADKJF = string | number | (() => void);

type Jalsdkjf = Extract<LADKJF, Function>;

/**
 *  NonNullable<type>
 * take the type and remove all the undefined and null value
 */

type Non = string | number | boolean | undefined | null;

type Yes = NonNullable<Non>;
// how to remove null using exclude

type YesE = Exclude<Non, undefined | null>;

/**
 *  Return<type>
 * take function type and detact the type
 */

const hello = (s: string): string => {
	return s;
};

type HelloType = ReturnType<typeof hello>;

// generics ----------------------------

// const myName = <T>(value: T): T => {
// 	return value;
// };

// console.log(myName("hazzaz"));
// const func = <T, U>(n: T, u: U): { n: T; u: U } => {
// 	return { n, u };
// };

// const nice = func("name", 56);

/**
 * extends keyword refer that you should have the parent types value than you can add you own
 */

// type Person = {
// 	name: string;
// 	age: number;
// };

// type Person2 = {
// 	name: string;
// 	age: number;
// 	email: string;
// };

// const hazzaz: Person = {
// 	name: "hazzaz",
// 	age: 12,
// };

// const amin: Person2 = {
// 	name: "amin",
// 	age: 5,
// 	email: "amin@gmail.com",
// };

// const insan = <T, U extends T>(
// 	person: T,
// 	person2: U
// ): { person: T; person2: U } => {
// 	return { person, person2 };
// };

// const insan1 = insan<Person, Person2>(hazzaz, amin);

type Person = {
	name: string;
	age: number;
};

const users: Person[] = [
	{
		name: "hazzaz",
		age: 23,
	},
	{
		name: "amin",
		age: 34,
	},
	{
		name: "hujjat",
		age: 34,
	},
];

const filterUser = <T, K extends keyof T>(
	arr: T[],
	property: K,
	value: T[K]
) => {
	return arr.filter((item) => item[property] === value);
};

console.log(filterUser(users, "name", "hazzaz"));
console.log(filterUser(users, "age", 34));
