import React, { useState, useEffect } from "react";
import "../App.css";

function Detail({ match }) {
	useEffect(() => {
		fetchBody();
	});

	const [body, setBody] = useState();

	const fetchBody = async () => {
		const fetchitem = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${match.params.id}`
		);
		const item = await fetchitem.json();
		setBody(item.body);
	};

	return (
		<div className="App">
			<h1>Details page</h1>
			{body}
		</div>
	);
}

export default Detail;
