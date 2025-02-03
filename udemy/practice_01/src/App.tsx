import Header from "./components/Header";

import goalsLogo from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

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

	const handleAddGoal = (title: string, description: string) => {
		setGoals((prevGoals) => {
			const newGoal: CourseGoalType = {
				title: title,
				description: description,
				id: Math.random(),
			};
			return [...prevGoals, newGoal];
		});
	};

	const handleDeleteGoal = (id: number) => {
		setGoals((prevGoals) => {
			return prevGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<main>
			<Header img={{ src: goalsLogo, alt: "React Logo" }}>
				<h1>Your Course Goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
};
export default App;
