import React, { useCallback, useState } from "react";
import "bulma/css/bulma.css";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";

function Container() {
	// let counter = 0;
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		// counter = counter + 1;
		setCounter(counter + 1);
		console.log(`incrementCounter was run, current value: ${counter}`);
	};

	return (
		<div style={{ margin: 20 }}>
			<h1>Container Component</h1>
			<p>Counter in App component: {counter}</p>
			<br />
			<div className="columns">
				<div className="column has-background-primary">
					<LeftChild
						counter={counter}
						incrementCounter={incrementCounter}
					/>
				</div>
				<div className="column has-background-info">
					<RightChild counter={counter} />
				</div>
			</div>
		</div>
	);
}
export default Container;

// const [counter, setCounter] = useState(0);

// const incrementCounter = () => {
// 	setCounter(counter + 1);
// };
