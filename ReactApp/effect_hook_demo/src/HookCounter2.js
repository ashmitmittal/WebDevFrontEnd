import React, { useState, useEffect } from "react";

function HookCounter2() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("update sdjiaosjdfklsjgskfg");
		document.title = `You clicked ${count} times`;
	}, [count]); //if count value not change then useEffect not run else if we not include [count] then it will change on every render or when i input anything on input tag

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
}

export default HookCounter2;
