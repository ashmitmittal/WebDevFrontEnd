import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
// import Hook1 from "./Hook1";
// import HookCounterTwo from "./HookCounterTow";
import HookCounterThree from "./HookCounterThree";
// import HookCounterFour from "./HookCounterFour";

function App() {
	// const [items, setItems] = useState([]); // use this with Hook1
	const [name, setName] = useState({ firstName: "", lastName: "" }); // use this with HookCounterThree

	return (
		<div className="App">
			{/* <HookCounterTwo /> */}
			<HookCounterThree name={name} setName={setName} />
			{/* <HookCounterFour /> */}
			{/* <Hook1 item={items} setItems={setItems} /> */}
		</div>
	);
}

export default App;
