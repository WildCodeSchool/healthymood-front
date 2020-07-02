import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import SmallRecipe from './SmallRecipe';
import API from '../Services/Api';
import { useHistory } from 'react-router-dom';

export default function Search (props) {
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

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
    } else if (props.location.search && !currentInput) {
      // cas du rechargement de la page ou url rentrée direct
      const search = decodeURIComponent(props.location.search.split('=')[1]);
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

  const handleValidate = () => {
    if (currentInput) {
      history.push({
        pathname: `/rechercher/?search=${currentInput}`
      });
      setCurrentSearch(currentInput);
      GetRecipes();
    } else {
      history.push({
        pathname: '/rechercher'
      });
      setRecipes([]);
    }
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

  useEffect(() => {
    GetRecipes();
    // eslint-disable-next-line
  }, []);

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
            <button
              className='btn-search'
              onClick={() => {
                handleValidate();
              }}
            >
              <img src={Loupe} alt='search' />
              Rechercher
            </button>
          </div>
          <div className='result'>
            <div className='filter-recipes-container'>
              {recipes.length === 0 ? (
                currentSearch && (
                  <h4 className='no-result'>
                    Aucun résultat pour {currentSearch}
                  </h4>
                )
              ) : (
                <>
                  <h4 className='results-title'>
                    Résultats pour {currentSearch}
                  </h4>
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
