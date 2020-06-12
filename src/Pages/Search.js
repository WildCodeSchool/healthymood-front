import React from 'react';
import SimpleSearch from '../Components/SimpleSearch';
import AdvancedSearch from '../Components/AdvancedSearch';
import '../Styles/Search.css';

export default class Search extends React.Component {
  state = {
    filter: [],
    currentSearchFilter: '',

    currentSearchIngredient: '',
    currentSearchMealName: '',
    mealType: [],
    diet: []
  };

  render () {
    return (
      <div className='search-container'>
        <SimpleSearch />
        <AdvancedSearch />
      </div>
    );
  }
}
