import React, { useState, useEffect } from "react";

function HookCounter1() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("in effects");
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
}

export default HookCounter1;
