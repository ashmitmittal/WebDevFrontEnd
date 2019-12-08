import React from 'react';
// import logo from './logo.svg';
// import Recipe from './Recipe';
import './RecipeApp.css';
import Navbar from './navbar';
import RecipeList from './RecipeList';

function RecipeApp() {
  const defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "img (1).jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "img (2).jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "img (3).jpg"
      }
    ]
}
  return (
    <div className="App">
      <Navbar />
      <RecipeList recipess={defaultProps.recipes}/>
    </div>
  );
}

export default RecipeApp;
