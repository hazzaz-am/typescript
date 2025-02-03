import { type ReactNode } from "react";
import { CourseGoalType } from "../App";
import InfoBox from "../InfoBox";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
	goals: Array<CourseGoalType>;
	onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
	if (goals.length === 0) {
		return (
			<InfoBox mode="hint">
				No course goals found. Add some by clicking the "Add a new goal" button
				above.
			</InfoBox>
		);
	}

	let warningBox: ReactNode;

	if (goals.length > 3) {
		warningBox = (
			<InfoBox mode="warning" severity="medium">
				Warning: You have more than 3 goals. Consider breaking them down into
				smaller, more manageable goals.
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
};
export default CourseGoalList;
