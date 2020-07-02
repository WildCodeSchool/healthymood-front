import React from 'react';
import SimpleSearch from '../Components/SimpleSearch';
import AdvancedSearch from '../Components/AdvancedSearch';
import '../Styles/Search.css';

export default function Search (props) {
  return (
    <div className='search-container'>
      <SimpleSearch {...props} />
      <AdvancedSearch {...props} />
    </div>
  );
}
