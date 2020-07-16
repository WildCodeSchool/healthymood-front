import React from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const animatedComponents = makeAnimated();

const NoOptionsMessage = props => {
  return (
    <div>{props.noMoreText ? props.noMoreText : "pas d'autre option"}</div>
  );
};

export function TagSelect (props) {
  return (
    <Select
      {...props}
      closeMenuOnSelect={false}
      isMulti
      components={{ ...animatedComponents, NoOptionsMessage }}
    />
  );
}
