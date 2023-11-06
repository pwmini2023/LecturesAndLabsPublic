import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1); // what is wrong with this code here?
	};

	return (
		<div>
			<p>Counter: {counter}</p>
			<button onClick={incrementCounter}>Increment</button>
		</div>
	);
}

export default Counter;
