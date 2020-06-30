import React, { useState } from 'react';
import Loupe from '../Images/glass.png';
import Cancel from '../Images/cross.png';
import API from '../Services/Api';

export default function SearchArticles(props) {
  const [filter, setFilter] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [articles, setArticles] = useState([]);

  const handleGetArticles = () => {
    const url = `/articles/?search=${currentSearch}`;
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        setArticles({
          articles: [data]
        });
      });
  };

  const handleChange = (event) => {
    setCurrentSearch(event.target.value);
  };

  const handleAddfilter = async () => {
    const currentFilter = [];
    const newFilter = currentFilter.concat(currentSearch);
    if (currentSearch) {
      setFilter(newFilter);
      setCurrentSearch('');
    }
    handleGetArticles();
    props.history.push(`/conseils-astuces/?search=${currentSearch}`);
  };

  const handleDelete = (str) => {
    const newFilter = filter.filter((e) => str !== e);
    setFilter(newFilter);
    setArticles([]);
    props.history.push('/conseils-astuces');
  };

  const handleKeyDown = (event) => {
    // permet d'effectuer la recherche avec entrée
    if (event.key === 'Enter' && event.target.value) {
      event.preventDefault();
      const currentSearch = event.target.value;
      setCurrentSearch(currentSearch);
      handleAddfilter(currentSearch);
      event.target.blur();
    }
  };

  return (
    <div className='recherche-container'>
      <div className='Loupe'>
        <h5>Recherche simple</h5>
        <div className='search-field'>
          <div className='filter-list'>
            {filter.map((e) => (
              <p
                key={e}
                onClick={() => handleDelete(e)}
                className='filter-name'
              >
                {e}
                <img src={Cancel} alt='cancel' />
              </p>
            ))}
          </div>
          <div className='search-block'>
            <div className='my-search'>
              <label className='label'>
                <p>Rechercher par mots-clés </p>
              </label>
              <input
                id='search'
                name='search'
                type='text'
                placeholder='Rechercher'
                value={currentSearch}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button className='btn-search' onClick={handleAddfilter}>
              <img src={Loupe} alt='search' />
                    Rechercher
            </button>
          </div>
          <div className='result'>
            <div className='filter-recipes-container'>
              {articles.length === 0 ? (
                <p>Entrez votre recherche.</p>
              ) : (
                  articles[0].data.map((recipe) => {
                    return (
                      <div className='filtered-recipes' key={recipe.id}>
                        hello
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
