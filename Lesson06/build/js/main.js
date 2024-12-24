"use strict";
class Code {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age} years old`;
    }
}
const dev = new Code("John", "Rock", 25);
console.log(dev.getAge());
// console.log(dev.age);
// console.log(dev.lang);
///////////////////////////////////////////////
class WebDev extends Code {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello, I code in ${this.lang}`;
    }
}
const webDev = new WebDev("Mac", "John", "Rock", 25);
console.log(webDev.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} ${action}`;
    }
}
const Page = new Guitarist("John", "Guitar");
console.log(Page.play("solo"));
///////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Hello = new Peeps("Hello");
console.log(Peeps.count);
console.log(John.id);
console.log(Hello.id);
///////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil", "Led"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Hello", "Hi"];
console.log(MyBands.data);
