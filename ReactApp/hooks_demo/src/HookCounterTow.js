import React, { useState } from "react";

function HookCounterTwo() {
	const initValue = 0;
	const [count, setValue] = useState(initValue);

	const incrementFive = () => {
		for (let i = 0; i < 10; i++) {
			setValue((prevCount) => prevCount + 1);
		}
	};

	return (
		<div>
			Count: {count}
			<button onClick={() => setValue(initValue)}>Reset</button>
			<button onClick={() => setValue(count + 1)}>Increment</button>
			<button onClick={() => setValue(count - 1)}>Decrement</button>
			<button onClick={incrementFive}>Increment by 10</button>
		</div>
	);
}

export default HookCounterTwo;
