import React, { useEffect, useState } from 'react';
import SmallRecipe from '../Components/SmallRecipe';
import '../Styles/RecipesPage.css';
import API from '../Services/API';

const RecipesPage = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    API.get('/recipes')
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setRecipe(data.data);
      });
  }, []);

  return (
    <>
      {recipe.map((r) => {
        return (
          <div key={r.id} className='recipes-page-container'>
            <SmallRecipe r={r} />
          </div>
        );
      })}
    </>
  );
};

export default RecipesPage;
