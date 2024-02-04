import { useState } from "react";
import axios from "axios";

export function CreateTodo() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAdd = () => {
		axios
			.post("http://localhost:3000/todo", {
				title: title,
				description: description,
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<input
				type="text"
				placeholder="title"
				id="title"
				className="inputField"
				style={{
					padding: "10px",
					margin: "10px",
				}}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="description"
				id="description"
				className="inputField"
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<button onClick={handleAdd}>Add a todo</button>
		</div>
	);
}
