import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallRecipe from '../Components/SmallRecipe';
import '../Styles/RecipesPage.css';
import API from '../Services/API';

function RecipesPage (props) {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const categoryId = props.match.params.id;
    if (categoryId) {
      API.get(`/recipe_categories/${categoryId}/recipes`)
        .then(data => data.data)
        .then(results => {
          setAllRecipes(results.data);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      API.get('/recipes')
        .then(data => data.data)
        .then(results => {
          setAllRecipes(results.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [props.match.params]);

  return (
    <>
      <Link to='/rechercher' className='btn-link'>
        <div className='btn-search'>Rechercher une recette</div>
      </Link>
      <div className='recipes-page-container'>
        {allRecipes.length > 0 && allRecipes.map((r) => {
          return (
            <SmallRecipe key={r.id} r={r} />
          );
        })}
      </div>
    </>
  );
}

export default RecipesPage;
