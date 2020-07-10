import React from 'react';
import TypeMealCheckBox from './TypeMealCheckBox';
import TypeRegimeCheckBox from './TypeRegimeCheckBox';

class SendFormRecipe extends React.Component {
  render () {
    return (
      <div className='form-recipe'>
        <h2>Proposer ma recette</h2>
        <form id='post-recipe-form' method='POST'>
          <div className='author-id'>
            <div className='author-username'>
              <label>Pseudo : </label>
              <input type='text' placeholder='Entrez votre pseudo' />
            </div>
            <div className='author-mail'>
              <label>Email : </label>
              <input type='email' aria-describedby='emailHelp' placeholder='Entrez votre adresse email' />
            </div>
          </div>
          <div className='form-title'>
            <label>Titre : </label>
            <input type='text' placeholder='Entrez un Titre' />
          </div>
          <p>Choisissez un ou plusieurs critères :</p>
          <div className='regime-type-select'>
            <TypeMealCheckBox />
            <TypeRegimeCheckBox />
          </div>
          <div className='ingredient-input'>
            <label>Mes ingrédients : </label>
            <textarea placeholder='Entrez vos ingrédients' />
          </div>
          <div className='recipe-post-description'>
            <label>Description de ma recette : </label>
            <textarea placeholder='Détaillez votre recette' />
          </div>
          <div className='download'>
            <label>Télécharger une image : </label>
            <input type='file' id='img' name='img[]' multiple='oui' accept='image/png, image/jpeg, image/jpg' />
          </div>
          <button type='submit' className='send'>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default SendFormRecipe;
