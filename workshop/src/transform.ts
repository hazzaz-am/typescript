type CustomUser = {
	id: number;
	firstName: string;
	lastName?: string;
	age: number;
	score?: number;
};

type CustomerUserKeys = keyof CustomUser;

type FilterCriteria = {
	[key in CustomerUserKeys]?: CustomUser[key];
};

type FieldsToAggregate = "score" | "age";

type TransformedData = {
	id: number;
	fullName: string;
	score: number;
	age: number;
};

function processUserData(
	users: CustomUser[],
	filterCriteria: FilterCriteria = {},
	fieldsToAggregate: FieldsToAggregate[] = []
) {
	// step 1: filter users based on filterCriteria
	const filteredUsers = users.filter((user) => {
		return Object.entries(filterCriteria).every(([key, value]) => {
			user[key as CustomerUserKeys] === value;
		});
	});

	// Step 2: Aggregate specific fields
	const aggregatedData = fieldsToAggregate.reduce((acc, field) => {
		acc[field] = filteredUsers.reduce((sum, user) => {
			if (user[field] && typeof user[field] === "number") {
				return sum + user[field];
			}
			return sum;
		}, 0);
		return acc;
	}, {} as Record<FieldsToAggregate, number>);

	// Step 3: Transform data for output
	const transformedData = filteredUsers.map((user) => {
		return {
			id: user.id,
			fullName: `${user.firstName} ${user.lastName}`,
			...aggregatedData,
		};
	});

	return transformedData;
}

// example users
const customers: CustomUser[] = [
	{ id: 1, firstName: "John", lastName: "Doe", score: 30, age: 20 },
	{ id: 2, firstName: "Jane", lastName: "Smith", age: 25 },
	{ id: 3, firstName: "Bob", lastName: "Johnson", score: 35, age: 28 },
];

const filterCriteria: FilterCriteria = { age: 20 };

const fieldsToAggregate: FieldsToAggregate[] = ["score"];

console.log(processUserData(customers, filterCriteria, fieldsToAggregate));
