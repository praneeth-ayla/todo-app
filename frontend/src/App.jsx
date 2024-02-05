import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";
import imgBG from "./assets/bg.jpg";

function App() {
	const [todos, setTodos] = useState([]);

	function fetchTodos() {
		axios.get("http://localhost:3000/todos").then((e) => {
			const res = e.data.todos;
			setTodos(res);
		});
	}
	useEffect(fetchTodos, []);

	return (
		<div
			className="flex flex-col items-center w-full min-h-screen bg-cover"
			style={{ backgroundImage: `url(${imgBG})` }}>
			<h1 className="pt-5 pb-10 text-zinc-300 text-7xl">Todo App</h1>

			<CreateTodo fetchTodos={fetchTodos}></CreateTodo>

			<Todos
				todos={todos}
				setTodos={setTodos}
				fetchTodos={fetchTodos}></Todos>
		</div>
	);
}

export default App;
