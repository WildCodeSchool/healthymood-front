import React from 'react';
import SmallRecipe from '../Components/SmallRecipe';
import recipesInfo from '../recipesInfo.json';
import '../Styles/RecipesPage.css';

class RecipesPage extends React.Component {
  render () {
    return (
      <>
        {recipesInfo.recipe.map((r) => {
          return (
            <div key={r.id} className='recipes-page-container'>
              <SmallRecipe r={r} />
            </div>
          );
        })}
      </>
    );
  }
}

export default RecipesPage;
