type ID = string | number;

function printID(id: ID) {
  console.log(`ID: ${id}`);
}

printID(123); // Works
printID("ABC123"); // Works
// printID(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'ID'


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): void {
  console.log(`User created: ${user.name} (${user.email})`);
}

const newUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
};

createUser(newUser);



type MathOperation = (a: number, b: number) => number;

// const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2



type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

console.log(products[0].name); // Laptop

