import React, { useState, useEffect } from 'react';
import API from '../Services/API';
import { Link } from 'react-router-dom';
import '../Styles/CategoriesList.css';

function CategoriesList () {
  const [recipeCategories, setRecipeCategories] = useState([]);

  useEffect(() => {
    API.get('/recipe_categories')
      .then(data => data.data)
      .then(results => {
        setRecipeCategories(results.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='categories-list-section'>
      <h2>Par catégories</h2>
      <div className='categories-list-container'>
        {recipeCategories.length > 0 && recipeCategories.map(category => {
          return (
            <Link to={`/recettes/categorie/${category.id}`} key={category.id}>
              <div className='recipe-category' style={{ backgroundImage: `url(${category.image})` }}>
                <div className='category-title-container'>
                  <h3>{category.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesList;
