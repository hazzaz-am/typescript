function processUserData(users, filterCriteria, fieldsToAggregate) {
	// step 1: filter users based on filterCriteria
	const filteredUsers = users.filter((user) => {
		return Object.entries(filterCriteria).every(([key, value]) => {
			user[key] === value;
		});
	});

	// Step 2: Aggregate specific fields
	const aggregatedData = fieldsToAggregate.reduce((acc, filed) => {
		acc[filed] = filteredUsers.reduce((sum, user) => sum + user[filed], 0);
		return acc;
	}, {});

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
const users = [
	{ id: 1, firstName: "John", lastName: "Doe", score: 30, age: 20 },
	{ id: 2, firstName: "Jane", lastName: "Smith", age: 25 },
	{ id: 3, firstName: "Bob", lastName: "Johnson", score: 35, age: 28 },
];

const filterCriteria = { age: 20 };
const fieldsToAggregate = ["scores"];

const result = processUserData(users, filterCriteria, fieldsToAggregate);

console.log(result);
