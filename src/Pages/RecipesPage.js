import React from 'react';
import SmallRecipe from '../Components/SmallRecipe';
import '../Styles/RecipesPage.css';

class RecipesPage extends React.Component {
  render () {
    return (
      <div className='recipes-page-container'>
        <SmallRecipe />
      </div>

    );
  }
}

export default RecipesPage;
