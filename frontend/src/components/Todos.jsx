import axios from "axios";

export function Todos({ todos }) {
	function updateTodo(id) {
		axios
			.put("http://localhost:3000/completed", { id: id })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}
	return (
		<div>
			{todos.map(function (todo) {
				return (
					<div key={todo._id}>
						<h1>{todo.title}</h1>
						<h2>{todo.description}</h2>
						<button onClick={() => updateTodo(todo._id)}>
							{todo.complete === false
								? "Completed"
								: "Mark as complete"}
						</button>
					</div>
				);
			})}
		</div>
	);
}
