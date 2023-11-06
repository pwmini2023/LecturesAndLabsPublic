import React, { useEffect } from "react";

function RightChild({ studentName, teacherName }) {
	// useEffect(() => {
	// 	console.log("RightChild fired always");
	// });

	return (
		<div>
			<h2>Right Child Component</h2>
			<p>Stundent Name Search Term: {studentName}</p>
			<p>Teacher Name Search Term: {teacherName}</p>
		</div>
	);
}

export default RightChild;
