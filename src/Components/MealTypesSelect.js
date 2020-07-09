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

  handleInputChange = (inputValue, { action }) => {
    console.log(inputValue, action);
    let menuIsOpen;
    switch (action) {
      case 'input-change':
        this.setState({ inputValue });
        break;
      case 'menu-close':
        console.log(this.state.inputValue);
        if (this.state.inputValue) {
          menuIsOpen = true;
        }
        this.setState({
          menuIsOpen
        });
        break;

      default:
    }
  }

  render () {
    const { inputValue, menuIsOpen } = this.state;
    const defaultValue = this.props.value;
    console.log(defaultValue);
    console.log(optionsMealTypes);
    return (
      <AsyncSelect
        isMulti
        defaultValue={optionsMealTypes.filter(option => defaultValue.map(value => value.id).includes(option.id))}
        isClearable
        isSearchable
        cacheOptions
        defaultOptions
        inputValue={inputValue}
        onInputChange={this.handleInputChange}
        name='color'
        loadOptions={promiseOptions}
        onChange={(e) => { this.props.handleMealTypesFilters(e); }}
        menuIsOpen={menuIsOpen}
      />
    );
  }
}
