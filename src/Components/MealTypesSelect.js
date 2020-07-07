import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { optionsMealTypes } from './Search';

const filterMealTypes = (inputValue) => {
  return optionsMealTypes.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterMealTypes(inputValue));
    }, 1000);
  });

export default class MealTypesSelect extends Component {
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
        onChange={(e) => { this.props.handleMealTypesFilters(e); }}
      />
    );
  }
}
