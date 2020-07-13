import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
import emptyFav from '../Images/fav.png';
import fullFav from '../Images/fav-full.png';
import AuthContext from '../Context/authContext';
import FavoriteContext from '../Context/favoriteContext';

class RecipeToPrint extends React.Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  countTotalCalories = (ingredientCalorie) => {
    let totalCalories = 0;
    for (let i = 0; i < ingredientCalorie.length; i++) {
      totalCalories = totalCalories + ingredientCalorie[i].calories;
    }
    return totalCalories;
  }

  render () {
    const recipeInfo = this.props.recipeInfo;
    const history = this.props.history;
    const connected = this.props.connected;
    const favorite = this.props.favorite;
    const handleSubmit = this.props.handleSubmit;
    /*  const isFavorite = favorite.map(fav => fav.recipe_id).filter(favId => favId === recipeInfo.id); */

    return (

      <div className='recipe-container'>
        <header>
          <h1 className='recipe-title'>{this.capitalizeFirstLetter(recipeInfo.name)}</h1>
          <div
            className='reciper-banner-image'
            style={{ backgroundImage: `url(${recetteImage})` }}
          />
          <div className='publication-info'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${authorImage})` }}
            />
            <p> {this.capitalizeFirstLetter(recipeInfo.author.username)} </p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${publishedImage})` }}
            />
            <p>{recipeInfo.created_at.substr(0, 10)}</p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${categoryImage})` }}
            />
            <p>{this.capitalizeFirstLetter(recipeInfo.category.name)}</p>

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
            <p>{this.capitalizeFirstLetter(recipeInfo.mealType.name)}</p>
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${caloriesImage})` }}
            />            <p>Environ {this.countTotalCalories(recipeInfo.ingredients)} calories</p>
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
          <div>
            <span
              className='picto-container'
              onClick={connected ? (event) => handleSubmit(event, recipeInfo.id) : () => history.push('/login')}
              style={connected && favorite

                ? favorite.map(fav => fav.recipe_id).filter(favId => favId === recipeInfo.id)

                  ? {
                    backgroundImage: `url(${fullFav})`
                  }
                  : { backgroundImage: `url(${emptyFav})` }
                : { backgroundImage: `url(${emptyFav})` }}
            />
          </div>
        </div>
        <div className='instructions-container'>
          <h2>Ingrédients</h2>
          <ul>
            {recipeInfo.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <span className={ingredient.is_allergen && 'is-allergen'}>
                    {ingredient.name} ({ingredient.calories} Kcal)
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
  const { connected } = useContext(AuthContext);
  const { favorite, handleSubmitFavorite } = useContext(FavoriteContext);
  const history = useHistory();
  const componentRef = useRef();
  const [recipe, setRecipe] = useState();
  const { slug } = useParams();
  useEffect(() => {
    API.get(`/recipes/${slug}`).then((res) => {
      setRecipe(res.data.data);
      console.log(res.data.data);
    });
  }, []); //eslint-disable-line 

  if (!recipe) {
    return <p>chargement ....</p>;
  }

  const handleSubmit = (event, recipe_id) => { // eslint-disable-line
    event.preventDefault();
    handleSubmitFavorite(recipe_id);
  };

  return (
    <div className='print-recipe-container'>
      <RecipeToPrint recipeInfo={recipe} history={history} favorite={favorite} handleSubmit={handleSubmit} connected={connected} ref={componentRef} />
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
