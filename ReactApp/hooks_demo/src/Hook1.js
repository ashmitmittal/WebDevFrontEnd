import React from "react";

function Hook1(props) {
	const items = props.item;

	const addItems = () => {
		props.setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 100) + 1
			}
		]);
	};
	return (
		<div>
			<button onClick={addItems}>Add Number</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
}

export default Hook1;
