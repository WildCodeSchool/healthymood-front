import React, { useState, useEffect } from 'react';
import SmallRecipe from '../Components/SmallRecipe';
import '../Styles/RecipesPage.css';
import API from '../Services/API';

function RecipesPage () {
  const [allRecipes, setAllRecipes] = useState([])

  useEffect(() => {
      API.get('/recipes')
      .then(data => data.data)
      .then(results => {
        setAllRecipes(results.data);
      })
      .catch (err => {
        console.log(err);
      })
  }, []);

  return (
    <div className='recipes-page-container'>
      {allRecipes.length > 0 && allRecipes.map((r) => {
        return (
            <SmallRecipe key={r.id} r={r} />
        );
      })}
    </div>
  );
}

export default RecipesPage;
