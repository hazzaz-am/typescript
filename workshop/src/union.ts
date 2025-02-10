type UniqueID = string | number;

type Admin = {
	id: UniqueID;
	role: "admin";
	fullControl: boolean;
};

type Manager = {
	id: UniqueID;
	role: "manager";
};

type UniqueUser = Admin | Manager;

function doSomething(user: UniqueUser) {
	if (user.role === "manager") {
		console.log(user.role);
	}
}

function formatValue(value: string | number) {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else if (typeof value === "number") {
		return value.toFixed(2);
	}
}

// console.log(formatValue(7777));

type ErrorResponse = {
	error: true;
	message: string;
};

type SuccessResponse = {
	error: false;
	data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
	if (response.error) {
		console.log(response.message);
	} else {
		console.log(response.data);
	}
}

// Intersection Types

type Person = {
	name: string;
};

type Customer = Person & {
	id: number;
	salary: number;
};

const user: Customer = {
	name: "Hazzaz",
	id: 1,
	// salary: 10000, // Error: Property 'salary' is missing in type 'Customer' but required in type 'Person'.
	salary: 10000,
};

type BaseProps = {
	id: number;
	name: string;
	className?: string;
};

type ButtonProps = BaseProps & {
	type: "button" | "submit" | "reset";
	onClick: () => void;
};

type InputProps = BaseProps & {
	type: "text" | "number";
	onChange: (value: string) => void;
	placeholder?: string;
	value: string;
};
