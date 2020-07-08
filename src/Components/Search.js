import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import SmallRecipe from './SmallRecipe';
import API from '../Services/API';
import { useHistory } from 'react-router-dom';
import MealTypesSelect from './MealTypesSelect';
import IngredientsSelect from './IngredientsSelect';
import queryString from 'query-string';

export const optionsMealTypes = [];
export const optionsIngredients = [];

export default function Search (props) {
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentSearch] = useState('');
  const [advanced, setAdvanced] = useState(false);
  const [mealTypes, setMealTypes] = useState([]);
  const [mealTypesFilters, setMealTypesFilters] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsFilters, setIngredientsFilters] = useState([]);

  const getRecipes = () => {
    const query = queryString.parse(props.location.search);
    const { search } = query;
    console.log(query);
    console.log(props.location.search);
    console.log(search);

    const url = `recipes/${props.location.search}`;
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        return data.data;
      })
      .then((data) => setRecipes(data));
  };

  const getMealTypes = () => {
    const url = 'meal_types';
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        return data.data;
      })
      .then((data) => setMealTypes(data));
  };

  const getIngredients = () => {
    const url = 'ingredients';
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        return data.data;
      })
      .then((data) => setIngredients(data));
  };

  const pushUrl = () => {
    const toPush = [];
    const searchToPush = queryString.stringify(
      { search: currentInput },
      { skipEmptyString: true }
    );
    searchToPush && toPush.push(searchToPush);

    const mealTypesToPush = queryString.stringify(
      { meal_types: mealTypesFilters },
      { arrayFormat: 'comma' },
      { skipNull: true }
    );
    mealTypesToPush && toPush.push(mealTypesToPush);

    const ingredientsToPush = queryString.stringify(
      { ingredients: ingredientsFilters },
      { arrayFormat: 'comma' },
      { skipNull: true }
    );
    ingredientsToPush && toPush.push(ingredientsToPush)

    if (toPush.length === 0) { history.push('/rechercher/'); } else if (toPush.length === 1) { history.push(`/rechercher/?${toPush[0]}`); } else {
      let toPushMiddle = '';
      for (let i = 1; i < toPush.length - 1; i++) {
        toPushMiddle += `${toPush[i]}&`;
      }
      history.push(`/rechercher/?${toPush[0]}&${toPushMiddle}${toPush[toPush.length - 1]}`);
    }
  };

  const handleValidate = () => {
    pushUrl();
    getRecipes();
  };

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleValidate();
    }
  };

  const handleAdvanced = (event) => {
    if (!advanced) {
      setAdvanced(true);
      mealTypes.map(mealType => {
        return (
          optionsMealTypes.push({ value: `${mealType.name}`, label: `${mealType.name}`, id: mealType.id })
        );
      });
      ingredients.map(ingredient => {
        return (
          optionsIngredients.push({ value: `${ingredient.name}`, label: `${ingredient.name}`, id: ingredient.id})
        )
      });
      console.log(optionsMealTypes);
    } else {
      setAdvanced(false);
    }
  };

  const handleMealTypesFilters = (e) => {
    const mealTypesFilters = e.map(mealtype => mealtype.id);
    setMealTypesFilters(mealTypesFilters);
  };

  const handleIngredientsFilters = (e) => {
    const ingredientsFilters = e.map(ingredient => ingredient.id);
    setIngredientsFilters(ingredientsFilters)
  }

  useEffect(() => {
    getRecipes();
    getMealTypes();
    getIngredients();
  }, []); // eslint-disable-line

  return (
    <div className='recherche-container'>
      <div className='Loupe'>
        <h2>Rechercher une recette</h2>
        <div className='search-field'>
          <div className='search-block'>
            <div className='my-search'>
              <label className='label'>
                <p>J'ai envie de : </p>
              </label>
              <input
                id='search'
                name='search'
                type='text'
                placeholder='Salade de fruit...'
                value={currentInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='advanced-search-container'>
              <p onClick={handleAdvanced}>Voir la recherche avancée</p>
              {advanced &&
                <>
                  <p>Sélectionnez des catégories de repas :</p>
                  <MealTypesSelect handleMealTypesFilters={handleMealTypesFilters} />
                  <p>Sélectionnez des ingrédients :</p>
                  <IngredientsSelect handleIngredientsFilters={handleIngredientsFilters} />
                </>}
            </div>
          </div>
          <button
            className='btn-search'
            onClick={() => {
              handleValidate();
            }}
          >
            <img src={Loupe} alt='search' />
              Rechercher
          </button>
          <div className='result'>
            <div className='filter-recipes-container'>
              {recipes.length === 0 ? (
                currentSearch && <h4 className='no-result'>Aucun résultat pour {currentSearch}</h4>
              ) : (
                <>
                  <h4 className='results-title'>Résultats pour {currentSearch}</h4>
                  {recipes.map((recipe) => {
                    return (
                      <div className='filtered-recipes' key={recipe.id}>
                        <SmallRecipe r={recipe} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
