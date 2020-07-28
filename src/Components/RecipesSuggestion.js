import React, { useState, useEffect } from 'react';
import '../Styles/RecipesSuggestion.css';
import API from '../Services/API';
import SmallRecipe from './SmallRecipe';

export default function RecipesSuggestion () {
  const [lastRecipes, setLastRecipes] = useState([]);

  useEffect(() => {
    API.get('/recipes/lastRecipes').then(
      (res) => {
        const recipes = res.data.data;
        setLastRecipes(recipes);
      }
    );
  }, []);

  return (
    <div className='suggestion-container'>
      <h4>Vous pourriez aimer :</h4>
      <div className='suggested-recipes'>
        {lastRecipes.length > 0 ? (
          lastRecipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <SmallRecipe r={recipe} />
              </div>
            );
          })
        ) : (
          <h4>Pas de suggestions</h4>
        )}
      </div>
    </div>
  );
}
