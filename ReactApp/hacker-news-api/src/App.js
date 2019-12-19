import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [Stories, setStories] = useState([
		{ title: "Loading...", by: "Please wait a min" }
	]);

	useEffect(() => {
		const topStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
		const storyUrlBase = "https://hacker-news.firebaseio.com/v0/item/";

		fetch(topStories)
			.then((data) => data.json())
			.then((data) =>
				data.map((id) => {
					const url = `${storyUrlBase}${id}.json`;
					return fetch(url).then((d) => d.json());
				})
			)
			.then((promises) => Promise.all(promises))
			.then(
				(d) => setStories(d)
				// d.map((s) => {
				// 	console.log(s);
				// 	setStories(s);
				// 	console.log(Stories);
				// })
			);
	});

	return (
		<div className="App">
			<h1>Hacker news top stories</h1>
			<ul>
				{Stories.map((s) => (
					<p key={s.id}>
						<a className="item" href={s.url}>
							{s.title}
						</a>
						- <b>{s.by}</b>
					</p>
				))}
			</ul>
		</div>
	);
}

export default App;
