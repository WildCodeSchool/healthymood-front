import React from 'react';
import '../Styles/Search.css';
class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: [],
      currentSearch: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddfilter = this.handleAddfilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange (event) {
    this.setState({ currentSearch: event.target.value });
  }

  handleAddfilter () {
    const currentFilter = this.state.filter;
    const newFilter = currentFilter.concat(this.state.currentSearch);
    this.setState({ filter: newFilter, currentSearch:'' });
  }

  handleDelete (str) {
    const newFilter = this.state.filter.filter((e) => str !== e)
    this.setState({ filter: newFilter })
  }

  render () {
    return (
      <div className='recherche-container'>
        <div className='filter-list'>{this.state.filter.map(e => <p key={e} onClick={() => this.handleDelete(e)}>{e}</p>)}</div>
        <input
          id='search'
          name='search'
          type='text'
          placeholder='Rechercher'
          value={this.state.currentSearch}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleAddfilter}
        >Rechercher
        </button>
      </div>
    );
  }
}

export default Search;
