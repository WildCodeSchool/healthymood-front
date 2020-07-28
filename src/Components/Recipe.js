import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

  frenchDateFormat = () => {
    const recipeInfo = this.props.recipeInfo;
    const date = recipeInfo.created_at.substr(0, 10);
    const month = date.substr(5, 2);
    const day = date.substr(8, 10);
    const year = date.substr(0, 4);
    return (`${day}-${month}-${year}`);
  }

  createRecipe () {
    return { __html: this.props.recipeInfo.content };
  }

  countTotalCalories = (ingredientCalorie) => {
    let totalCalories = 0;
    for (let i = 0; i < ingredientCalorie.length; i++) {
      totalCalories = totalCalories + ingredientCalorie[i].calories;
    }
    return totalCalories;
  }

  mealTypesNames = () => {
    if (this.props.recipeInfo.mealType) {
      return this.props.recipeInfo.mealType.map(m => ` ${m.name.charAt(0).toUpperCase() + m.name.slice(1)}`);
    } else {
      return 'Non-renseigné';
    }
  }

  render () {
    const recipeInfo = this.props.recipeInfo;
    const date = recipeInfo.created_at.substr(0, 10);
    const history = this.props.history;
    const connected = this.props.connected;
    const favorite = this.props.favorite;
    const handleSubmit = this.props.handleSubmit;
    return (

      <div className='recipe-container'>
        <header>
          <h1 className='recipe-title'>{this.capitalizeFirstLetter(recipeInfo.name)}</h1>
          {recipeInfo.image &&
            <div className='reciper-banner-image' style={{ backgroundImage: `url('${recipeInfo.image}')` }} />}
          <div className='publication-info'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${authorImage})` }}
            />
            <p> {recipeInfo.author.username ? this.capitalizeFirstLetter(recipeInfo.author.username) : 'Non renseigné'} </p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${publishedImage})` }}
            />
            <p>{this.frenchDateFormat(date)}</p>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${categoryImage})` }}
            />
            <p>{(recipeInfo.category && recipeInfo.category.name) ? this.capitalizeFirstLetter(recipeInfo.category.name) : 'Catégorie non renseignée'}</p>
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
            <p>{this.mealTypesNames()}</p>
          </div>
          <div className='picto-info-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${caloriesImage})` }} />
            <p>{recipeInfo.calories ? `Environ ${recipeInfo.calories} calories` : 'Calories non renseignées'}</p>
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${durationImage})` }}
            />
            {recipeInfo.preparation_duration_seconds ? <p>{(recipeInfo.preparation_duration_seconds) / 60} min</p> : <p>Durée non renseignée</p>}
          </div>
          <div className='picto-info-container'>
            <span
              className='picto-container'
              style={{ backgroundImage: `url(${priceImage})` }}
            />
            {recipeInfo.budget ? <p>{recipeInfo.budget} €</p> : <p>Non renseigné</p>}
          </div>
          <div>
            <span
              className='picto-container'
              onClick={connected ? (event) => handleSubmit(event, recipeInfo.id) : () => history.push('/login')}
              style={connected && favorite

                ? favorite.map(fav => fav.recipe_id).find(favId => favId === recipeInfo.id)

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
                    {ingredient.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <h2>Instructions</h2>
          <div dangerouslySetInnerHTML={this.createRecipe()} />
        </div>
      </div>
    );
  }
}

function Recipe () {
  const { connected } = useContext(AuthContext);
  const { favorite, handleSubmitFavorite } = useContext(FavoriteContext);
  const history = useHistory();
  let componentRef = useRef();
  const [recipe, setRecipe] = useState();
  const { slug } = useParams();
  useEffect(() => {
    API.get(`/recipes/${slug}`).then((res) => {
      setRecipe(res.data.data);
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
      <RecipeToPrint recipeInfo={recipe} history={history} favorite={favorite} handleSubmit={handleSubmit} connected={connected} ref={el => (componentRef = el)} />
      <h5 className='social-title'>Merci de partager : </h5>
      <div className='social-print-container'>
        <SocialMedia slug={slug} />
        <ReactToPrint
          trigger={() => (
            <button
              className='print-button'
              style={{ backgroundImage: `url(${PrintImage})` }}
            />)}
          content={() => componentRef}
        />
      </div>
    </div>
  );
}

export default Recipe;
