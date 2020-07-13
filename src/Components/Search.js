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
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(true);
  const [allMealTypes, setAllMealTypes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [allDiets, setAllDiets] = useState([]);
  const [chosenDiets, setChosenDiets] = useState([]);
  const [chosenIngredients, setChosenIngredients] = useState([]);
  const [chosenMealTypes, setChosenMealTypes] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);

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

  const getAllDiets = () => {
    return getResourceCollection('diet').then(tags => {
      const options = tags.map(tagToOption);
      setAllDiets(options);
      return options;
    });
  };

  const syncInputValuesWithUrl = () => {
    const query = queryString.stringify(
      {
        search: searchInputText === '' ? undefined : searchInputText, // for some unknown reason, skipEmptyString option does not work
        ingredients: chosenIngredients && chosenIngredients.map(i => i.value),
        meal_types: chosenMealTypes && chosenMealTypes.map(i => i.value),
        diets: chosenDiets && chosenDiets.map(d => d.value),
        excluded: excludedIngredients && excludedIngredients.map(ei => ei.value)
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

  const handleShowAdvancedSearchSearchClick = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  const populateInputs = (allMealTypes, allIngredients, allDiets) => {
    const query = queryString.parse(props.location.search, { arrayFormat: 'bracket' });
    const { search, meal_types, ingredients, diets, excluded } = query; // eslint-disable-line
    if (search) {
      setSearchInputText(search);
    }
    if (meal_types) { // eslint-disable-line
      setChosenMealTypes(allMealTypes.filter(mealType => meal_types.includes(mealType.value.toString())));
    }
    if (ingredients) {
      setChosenIngredients(allIngredients.filter(ingredient => ingredients.includes(ingredient.value.toString())));
    }
    if (diets) {
      setChosenDiets(allDiets.filter(diet => diets.includes(diet.value.toString())));
    }
    if (excluded) {
      setExcludedIngredients(allIngredients.filter(ingredient => excluded.includes(ingredient.toString())));
    }
  };

  useEffect(() => {
    Promise.all([getAllMealTypes(), getAllIngredients(), getAllDiets()])
      .then(([allMealTypes, allIngredients, allDiets]) => {
        populateInputs(allMealTypes, allIngredients, allDiets);
      });
  }, []) // eslint-disable-line

  useEffect(() => {
    console.log(props.location);
    if (props.location.search) {
      getRecipes();
    } else {
      setSearchInputText('');
      setShowAdvancedSearch(false);
      setAllMealTypes([]);
      setAllIngredients([]);
      setAllDiets([]);
      setChosenIngredients([]);
      setChosenMealTypes([]);
      setChosenDiets([]);
      setRecipes([]);
      setExcludedIngredients([]);
    }
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
              <p onClick={handleShowAdvancedSearchSearchClick}>Recherche avancée</p>
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
                  {allDiets.length !== 0 &&
                    <TagSelect
                      options={allDiets}
                      value={chosenDiets}
                      onChange={(newValues) => {
                        setChosenDiets(newValues);
                      }}
                      placeholder='Régime spéciaux'
                      className='tag-select'
                    />}
                  {allIngredients.length !== 0 &&
                    <TagSelect
                      options={allIngredients}
                      value={excludedIngredients}
                      onChange={(newValues) => {
                        setExcludedIngredients(newValues);
                      }}
                      placeholder='Je ne veux pas'
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
                    console.log(recipes);
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
