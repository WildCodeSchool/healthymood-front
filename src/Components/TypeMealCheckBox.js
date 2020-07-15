import React from 'react';

function TypeMealCheckBox ({ mealTypes, register }) {
  return (
    <div className='meal-type-select'>
      <p>Type de plat : </p>
      <div className=''>
        {mealTypes.map((d) => {
          d.select = false;
          const handleClick = (e) => {
            d.select = e.target.checked;
          };
          return (
            <div className='meal-checkbox' key={d.id}>
              <input type='checkbox' id={d.id} name='meal' value={d.name} onClick={handleClick} />
              <label for={d.name}>{d.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeMealCheckBox;
