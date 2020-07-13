import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import API from '../Services/API';

const FavoriteUser = () => {
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
            <div key={r.id}>
              <p>{r.id}</p>
              <p>{r.name}</p>
              <p>{r.slug}</p>
              <p>{r.content}</p>
            </div>
          );
        }
        )}
      <p>YO</p>
    </div>
  );
};

export default FavoriteUser;
