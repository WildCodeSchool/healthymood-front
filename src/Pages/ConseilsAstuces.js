import React, { useState, useEffect } from 'react';
import Loupe from '../Images/glass.png';
import SmallArticle from '../Components/SmallArticle';
import '../Styles/ConseilsAstuces.css';
import API from '../Services/Api';
import { useHistory } from 'react-router-dom';

export default function SearchArticles(props) {
  const history = useHistory();

  const [articles, setArticles] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const GetArticles = () => {
    if (
      (!props.location.search && currentInput) ||
      // cas où rien dans l'url mais mot dans l'input
      (props.location.search !== currentInput && currentInput)
      // cas où recherche dans l'url mais mot différent dans l'input : relance la recherche avec l'input
    ) {
      const url = `articles/?search=${currentInput}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setArticles(data));
    } else if (props.location.search && !currentInput) {
      // cas du rechargement de la page ou url rentrée direct
      const search = decodeURIComponent(props.location.search.split('=')[1]);
      setCurrentInput(search);
      setCurrentSearch(search);
      const url = `articles/?search=${props.location.search.split('=')[1]}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setArticles(data));
    }
  };

  const handleValidate = () => {
    if (currentInput) {
      history.push({
        pathname: `/conseils-astuces/?search=${currentInput}`
      });
      setCurrentSearch(currentInput);
      GetArticles();
    } else {
      history.push({
        pathname: '/rechercher'
      });
      setArticles([]);
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
    GetArticles();
  }, []); // eslint-disable-line

  return (
    <div className='recherche-container'>
      <div className='Loupe'>
        <h2>Rechercher un article</h2>
        <div className='search-field'>
          <div className='search-block'>
            <div className='my-search'>
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
            <div className='filter-articles-container'>
              {articles.length === 0 ? (
                currentSearch && <h4 className='no-result'>Aucun résultat pour {currentSearch}</h4>
              ) : (
                  <>
                    <h4 className='results-title'>Résultats pour {currentSearch}</h4>
                    {articles.map((article) => {
                      return (
                        <div className='filtered-articles' key={article.id}>
                          <SmallArticle a={article} />
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