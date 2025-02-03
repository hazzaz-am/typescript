import { useRef, type FormEvent } from "react";

type NewGoalProps = {
	onAddGoal: (title: string, description: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
	const goal = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLInputElement>(null);

	const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const goalValue = goal.current!.value;
		const descriptionValue = description.current!.value;

		event.currentTarget.reset();
		onAddGoal(goalValue, descriptionValue);
	};

	return (
		<form onSubmit={handleSubmitForm}>
			<p>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" placeholder="Your Goal" ref={goal} />
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					id="description"
					placeholder="Say Something"
					ref={description}
				/>
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
};

export default NewGoal;
