import React from 'react';

class Recherche extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: ['chocolate', 'strawberry', 'vanilla'],
      currentSearch: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ currentSearch: event.target.value });
  }

  handleClick = () => {

  }

  render () {
    return (
      <div className='recherche-container'>
        <div className='filter-list'>{this.state.filter.map(e => <p key={e}>{e}</p>)}</div>
        <input
          id='search'
          name='search'
          type='text'
          value={this.state.currentSearch}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >Rechercher
        </button>
      </div>
    );
  }
}

export default Recherche;
