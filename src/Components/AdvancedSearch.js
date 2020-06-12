import React from 'react';
import MealTypes from '../MealTypes.json';

export default class AdvancedSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSearchIngredient: '',
      currentSearchMealName: '',
      mealType: [],
      diet: []
    };
  }

  handleChangeIngredient = (event) => {
    this.setState({ currentSearchIngredient: event.target.value });
  }

  handleChangeMealName = (event) => {
    this.setState({ currentSearchMealName: event.target.value });
  }

  handleAddfilter = () => {
    const currentFilter = this.state.filter;
    const newFilter = currentFilter.concat(this.state.currentSearch);
    if (this.state.currentSearch) {
      this.setState({ filter: newFilter, currentSearch: '' });
    }
  }

  handleDelete = (str) => {
    const newFilter = this.state.filter.filter((e) => str !== e);
    this.setState({ filter: newFilter });
  }

  render () {
    // const { currentSearchIngredient, currentSearchMealName, mealType, diet } = this.state;
    return (
      <div className='advanced-search'>
        <h5>Recherche avancée</h5>
        <div className='search-field'>
          <div className='search-block'>
            <div className='my-search'>
              <label className='label' htmlFor='search'>
                <p>Ingrédients </p>
              </label>
              <input
                id='search'
                name='search'
                type='text'
                value={this.state.currentSearch}
                onChange={this.handleChangeIngredient}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className='my-search'>
              <label className='label' htmlFor='search'>
                <p>Nom du plat </p>
              </label>
              <input
                id='search'
                name='search'
                type='text'
                value={this.state.currentSearch}
                onChange={this.handleChangeMealName}
                onKeyDown={this.handleKeyDown}
              />
            </div>

            <div className='meal-type-container'>
              <div className='left-column'>
                <p>Type de plat:</p>
              </div>
              <div className='right-column'>
                {MealTypes.meal_types.map(mealType => {
                  return (
                    <div className='ingredient-checkbox-container' key={mealType.name}>
                      <input
                        type='checkbox'
                        name={mealType.name}
                        id={mealType.name}
                      />
                      <label htmlFor={mealType.name}>{mealType.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
