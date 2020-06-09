import React from 'react';
import recetteImage from '../Images/sauce-tartare-healthy.jpg';
import recipesInfo from '../recipesInfo.json';
// import { Link } from 'react-router-dom';
import '../Styles/SmallRecipe.css';

function SmallRecipe () {
  return (
    // <Link to=...>
    <div className='small-recipe-container'>
      <div className='small-reciper-banner-image' style={{ backgroundImage: `url(${recetteImage})` }} />
      <h1 className='small-recipe-title'>{recipesInfo.recipe.title}</h1>
      <span className='small-recipe-favorite-icon' /*onClick={() => addToFav}*/>&#10084;</span>
    </div>
    // </Link>
  );
}

export default SmallRecipe;
