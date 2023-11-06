import React from "react";

function LeftChild({ counter, incrementCounter }) {
	return (
		<div>
			<h2>Left Child Component</h2>
			<p>Counter in Left Child Component: {counter}</p>
			{incrementCounter && (
				<button onClick={incrementCounter}>Increment Counter</button>
			)}
		</div>
	);
}

export default LeftChild;
