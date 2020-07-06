import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { optionsMealTypes } from './Search';

type State = {
  inputValue: string,
};

const filterMealTypes = (inputValue: string) => {
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

export default class MealTypesSelect extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
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
