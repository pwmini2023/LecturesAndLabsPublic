import React from "react";

function RightChild({ counter, incrementCounter }) {
	return (
		<div>
			<h2>Right Child Component</h2>
			<p>Counter in Right Child Component: {counter}</p>
		</div>
	);
}

export default RightChild;
