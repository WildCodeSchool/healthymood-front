import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import SmallRecipe from './SmallRecipe';
import API from '../Services/API';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { TagSelect } from './TagSelect';

export default function Search (props) {
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');
  const [showAdvancedSearch, setshowAdvancedSearch] = useState(true);
  const [allMealTypes, setAllMealTypes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [chosenMealTypes, setChosenMealTypes] = useState([]);

  const getResourceCollection = async (url) => {
    let data = [];
    try {
      const result = await API.get(url);
      data = await result.data.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  };

  const getRecipes = async () => {
    getResourceCollection(`recipes/${props.location.search}`).then(recipes => setRecipes(recipes));
  };

  const tagToOption = tag => ({ value: tag.id, label: tag.name });

  const getAllMealTypes = () => {
    return getResourceCollection('meal_types').then(tags => {
      const options = tags.map(tagToOption);
      setAllMealTypes(options);
      return options;
    });
  };

  const getAllIngredients = () => {
    return getResourceCollection('ingredients').then(tags => {
      const options = tags.map(tagToOption);
      setAllIngredients(options);
      return options;
    });
  };

  const syncInputValuesWithUrl = () => {
    const query = queryString.stringify(
      {
        search: searchInputText === '' ? undefined : searchInputText, // for some unknown reason, skipEmptyString option does not work
        ingredients: chosenIngredients.map(i => i.value),
        meal_types: chosenMealTypes.map(i => i.value)
      },
      { arrayFormat: 'bracket' }
    );
    history.push(`/rechercher/?${query}`);
  };

  const handleSearchInputTextChanged = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      syncInputValuesWithUrl();
    }
  };

  const handleshowAdvancedSearchSearchClick = () => {
    setshowAdvancedSearch(!showAdvancedSearch);
  };

  const populateInputs = (allMealTypes, allIngredients) => {
    const query = queryString.parse(props.location.search, { arrayFormat: 'bracket' });
    const { search, meal_types, ingredients } = query; // eslint-disable-line
    if (search) {
      setSearchInputText(search);
    }
    if (meal_types) { // eslint-disable-line
      setChosenMealTypes(allMealTypes.filter(mealType => meal_types.includes(mealType.value.toString())));
    }
    if (ingredients) {
      setChosenIngredients(allIngredients.filter(ingredient => ingredients.includes(ingredient.value.toString())));
    }
  };

  useEffect(() => {
    Promise.all([getAllMealTypes(), getAllIngredients()])
      .then(([allMealTypes, allIngredients]) => {
        populateInputs(allMealTypes, allIngredients);
      });
  }, []) // eslint-disable-line

  useEffect(() => {
    getRecipes();
  }, [props.location.search]) // eslint-disable-line

  return (
    <div className='recherche-container' style={{ marginBottom: 200 }}>
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
                value={searchInputText}
                onChange={handleSearchInputTextChanged}
                onKeyDown={handleSearchInputKeyDown}
              />
            </div>
            <div className='showAdvancedSearch-search-container'>
              <p onClick={handleshowAdvancedSearchSearchClick}>Voir la recherche avancée</p>
              {showAdvancedSearch &&
                <>
                  {allMealTypes.length !== 0 &&
                    <TagSelect
                      className='tag-select'
                      options={allMealTypes}
                      value={chosenMealTypes}
                      onChange={(newValues) => {
                        setChosenMealTypes(newValues);
                      }}
                      placeholder='Types de repas'
                    />}
                  {allIngredients.length !== 0 &&
                    <TagSelect
                      options={allIngredients}
                      value={chosenIngredients}
                      onChange={(newValues) => {
                        setChosenIngredients(newValues);
                      }}
                      placeholder='Ingrédients'
                      className='tag-select'
                    />}
                </>}
            </div>
          </div>
          <button className='btn-search' onClick={syncInputValuesWithUrl} style={{ marginTop: 50 }}>
            <img src={Loupe} alt='search' />
            Rechercher
          </button>
          <div className='result'>
            <div className='filter-recipes-container'>
              {recipes.length === 0 ? (
                props.location.search && <h4 className='no-result'>Aucun résultat</h4>
              ) : (
                <>
                  <h4 className='results-title'>Résultats : </h4>
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
