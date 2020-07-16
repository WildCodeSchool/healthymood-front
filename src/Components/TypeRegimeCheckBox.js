import React from 'react';

function TypeRegimeCheckBox ({ regimeTypes, register }) {
  return (
    <div className='regime-type-select'>
      <p>Régime : </p>
      <div className=''>
        {regimeTypes.map((type) => {
          type.select = false;
          const handleClick = (e) => {
            type.select = e.target.checked;
          };
          return (
            <div className='regime-checkbox' key={type.id}>
              <input key={type.id} type='checkbox' id={type.name} name='regime' value={type.name} onClick={handleClick} />
              <label for={type.name}>{type.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeRegimeCheckBox;
