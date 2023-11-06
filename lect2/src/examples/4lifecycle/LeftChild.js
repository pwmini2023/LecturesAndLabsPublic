import React, { useEffect } from "react";

function LeftChild({ studentName, teacherName }) {
	useEffect(() => {
		console.log("LeftChild fired only when studentName changes");
	}, [studentName]);

	return (
		<div>
			<h2>Left Child Component</h2>
			<p>Stundent Name Search Term: {studentName}</p>
			<p>Teacher Name Search Term: {teacherName}</p>
		</div>
	);
}

export default LeftChild;
