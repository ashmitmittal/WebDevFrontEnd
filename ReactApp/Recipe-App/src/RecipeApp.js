import React, { useState } from "react";
// import logo from './logo.svg';
// import Recipe from './Recipe';
import "./RecipeApp.css";
import Navbar from "./navbar";
import RecipeList from "./RecipeList";
import RecipeInput from "./RecipeInput";

function RecipeApp(props) {
	const [recipes, setValue] = useState([
		{
			id: 1,
			title: "Spaghetti",
			instructions:
				"Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
			ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
			img: "img (1).jpg"
		},
		{
			id: 2,
			title: "Milkshake",
			instructions: "Combine ice cream and milk.  Blend until creamy",
			ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
			img: "img (2).jpg"
		},
		{
			id: 3,
			title: "Avocado Toast",
			instructions:
				"Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
			ingredients: [
				"2 slices of bread",
				"1 avocado",
				"1 tablespoon olive oil",
				"1 pinch of salt",
				"pepper"
			],
			img: "img (3).jpg"
		}
	]);

	return (
		<div className="App">
			<Navbar />
			<RecipeInput recipess={recipes} setValue={setValue} />
			<RecipeList recipess={recipes} />
		</div>
	);
}

export default RecipeApp;
