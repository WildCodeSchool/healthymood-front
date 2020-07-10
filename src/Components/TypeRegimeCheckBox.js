import React, { useState, useEffect } from 'react';
import API from '../Services/Api';

function TypeRegimeCheckBox () {
  const url = '/recipe_categories';
  const [regimeTypes, setRegimeTypes] = useState([]);
  useEffect(() => {
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        setRegimeTypes(data.data);
      });
  });

  return (
    <div className='regime-type-select'>
      <p>Régime : </p>
      <div className=''>
        {regimeTypes.map((type) => {
          return (
            <div className='regime-checkbox' key={type.id}>
              <input type='checkbox' id={type.name} name={type.name} value={type.name} />
              <label for={type.name}>{type.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeRegimeCheckBox;
