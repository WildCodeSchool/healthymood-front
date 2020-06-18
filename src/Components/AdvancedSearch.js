import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdvancedSearch (props) {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [currentSearchIngredient, setCurrentSearchIngredient] = useState('');
  const [currentSearchMealName, setCurrentSearchMealName] = useState('');
  const [currentSearchRecipeCategories, setCurrentSearchRecipeCategories] = useState([]);
 /*  const [diet, setDiet] = useState([]); */

  useEffect(() => {
    axios.get(`http://localhost:5000/recipe-categories`)
      .then(res => {
        const recipeCategories = res.data.data;
        console.log(recipeCategories)
        setRecipeCategories(recipeCategories);
    })
  }, [])

  /*const handleChangeMealName = event => {
    setCurrentSearchMealName(event.target.value);
  }; */

  // const handleAddfilter = () => {
  //   const currentFilter = this.state.filter;
  //   const newFilter = currentFilter.concat(this.state.currentSearch);
  //   if (this.state.currentSearch) {
  //     this.setState({ filter: newFilter, currentSearch: '' });
  //   }
  // };

  // const handleDelete = (str) => {
  //   const newFilter = this.state.filter.filter((e) => str !== e);
  //   this.setState({ filter: newFilter });
  // };
  
    // const { currentSearchIngredient, currentSearchMealName, mealType, diet } = this.state;
  return (
    <div className='advanced-search'>
      <h5>Recherche avancée</h5>
      <div className='search-field'>
        <div className='search-block'>
          <div className='my-search'>
            <label className='label' htmlFor='search'>
              <p>Ingrédients </p>
            </label>
            <input
              id='search'
              name='search'
              type='text'
              value={currentSearchIngredient}
              onChange={event => {
                setCurrentSearchIngredient(event.target.value);
              }}
            />
          </div>
          <div className='my-search'>
            <label className='label' htmlFor='search'>
              <p>Nom du plat </p>
            </label>
            <input
              id='search'
              name='search'
              type='text'
              value={currentSearchMealName}
              onChange={event => {
                setCurrentSearchMealName(event.target.value);
              }}
            />
          </div>

          <div className='meal-type-container'>
            <div className='left-column'>
              <p>Type de plat:</p>
            </div>
            <div className='right-column'>
              {recipeCategories.map(recipeCategory => {
                return (
                  <div className='ingredient-checkbox-container' key={recipeCategory.name}>
                    <input
                      type='checkbox'
                      name={recipeCategory.name}
                      id={recipeCategory.name}
                      onClick={event => {
                        const currentIndex = currentSearchRecipeCategories.indexOf(recipeCategory.name);
                        (currentIndex === -1) ?
                        setCurrentSearchRecipeCategories([...currentSearchRecipeCategories, recipeCategory.name]) :
                        setCurrentSearchRecipeCategories(currentSearchRecipeCategories.filter((_, i) => i !== currentIndex)
                        )}}
                    />
                    <label htmlFor={recipeCategory.name}>{recipeCategory.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
