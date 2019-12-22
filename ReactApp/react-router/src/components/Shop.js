import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Shop() {
	useEffect(() => {
		fetchItems();
	});

	const [title1, setTitle] = useState([]);
	const fetchItems = async () => {
		const url = "https://jsonplaceholder.typicode.com/posts";
		const data = await fetch(url);
		const items = await data.json();
		setTitle(items);
	};

	return (
		<div className="App">
			<h1>By some Title</h1>
			{title1.map((d) => (
				<h5 key={d.id}>
					<Link to={`/shop/${d.id}`}>{d.title}</Link>
				</h5>
			))}
		</div>
	);
}

export default Shop;
