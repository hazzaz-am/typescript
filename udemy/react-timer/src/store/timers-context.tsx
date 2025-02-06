import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
	name: string;
	duration: number;
};

type TimersState = {
	isRunning: boolean;
	timers: Timer[];
};

const initialState: TimersState = {
	isRunning: false,
	timers: [],
};

type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

type TimersContextProviderProps = {
	children: ReactNode;
};

type ActionType = {
	type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
	payload?: Timer;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
	const timersCtx = useContext(TimersContext);
	if (!timersCtx) {
		throw new Error(
			"useTimersContext must be used within a TimersContextProvider"
		);
	}
	return timersCtx;
}

const timersReducer = (state: TimersState, action: ActionType): TimersState => {
	switch (action.type) {
		case "ADD_TIMER":
			return {
				...state,
				timers: [
					...state.timers,
					{
						name: action.payload?.name ?? "",
						duration: action.payload?.duration ?? 0,
					},
				],
			};
		case "START_TIMERS":
			return { ...state, isRunning: true };
		case "STOP_TIMERS":
			return { ...state, isRunning: false };
		default:
			return state;
	}
};

export const TimersContextProvider = ({
	children,
}: TimersContextProviderProps) => {
	const [timersState, dispatch] = useReducer(timersReducer, initialState);

	const ctx: TimersContextValue = {
		timers: timersState.timers,
		isRunning: timersState.isRunning,
		addTimer: (timerData) => {
			dispatch({ type: "ADD_TIMER", payload: timerData });
		},
		startTimers: () => {
			dispatch({ type: "START_TIMERS" });
		},
		stopTimers: () => {
			dispatch({ type: "STOP_TIMERS" });
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
};
