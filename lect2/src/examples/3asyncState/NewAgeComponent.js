import React, { useState } from "react";

function NewAgeComponent() {
	const [age, setAge] = useState(0);

	const increaseAge = () => {
		setAge(age + 1);
		setAge(age + 1);
		setAge(age + 1);
	};

	return (
		<div style={{ margin: 20 }}>
			<h1>Age Component</h1>
			<p>Age: {age}</p>
			<button onClick={increaseAge}> Increase Age </button>
		</div>
	);
}
export default NewAgeComponent;

// setAge(currentAge => currentAge + 1);
// 		setAge(currentAge => currentAge + 1);
// 		setAge(currentAge => currentAge + 1);
