import { useState } from "react";
import axios from "axios";

export function CreateTodo() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAdd = () => {
		if (title.length > 1) {
			axios
				.post("http://localhost:3000/todo", {
					title: title,
					description: description,
				})
				.catch((err) => console.log(err));
		} else {
			return alert("Title can't be empty");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="title"
				id="title"
				className="text-red-400 border-4 border-indigo-500/100"
				onChange={(e) => setTitle(e.target.value)}
				minLength={"1"}
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
