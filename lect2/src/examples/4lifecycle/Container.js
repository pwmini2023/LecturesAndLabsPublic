import React, { useState } from "react";
import "bulma/css/bulma.css";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";

function Container() {
	const [teacher, setTeacher] = useState("");
	const [student, setStudent] = useState("");

	const handleTeacherChange = (e) => {
		setTeacher(e.target.value);
	};

	const handleStudentChange = (e) => {
		setStudent(e.target.value);
	};

	return (
		<div style={{ margin: 20 }}>
			<h1>Container Component</h1>
			<div>
				<label htmlFor="teacher">Teacher:</label>
				<input
					type="text"
					id="teacher"
					value={teacher}
					onChange={handleTeacherChange}
				/>
			</div>
			<div>
				<label htmlFor="student">Student:</label>
				<input
					type="text"
					id="student"
					value={student}
					onChange={handleStudentChange}
				/>
			</div>
			<br />
			<div className="columns">
				<div className="column has-background-primary">
					<LeftChild studentName={student} teacherName={teacher} />
				</div>
				<div className="column has-background-info">
					<RightChild studentName={student} teacherName={teacher} />
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
