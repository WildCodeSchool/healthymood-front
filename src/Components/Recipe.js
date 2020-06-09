import React from 'react';
import recetteImage from '../Images/sauce-tartare-healthy.jpg';
import '../Styles/Recipe.css';
import publishedImage from '../Images/published.png';
import authorImage from '../Images/author.png';
import mealTypeImage from '../Images/meal-type.png';
import durationImage from '../Images/duration.png';
import priceImage from '../Images/price.png';
import categoryImage from '../Images/category.png';
import caloriesImage from '../Images/calories-2.png';
import recipesInfo from '../recipesInfo.json';

function Recette () {
  return (
    <div className='recipe-container'>
      <header>
        <h1 className='recipe-title'>{recipesInfo.recipe.title}</h1>
        <div className='reciper-banner-image' style={{ backgroundImage: `url(${recetteImage})` }} />
        <div className='publication-info'>
          <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{recipesInfo.recipe.author}</p>
          <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} /><p>{recipesInfo.recipe.updated_at}</p>
          <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{recipesInfo.recipe.category}</p>
        </div>
      </header>
      <p className='recipe-intro'>{recipesInfo.recipe.intro}</p>
      <div className='recipe-info'>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${mealTypeImage})` }} /><p>{recipesInfo.recipe.meal_type}</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${caloriesImage})` }} /><p>Environ {recipesInfo.recipe.calories_nb} calories</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${durationImage})` }} /><p>{recipesInfo.recipe.preparation_time}</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${priceImage})` }} /><p>{recipesInfo.recipe.price}</p>
        </div>
      </div>
      <div className='instructions-container'>
        <h2>Ingrédients</h2>
        <ul>
          {recipesInfo.recipe.ingredients.map(ingredient => {
            return (
              <li key={ingredient.id}><span className={ingredient.is_allergen && 'is-allergen'}>{ingredient.name}</span></li>
            );
          })}
        </ul>

        <h2>Instructions</h2>
        <ol>
          {recipesInfo.recipe.instructions.map(instruction => {
            return (
              <li key={instruction}><p>{instruction}</p></li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Recette;
