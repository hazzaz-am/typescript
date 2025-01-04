import { ReactNode, useReducer } from "react";

type ChildrenType = {
	children: (num: number) => ReactNode;
};

enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
}

type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
};

const initialState = { count: 1 };

const reducer = (
	state: typeof initialState,
	action: ReducerAction
): typeof initialState => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 };

		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 };

		default:
			throw new Error();
	}
};

export const Counter2 = ({ children }: ChildrenType) => {
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
	const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
	return (
		<>
			<div>
				<h2>{children(state.count)}</h2>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
		</>
	);
};
