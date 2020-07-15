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
        console.log('Vous n\'avez pas encore de favoris');
      });
  }, []); //eslint-disable-line 
  console.log(favorite);
  return (
    <>
      <h3 className='small-recipe-title-user-page'>Votre liste de favoris :</h3>
      {favorite.length === 0
        ? <h6>Vous n'avez pas encore de favoris</h6>
        : <div className='small-recipe-user-page'>
          {recipe &&
            recipe.map(r => {
              return (
                <div key={r.id} className='small-recipe-global-container-user-page'>

                  <Link to={`/recettes/${r.slug}`} key={r.id} className='link-recette-user-page'>
                    <div className='small-recipe-container-user-page'>
                      <>
                        <span
                          className='small-recipe-favorite-icon-user-page'
                          onClick={(event) => handleSubmit(event, r.id)}
                          style={favorite

                            ? favorite.map(fav => fav.recipe_id).find(favId => favId === r.id)

                              ? {
                                backgroundImage: `url(${fullFav})`
                              }
                              : { backgroundImage: `url(${emptyFav})` }
                            : { backgroundImage: `url(${emptyFav})` }}
                        />
                        <div
                          className='small-reciper-banner-image-user-page'
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${r.image}`
                          }}
                        />
                        <div className='small-recipe-content-container-user-page'>
                          <h1 className='small-recipe-title-user-page'>{r.name}</h1>
                          <p className='small-recipe-intro-user-page'>{r.content}</p>
                          <button className='read-more-user-page'>
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
          </div>}
    </>
  );
};

export default FavoriteUser;
