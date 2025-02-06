import { useEffect, useRef, useState } from "react";
import Container from "./UI/Container.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

type TimerProps = {
	name: string;
	duration: number;
};

export default function Timer({ name, duration }: TimerProps) {
	const [remainingState, setRemainingState] = useState(duration * 1000);
	const timerRef = useRef<number | null>(null);
	const { isRunning } = useTimersContext();

	if (remainingState <= 0 && timerRef.current) {
		clearInterval(timerRef.current);
	}

	useEffect(() => {
		let timer: number;

		if (!isRunning) {
			timer = setInterval(() => {
				setRemainingState((prevTime) => prevTime - 50);
			}, 50);
			timerRef.current = timer;
		} else if (timerRef.current) {
			clearInterval(timerRef.current);
		}

		return () => clearInterval(timer);
	}, [isRunning]);

	const formattedRemainingTime =
		remainingState > 0 ? (remainingState / 1000).toFixed(2) : 0 / 1000;
	console.log(formattedRemainingTime);

	return (
		<Container as="article">
			<h2>TODO: {name}</h2>
			<p>
				<progress max={duration * 1000} value={remainingState} />
			</p>
			<p>{formattedRemainingTime}</p>
		</Container>
	);
}
