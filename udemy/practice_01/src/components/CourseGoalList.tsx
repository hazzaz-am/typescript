import { CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

const CourseGoalList = ({ goals }: { goals: Array<CourseGoalType> }) => {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal title={goal.title}>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
};
export default CourseGoalList;
