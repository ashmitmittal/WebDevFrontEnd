import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
	const [post, setPost] = useState({ title: "Loading..." });
	const [posts, setPosts] = useState([]);
	const [id, setId] = useState(1);
	const [idButton, setIdButton] = useState(1);

	const handelClick = () => {
		setIdButton(id);
	};

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			console.log("fetch sucess");
			setPosts(res.data);
		});
	}, []);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
			.then((res) => {
				// console.log(res);
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [idButton]);

	return (
		<div>
			<h1>Fetching data</h1>
			<input
				type="text"
				value={id}
				onChange={(e) => {
					setId(e.target.value);
				}}
			/>
			<button type="button" onClick={handelClick}>
				Fetch Post
			</button>

			<div>
				<h2>
					<strong>
						<i>Title- </i>
					</strong>
					{post.title}
				</h2>
				<h5>
					<strong>
						<i>Body- </i>
					</strong>
					{post.body}
				</h5>
				<hr />
			</div>
			<ol>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	);
}

export default DataFetch;
