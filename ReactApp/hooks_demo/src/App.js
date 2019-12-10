import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Hook1 from "./Hook1";
// import HookCounterTwo from "./HookCounterTow";
// import HookCounterThree from "./HookCounterThree";
// import HookCounterFour from "./HookCounterFour";

function App() {
	const [items, setItems] = useState([]);

	return (
		<div className="App">
			{/* <HookCounterTwo /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterFour /> */}
			<Hook1 item={items} setItems={setItems} />
		</div>
	);
}

export default App;
