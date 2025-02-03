import { type ReactNode } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = {
	title: string;
	id: number;
	onDelete: (id: number) => void;
	children: ReactNode;
};

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, id, onDelete, children }: CourseGoalProps) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
};
export default CourseGoal;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };
// export default CourseGoal;
