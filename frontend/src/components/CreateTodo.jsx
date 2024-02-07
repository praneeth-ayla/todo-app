import { useState } from "react";
import axios from "axios";

export function CreateTodo({ fetchTodos }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAdd = () => {
		if (title.length >= 1) {
			axios
				.post("https://todoapp-backend-bhep.onrender.com/todo", {
					title: title,
					description: description,
				})
				.then((res) => {
					fetchTodos();
				})
				.catch((err) => console.log(err));
		} else {
			return alert("Title can't be empty");
		}
	};

	return (
		<div className="p-4 mb-5 bg-zinc-700">
			<input
				type="text"
				placeholder="title"
				id="title"
				className="p-1 text-white placeholder-gray-400 border-2 border-gray-500 rounded-md bg-zinc-500"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<textarea
				type="entry"
				placeholder="description"
				rows="4"
				id="description"
				className="w-full p-1 mt-4 text-white placeholder-gray-400 rounded-md bg-zinc-500 "
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<button
				onClick={handleAdd}
				className="p-1 font-semibold rounded-lg text-zinc-900 bg-zinc-400 ">
				Add todo
			</button>
		</div>
	);
}
