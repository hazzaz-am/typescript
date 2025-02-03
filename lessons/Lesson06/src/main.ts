class Code {
	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "TypeScript"
	) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}

	public getAge() {
		return `Hello, I am ${this.age} years old`;
	}
}

const dev = new Code("John", "Rock", 25);
console.log(dev.getAge());
// console.log(dev.age);
// console.log(dev.lang);

///////////////////////////////////////////////

class WebDev extends Code {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
		this.computer = computer;
	}

	public getLang() {
		return `Hello, I code in ${this.lang}`;
	}
}

const webDev = new WebDev("Mac", "John", "Rock", 25);
console.log(webDev.getLang());
// console.log(webDev.age);
// console.log(webDev.lang);

///////////////////////////////////////////////

interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Guitarist implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}

	play(action: string) {
		return `${this.name} is playing ${this.instrument} ${action}`;
	}
}

const Page = new Guitarist("John", "Guitar");
console.log(Page.play("solo"));

///////////////////////////////////////////////
class Peeps {
	static count: number = 0;

	static getCount(): number {
		return Peeps.count;
	}

	public id: number;

	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Hello = new Peeps("Hello");

console.log(Peeps.count);
console.log(John.id);
console.log(Hello.id);

///////////////////////////////////////////////

class Bands {
	private dataState: string[];

	constructor() {
		this.dataState = [];
	}

	public get data(): string[] {
		return this.dataState;
	}

	public set data(value: string[]) {
		if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
			this.dataState = value;
			return;
		} else throw new Error("Param is not an array of strings");
	}
}

const MyBands = new Bands();
MyBands.data = ["Neil", "Led"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Hello", "Hi"];
console.log(MyBands.data);

