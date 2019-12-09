import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
	return (
		<div className="todo">
			<div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
				<ul>
					<li>{todo.text}</li>
				</ul>
			</div>
			<div>
				<button onClick={() => completeTodo(index)}>Done</button>
				<button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");
	const handelSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form className="form" onSubmit={handelSubmit}>
			<input
				type="text"
				placeholder="Add New Todo"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

function App() {
	const [todos, setTodos] = useState([
		{
			text: "not forget to sleep",
			isCompleted: false
		},
		{
			text: "do some fun",
			isCompleted: false
		}
	]);

	const addTodo = (text) => {
		const NewTodos = [...todos, { text }];
		setTodos(NewTodos);
	};

	const completeTodo = (index) => {
		const NewTodos = [...todos];
		NewTodos[index].isCompleted = true;
		setTodos(NewTodos);
	};

	const deleteTodo = (index) => {
		const NewTodos = [...todos];
		NewTodos.splice(index, 1);
		setTodos(NewTodos);
	};

	return (
		<div className="animate App">
			<h1>TODO APP</h1>
			<div>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
