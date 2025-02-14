// interface User {
// 	id: number;
// 	name: string;
// }

// interface Admin extends User {
// 	role: "admin";
// }

// interface Admin {
// 	status: string;
// }

// const admin: Admin = {
// 	id: 1,
// 	name: "Hazzaz",
// 	role: "admin",
// 	status: "active",
// };

// console.log(admin);

type User = {
	id: number;
	name: string;
};

type Admin = User & {
	role: "admin";
	status: string;
};
