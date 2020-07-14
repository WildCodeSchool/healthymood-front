import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FavoriteUser.css';
import emptyFav from '../Images/fav.png';
import fullFav from '../Images/fav-full.png';
import FavoriteContext from '../Context/favoriteContext';
import API from '../Services/API';

const FavoriteUser = () => {
  const { favorite, handleSubmitFavorite } = useContext(FavoriteContext);

  const handleSubmit = (event, recipe_id) => { // eslint-disable-line
    event.preventDefault();
    handleSubmitFavorite(recipe_id);
  };

  const [recipe, setRecipe] = useState();
  useEffect(() => { // eslint-disable-line
    API.get('/recipes/get-favorite')
      .then((res) => res.data)
      .then((data) => {
        setRecipe(data.data);
      }).catch((err) => {
        console.error(err);
        window.alert('Erreur lors de l\'affichage des favoris');
      });
  }, []); //eslint-disable-line 

  return (

    <div className='favorite-page'>
      {recipe &&
        recipe.map(r => {
          return (
            <div key={r.id} className='small-recipe-global-container-user-page'>
        <span
          className='small-recipe-favorite-icon'
          onClick={(event) => handleSubmit(event, r.id)}
          style={favorite

            ? favorite.map(fav => fav.recipe_id).filter(favId => favId === r.id)

              ? {
                backgroundImage: `url(${fullFav})`
              }
              : { backgroundImage: `url(${emptyFav})` }
            : { backgroundImage: `url(${emptyFav})` }}
        />
        <Link to={`/recettes/${r.slug}`} key={r.id} className='link-recette'>
          <div className='small-recipe-container'>
            <>
              <div
                className='small-reciper-banner-image'
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${r.image}`
                }}
              />
              <div className='small-recipe-content-container'>
                <h1 className='small-recipe-title'>{r.name}</h1>
                <p className='small-recipe-intro'>{r.content}</p>
                <button className='read-more'>
                  <p>Lire la suite</p>
                </button>
              </div>
            </>
          </div>
        </Link>
      </div>
          );
        }
        )}
      <p>YO</p>
    </div>
  );
};

export default FavoriteUser;
