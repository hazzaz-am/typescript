let myName: string;
let dob: number;
let isDeveloper: boolean;
let hobby:any;


myName = "Hazzaz Abdul Manna";
dob = 23;
isDeveloper = true;
/**
 * "any type" defeat typescript it can be store any type of value.
 */
 hobby = "reading";
 hobby = 1;
 hobby = false;

const functionType = (a:number, b:number) => {
  return a + b
}

const numberString = (a:number, b:string) => {
  return a + b
}

/**
 * Union type tells it can be either this type or that type
 */

let unionType: string | number | boolean;
let postId: string | number;
let userLoggedIn: number | boolean;
