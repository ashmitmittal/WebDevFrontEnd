import React, { useState } from "react";
import "./RecipeInput.css";

function RecipeInput(props) {
	return (
		<div className="recipe-form-container">
			<form className="recipe-form" onSubmit={handelSubmit}>
				<button type="button" className="close-button">
					X
				</button>
				<div className="recipe-form-line">
					<label htmlFor="recipe-title-input">Title</label>
					<input
						id="recipe-title-input"
						key="title"
						name="title"
						type="text"
						value={title}
						size={42}
						autoComplete="off"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="buttons"
					style={{ alignSelf: "flex-end", marginRight: 0 }}
				>
					SAVE
				</button>
			</form>
		</div>
	);
}

export default RecipeInput;
