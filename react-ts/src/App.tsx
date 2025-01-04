// import Counter from "./Counter";

import { Counter2 } from "./Counter2";

function App() {
	return (
		<>
			{/* <Counter>{(num: number) => <>Current Count: {num}</>}</Counter> */}
			<Counter2>{(number: number) => <>Current Count: {number} </>}</Counter2>
		</>
	);
}

export default App;
