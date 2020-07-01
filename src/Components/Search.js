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

  const GetRecipes = () => {
    console.log(props.location);
    if (
      (!props.location.search && currentInput) ||
      (props.location.search !== currentInput && currentInput)
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
      console.log('adresse remplie');
      console.log(props.location.search.split('=')[1].split('%20').join(' '));
      const search = decodeURIComponent(props.location.search.split('=')[1]);
      setCurrentInput(search);
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
  }, []);

  return (
    <div className='recherche-container'>
      <div className='Loupe'>
        <h5>Recherche simple</h5>
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
                placeholder='Rechercher'
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
                !currentInput ? (
                  <p>Entrez votre recherche.</p>
                ) : (
                  <p>Aucun résultat pour {currentInput}</p>
                )
              ) : (
                recipes.map((recipe) => {
                  return (
                    <div className='filtered-recipes' key={recipe.id}>
                      <SmallRecipe r={recipe} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
