
import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import SmallArticle from './SmallArticle';
import API from '../Services/Api';
import { useHistory } from 'react-router-dom';

export default function SearchArticles(props) {
  const history = useHistory();

  const [articles, setArticles] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const GetArticles = () => {
    console.log(props.history.location.search);
    if ((!props.history.location.search && currentInput) || (props.history.location.search !== currentInput && currentInput)) {
      const url = `articles/?search=${currentInput}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setArticles(data));
    } else if (props.history.location.search && !currentInput) {
      console.log('adresse remplie');
      console.log(props.history.location.search.split('=')[1]);
      setCurrentInput(props.history.location.search.split('=')[1]);
      const url = `articles/?search=${props.history.location.search.split('=')[1]}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setArticles(data));
    }
  };

  const handleValidate = () => {
    history.push({
      pathname: `/articles/?search=${currentInput}`
    });
    GetArticles();
  };

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      event.preventDefault();
      handleValidate();
    }
  };

  useEffect(() => {
    GetArticles();
  }, []);

  return (
    <div className='recherche-container'>
      <div className='Loupe'>
        <h5>Rechercher un article</h5>
        <div className='search-field'>
          <div className='search-block'>
            <div className='my-search'>
              <label className='label hidden'>
                <p>Recherche article healthymood recettes saines</p>
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
              {articles.length === 0 ? (
                <p>Entrez votre recherche.</p>
              ) : (
                  articles.map((recipe) => {
                    return (
                      <div className='filtered-recipes' key={recipe.id}>
                        <SmallArticle r={recipe} />
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