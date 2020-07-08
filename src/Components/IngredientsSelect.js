import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { optionsIngredients } from './Search';

const filterIngredients = (inputValue) => {
  return optionsIngredients.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterIngredients(inputValue));
    }, 1000);
  });

export default class IngredientsSelect extends Component {
  state = { inputValue: '' };
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  render () {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={(e) => { this.props.handleIngredientsFilters(e); }}
      />
    );
  }
}