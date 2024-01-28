export function CreateTodo() {
	return (
		<div>
			<input
				type="text"
				placeholder="title"
				style={{
					padding: "10px",
					margin: "10px",
				}}
			/>
			<br />
			<input
				type="text"
				placeholder="description"
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
				}}>
				Add a todo
			</button>
		</div>
	);
}
