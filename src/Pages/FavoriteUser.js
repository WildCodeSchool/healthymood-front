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
                <SmallRecipe key={r.id} r={r} />
              );
            }
            )}
        </div>} //eslint-disable-line
    </>
  );
};

export default FavoriteUser;
