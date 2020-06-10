import React from 'react';
import '../Styles/Search.css';
import Loupe from '../Images/glass.png';
import Cancel from '../Images/cross.png';
class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: [],
      currentSearch: ''
    };
  }

  handleChange = (event) => {
    this.setState({ currentSearch: event.target.value });
  }

  handleAddfilter = () => {    
    const currentFilter = this.state.filter;
    const newFilter = currentFilter.concat(this.state.currentSearch);
    if (this.state.currentSearch){
      this.setState({ filter: newFilter, currentSearch: '' });
    }
  }

  handleDelete = (str) => {
    const newFilter = this.state.filter.filter((e) => str !== e);
    this.setState({ filter: newFilter });
  }
  
  handleKeyDown = (event) => {// permet d'effectuer la recherche avec entrée
    if (event.key === 'Enter' && event.target.value) {
      event.preventDefault();
      const currentSearch = event.target.value;
  
      this.setState({ currentSearch: currentSearch });
      this.handleAddfilter(currentSearch);
      event.target.blur();

    }
  }

  render () {
    return (
      <div className='recherche-container'>
        <div className='Loupe'>
          <h5>Recherche aléatoire</h5>
          <div className='search-field'>
          <div className='filter-list'>{this.state.filter.map(e => <p key={e} onClick={() => this.handleDelete(e)} className='filter-name'>{e}<img src={Cancel} alt='cancel' /></p>)}</div>
            <div className='search-block'>
            <form className='my-search'>
            <label className='label'>
                <p>J'ai envie de:</p>
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
              <button
                onClick={this.handleAddfilter}
              >
              <img src={Loupe} alt='search' />Rechercher
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
