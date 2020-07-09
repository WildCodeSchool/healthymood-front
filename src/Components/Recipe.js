import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import recetteImage from '../Images/sauce-tartare-healthy.jpg';
import '../Styles/Recipe.css';
import publishedImage from '../Images/published.png';
import authorImage from '../Images/author.png';
import mealTypeImage from '../Images/meal-type.png';
import durationImage from '../Images/duration.png';
import priceImage from '../Images/price.png';
import categoryImage from '../Images/category.png';
import caloriesImage from '../Images/calories-2.png';
import SocialMedia from './SocialMediaRecipe';
import ReactToPrint from 'react-to-print';
import PrintImage from '../Images/print.png';
import Rating from './Rating';
import API from '../Services/API';

class RecipeToPrint extends React.Component {
  render () {
    const recipeInfo = this.props.recipeInfo;

    console.log(recipeInfo.category.name);
    return (
      <div className='recipe-container'>
        <header>
          <h1 className='recipe-title'>{recipeInfo.name}</h1>
          <div
            className='reciper-banner-image'
            style={{ backgroundImage: `url(${recetteImage})` }}
          />
          <div className='publication-info'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${authorImage})` }}
            />
            <p> {recipeInfo.author.username} </p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${publishedImage})` }}
            />
            <p>{recipeInfo.created_at.substr(0, 10)}</p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${categoryImage})` }}
            />
            <p>{recipeInfo.category.name}</p>
          </div>
          <Rating recipeInfo={recipeInfo} />
        </header>
        <p className='recipe-intro' />
        <div className='recipe-info'>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${mealTypeImage})` }}
            />
            <p>{recipeInfo.mealType.name}</p>
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${caloriesImage})` }}
            />
            <p>Environ {recipeInfo.calories} calories</p>
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${durationImage})` }}
            />
            <p>{recipeInfo.preparation_duration_seconds} S</p>
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${priceImage})` }}
            />
            <p>{recipeInfo.budget} €</p>
          </div>
        </div>
        <div className='instructions-container'>
          <h2>Ingrédients</h2>
          <ul>
            {recipeInfo.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <span className={ingredient.is_allergen && 'is-allergen'}>
                    {ingredient.name}
                  </span>
                </li>
              );
            })}
          </ul>

          <h2>Instructions</h2>
          <div>{recipeInfo.content}</div>
        </div>
      </div>
    );
  }
}

function Recipe () {
  const componentRef = useRef();
  const [recipe, setRecipe] = useState();
  const { slug } = useParams();
  useEffect(() => {
    API.get(`/recipes/${slug}`).then((res) => {
      setRecipe(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  if (!recipe) {
    return <p>chargement ....</p>;
  }

  return (
    <div className='print-recipe-container'>
      <RecipeToPrint recipeInfo={recipe} ref={componentRef} />
      <h5 className='social-title'>Merci de partager : </h5>
      <div className='social-print-container'>
        <SocialMedia slug={slug} />
        <ReactToPrint
          trigger={() => (
            <button
              className='print-button'
              style={{ backgroundImage: `url(${PrintImage})` }}
            />
          )}
          content={() => componentRef}
        />
      </div>
    </div>
  );
}

export default Recipe;
