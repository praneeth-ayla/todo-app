import axios from "axios";

export function Todos({ todos, setTodos, fetchTodos }) {
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
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function deleteTodo(id) {
		axios
			.delete("http://localhost:3000/delete", { data: { id } })
			.then((res) => {
				fetchTodos();
			})
			.catch((err) => console.log(err));
	}

	function TodoCard({ todo }) {
		return (
			<div
				key={todo._id}
				className="p-3 m-5 border text-zinc-300 bg-zinc-800 border-gray-950 min-h-60">
				<div className="flex justify-between">
					<button
						onClick={() => updateTodo(todo._id, todo.completed)}>
						{todo.completed ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="white"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="gray"
								class="w-6 h-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						)}
					</button>
					<div
						className={`text-2xl ${
							todo.completed ? "line-through" : ""
						}`}>
						{todo.title}
					</div>
					<button onClick={() => deleteTodo(todo._id)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>
				</div>
				<div className="break-normal text-zinc-500">
					{todo.description}
				</div>
			</div>
		);
	}
	return (
		<div className="w-full gap-3 sm:grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 ">
			{todos.map(function (e) {
				return (
					<TodoCard
						key={e._id}
						todo={e}></TodoCard>
				);
			})}
		</div>
	);
}
