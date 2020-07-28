import React, { useEffect, useState, useContext } from 'react';
import '../Styles/SmallRecipe.css';
import FavoriteContext from '../Context/favoriteContext';
import API from '../Services/API';
import SmallRecipe from '../Components/SmallRecipe';

const FavoriteUser = () => {
  const { favorite, handleSubmitFavorite } = useContext(FavoriteContext);

  const handleSubmit = (event, recipe_id) => { // eslint-disable-line
    event.preventDefault();
    handleSubmitFavorite(recipe_id);
  };

  const [recipe, setRecipe] = useState();
  useEffect(() => {
    // eslint-disable-line
    API.get('/recipes/get-favorite')
      .then((res) => res.data)
      .then((data) => {
        setRecipe(data.data);
      })
      .catch((err) => {
        console.error(err);
        console.error("Vous n'avez pas encore de favoris");
      });
  }, []); //eslint-disable-line
  return (
    <>
      <h3 className='small-recipe-title-user-page'>Votre liste de favoris :</h3>
      {favorite.length === 0 ? (
        <h4 className='no-result'>Vous n'avez pas encore de favoris</h4>
      ) : (
        <div className='small-recipe-user-page'>
          {recipe &&
            recipe.map((r) => {
              return <SmallRecipe key={r.id} r={r} />;
            })}
        </div>
      )}
    </>
  );
};

export default FavoriteUser;
