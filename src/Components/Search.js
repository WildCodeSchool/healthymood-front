import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import SmallRecipe from './SmallRecipe';
import API from '../Services/API';
import { useHistory } from 'react-router-dom';
import MealTypesSelect from './MealTypesSelect';

export const optionsMealTypes = [];

export default function Search (props) {
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [advanced, setAdvanced] = useState(false);
  const [mealTypes, setMealTypes] = useState([]);
  const [mealTypesFilters, setMealTypesFilters] = useState([]);

  const GetRecipes = () => {
    if (
      (!props.location.search && currentInput) ||
      // cas où rien dans l'url mais mot dans l'input
      (props.location.search !== currentInput && currentInput)
      // cas où recherche dans l'url mais mot différent dans l'input : relance la recherche avec l'input
    ) {
      const url = `recipes/?search=${currentInput}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setRecipes(data));
    } else if (props.location.search && !currentInput && props.location.search.includes('search')) {
      // cas du rechargement de la page ou url rentrée direct mais que la recherche ne contient pas de mot clé
      const search = decodeURIComponent(props.location.search.split('=')[1].split('&')[0]);
      setCurrentInput(search);
      setCurrentSearch(search);
      const url = `recipes/?search=${props.location.search.split('=')[1]}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setRecipes(data));
    }
  };

  const getMealTypes = async () => {
    const url = 'meal_types';
    await API.get(url)
      .then((res) => res.data)
      .then((data) => {
        return data.data;
      })
      .then((data) => setMealTypes(data));
  };

  const pushUrl = (array, toPush) => {
    console.log('rentre dans pushURL');
    console.log(array);
    if (array.length === 1) {
      toPush += array[0].id;
      console.log(toPush);
    } else {
      for (let i = 0; i < array.length - 1; i++) {
        toPush += array[i].id + ',';
      }
      toPush += array[array.length - 1].id;
      console.log(toPush);
    }
    return toPush;
  };

  const handleValidate = () => {
    let pushValue = '';
    if (currentInput) {
      pushValue += `?search=${currentInput}`;
      setCurrentSearch(currentInput);
      GetRecipes();
    } else {
      pushValue += '';
      setRecipes([]);
    }
    if (mealTypesFilters) {
      if (mealTypesFilters.length !== 0 && currentInput) {
        pushValue += '&meal_types=';
        pushValue = pushUrl(mealTypesFilters, pushValue);
      } else if (mealTypesFilters.length !== 0 && !currentInput) {
        pushValue += '?meal_types=';
        pushValue = pushUrl(mealTypesFilters, pushValue);
      }
    }
    history.push({
      pathname: `/rechercher/${pushValue}`
    });
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
      console.log(mealTypes);
      mealTypes.map(mealType => {
        return (
          optionsMealTypes.push({ value: `${mealType.name}`, label: `${mealType.name}`, id: mealType.id })
        );
      });
      console.log(optionsMealTypes);
    } else {
      setAdvanced(false);
    }
  };

  const handleMealTypesFilters = (e) => {
    setMealTypesFilters(e);
  };

  useEffect(() => {
    GetRecipes();
    getMealTypes();
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
