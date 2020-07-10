import React, { useState, useEffect } from 'react';
import API from '../Services/Api';

function TypeMealCheckBox () {
  const url = '/meal_types';
  const [mealTypes, setMealTypes] = useState([]);
  useEffect(() => {
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        setMealTypes(data.data);
      });
  });

  return (
    <div className='meal-type-select'>
      <p>Type de plat : </p>
      <div className=''>
        {mealTypes.map((type) => {
          return (
            <div className='meal-checkbox' key={type.id}>
              <input type='checkbox' id={type.name} name={type.name} value={type.name} />
              <label for={type.name}>{type.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeMealCheckBox;
