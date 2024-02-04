import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

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
		<div>
			<CreateTodo></CreateTodo>
			<Todos todos={todos}></Todos>
		</div>
	);
}

export default App;
