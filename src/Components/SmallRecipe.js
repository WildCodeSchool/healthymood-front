import React from 'react';
import recetteImage from '../Images/sauce-tartare-healthy.jpg';
import recipesInfo from '../recipesInfo.json';
import '../Styles/SmallRecipe.css';

function SmallRecipe () {
  return (
    <div className='small-recipe-container'>
      <div className='small-reciper-banner-image' style={{ backgroundImage: `url(${recetteImage})` }} />
      <h1 className='small-recipe-title'>{recipesInfo.recipe.title}</h1>
    </div>
  )
}

export default SmallRecipe;
