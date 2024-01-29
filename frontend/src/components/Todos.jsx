export function Todos({ todos }) {
	return (
		<div>
			{todos.map(function (todo) {
				return (
					<div>
						<h1>{todo.title}</h1>
						<h2>{todo.description}</h2>
						<button onClick={fetchTodos}>
							{todo.complete == true
								? "Completed"
								: "Mark as complete"}
						</button>
					</div>
				);
			})}
		</div>
	);
}
