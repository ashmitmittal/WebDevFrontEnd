import React from 'react';
import Recipe from './Recipe';
// import PropTypes from 'prop-types';
import './RecipeList.css';

function RecipeList(props) {
    
    
    const recipes = props.recipess.map((r,index) => (
        <Recipe key={index} {...r} />
    ));
    return(
        <div className="recipe-list">
            {recipes}
        </div>
    );
}

export default RecipeList;