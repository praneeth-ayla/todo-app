import { useState } from "react";

export function CreateTodo() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	async function addTodos() {
		const updatedRes = await fetch("http://localhost:3000/todo", {
			method: "POST",
			body: JSON.stringify({
				title: document.getElementById("title").value,
				description: document.getElementById("description").value,
			}),
			headers: {
				"content-type": "application/json",
			},
		});
		function fetchTodos() {
			fetch("http://localhost:3000/todos").then(async function (res) {
				const json = await res.json();
				setTodos(json.todos);
			});
		}

		if (updatedRes.ok) {
			alert("Todo added");
			fetchTodos();
		} else {
			alert("Failed to add todo");
		}
	}
	return (
		<div>
			<input
				type="text"
				placeholder="title"
				id="title"
				style={{
					padding: "10px",
					margin: "10px",
				}}
			/>
			<br />
			<input
				type="text"
				placeholder="description"
				id="description"
				style={{
					padding: "10px",
					margin: "10px",
				}}
			/>
			<br />
			<button
				style={{
					padding: "10px",
					margin: "10px",
				}}
				onClick={addTodos}>
				Add a todo
			</button>
		</div>
	);
}
