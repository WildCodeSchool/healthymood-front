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
    if ((!props.location.search && currentInput) || (props.location.search !== currentInput && currentInput)) {
      const url = `recipes/?search=${currentInput}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          return data.data;
        })
        .then((data) => setRecipes(data));
    } else if (props.location.search && !currentInput) {
      console.log('adresse remplie');
      console.log(props.location.search.split('=')[1]);
      setCurrentInput(props.location.search.split('=')[1]);
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
    history.push({
      pathname: `/rechercher/?search=${currentInput}`
    });
    GetRecipes();
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
                <p>Entrez votre recherche.</p>
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

/*
class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSearch: '',
      validate: false,
      recipes: []
    };
    this.handleGetRecipes = this.handleGetRecipes.bind(this);
  }

  handleGetRecipes = () => {
    if (this.props.history.location.pathname === '/rechercher') {
      const url = `recipes/?search=${this.state.currentSearch}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          this.setState({
            recipes: [data][0].data
          });
        });
      this.props.history.push(`/rechercher/?search=${this.state.currentSearch}`);
    } else {
      const currentInput = this.props.history.location.search.split('=')[1];
      const url = `recipes/?search=${this.state.currentSearch}`;
      API.get(url)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          this.setState({
            recipes: [data][0].data
          });
        });
        this.props.history.push(`/rechercher/?search=${this.state.currentSearch}`)
    }
    this.setState({validate: false})
  };

  handleChange = (event) => {
    this.setState({ currentSearch: event.target.value });
  };

  handleAddfilter = async () => {
    const currentFilter = [];
    const newFilter = currentFilter.concat(this.state.currentSearch);
    if (this.state.currentSearch) {
      this.setState({ filter: newFilter, currentSearch: '' });
    }
    this.handleGetRecipes();
    this.props.history.push(`/rechercher/?search=${this.state.currentSearch}`);
  };

  handleDelete = (str) => {
    const newFilter = this.state.filter.filter((e) => str !== e);
    this.setState({ filter: newFilter, recipes: [], searchInput: '' });
    this.props.history.push('/rechercher');
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      event.preventDefault();
      const currentSearch = event.target.value;
      this.setState({ currentSearch });
      this.handleGetRecipes();
      this.handleAddfilter(currentSearch);
      event.target.blur();
    }
  };

  componentDidMount () {
    const searchInputQuery = this.props.location.search;
    if (searchInputQuery !== '?search=') {
      console.log(searchInputQuery)
      const searchInput = searchInputQuery.split('=')[1];
      console.log(searchInput)
      this.setState({ currentSearch: searchInput });
      this.handleGetRecipes();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.validate && (this.state.currentSearch !== prevProps.currentSearch)) {
      console.log('it works')
    }
  }

  render () {
    const recipes = this.state.recipes;
    return (
      <div className='recherche-container'>
        <div className='Loupe'>
          <h5>Recherche simple</h5>
          <div className='search-field'>
            {<div className='filter-list'>
              {this.state.filter.map((e) => (
                <p
                  key={e}
                  onClick={() => this.handleDelete(e)}
                  className='filter-name'
                >
                  {e}
                  <img src={Cancel} alt='cancel' />
                </p>
              ))}
            </div> }
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
                  value={this.state.currentSearch}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <button className='btn-search' onClick={this.handleGetRecipes}>
                <img src={Loupe} alt='search' />
                Rechercher
              </button>
            </div>
            <div className='result'>
              <div className='filter-recipes-container'>
                {recipes.length === 0 ? (
                  <p>Entrez votre recherche.</p>
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
}

export default Search;
 */
