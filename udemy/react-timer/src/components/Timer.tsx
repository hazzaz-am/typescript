import { useState } from "react";
import Container from "./UI/Container.tsx";

type TimerProps = {
	name: string;
	duration: number;
};

export default function Timer({ name, duration }: TimerProps) {
	const [remainingState, setRemainingState] = useState(duration * 1000);

	setInterval(() => {
		setRemainingState((prevTime) => prevTime - 50);
	}, 50);

	return (
		<Container as="article">
			<h2>TODO: {name}</h2>
			<p>
				<progress max={duration * 1000} value={remainingState} />
			</p>
			<p>{duration}</p>
		</Container>
	);
}
