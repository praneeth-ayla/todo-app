import axios from "axios";

export function Todos({ todos, setTodos }) {
	function fetchTodos() {
		axios.get("http://localhost:3000/todos").then((res) => {
			const response = res.data.todos;
			setTodos(response);
		});
	}
	function updateTodo(id, complete) {
		const todoId = id;
		let data;

		if (complete) {
			data = {
				id: todoId,
				status: false,
			};
		} else {
			data = {
				id: todoId,
				status: true,
			};
		}
		axios
			.put("http://localhost:3000/completed", data)
			.then((res) => {
				fetchTodos();
				// console.log(id, complete);
			})
			.catch((err) => {
				// console.log(err), console.log(id, complete);
			});
	}
	function deleteTodo(id) {
		console.log(id);
		axios
			.delete("http://localhost:3000/delete", { data: { id } })
			.then((res) => {
				fetchTodos();
				console.log("todo delted");
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			{todos.map(function (todo) {
				return (
					<div key={todo._id}>
						<h1>{todo.title}</h1>
						<h2>{todo.description}</h2>
						<button
							onClick={() =>
								updateTodo(todo._id, todo.completed)
							}>
							{todo.completed ? "Completed" : "Mark as complete"}
						</button>
						<button onClick={() => deleteTodo(todo._id)}>
							Delete Todo
						</button>
					</div>
				);
			})}
		</div>
	);
}
