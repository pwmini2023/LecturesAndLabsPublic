import React, { useState } from "react";

function AgeComponent() {
	const [age, setAge] = useState(12);

	const updateAge = (newAge) => {
		setAge(newAge);
		console.log(`Age updated: ${age}`);
	};

	const increaseAge = () => {
		// setAge((previousAge) => previousAge + 1);
		// setAge((previousAge) => previousAge + 1);
		// setAge((previousAge) => previousAge + 1);
	};

	return (
		<div style={{ margin: 20 }}>
			<h1>Age Component</h1>
			<p>Age: {age}</p>
			<input
				type="number"
				value={age}
				onChange={(e) => updateAge(e.target.value)}
			/>
			{/* <button onClick={increaseAge}> Increase Age </button> */}
		</div>
	);
}
export default AgeComponent;

// function AgeComponent() {
// 	const [age, setAge] = useState(0);

// 	const updateAge = (newAge) => {
// 		setAge(newAge);
// 		console.log(`Age updated: ${age}`);
// 	};

// 	return (
// 		<div style={{ margin: 20 }}>
// 			<h1>Age Component</h1>
// 			<p>Age: {age}</p>
// 			<input
// 				type="number"
// 				value={age}
// 				onChange={(e) => updateAge(e.target.value)}
// 			/>
// 		</div>
// 	);
// }
