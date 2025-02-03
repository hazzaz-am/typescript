import Header from "./components/Header";

import goalsLogo from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

// const menus = [
//   { id: 1, title: "Home" },
//   { id: 2, title: "About" },
//   { id: 3, title: "Services" },
//   { id: 4, title: "Contact" },
// ]

export type CourseGoalType = {
	title: string;
	description: string;
	id: number;
};

const App = () => {
	const [goals, setGoals] = useState<CourseGoalType[]>([]);

	const handleAddGoal = () => {
		setGoals((prevGoals) => {
			const newGoal: CourseGoalType = {
				title: "Learn React",
				description: "React is a great library",
				id: Math.random(),
			};
			return [...prevGoals, newGoal];
		});
	};

	return (
		<main>
			<Header img={{ src: goalsLogo, alt: "React Logo" }}>
				<h1>Your Course Goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<CourseGoalList goals={goals} />
		</main>
	);
};
export default App;
