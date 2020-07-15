import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import API from '../Services/Api';

const SendFormRecipe = () => {
  const url = '/recipe_categories';
  const url2 = '/meal_types';
  const [regimeTypes, setRegimeTypes] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  useEffect(() => {
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        setRegimeTypes(data.data);
      });
    API.get(url2)
      .then((res) => res.data)
      .then((data) => {
        setMealTypes(data.data);
      });
  }, []);
  console.log(mealTypes);
  console.log(regimeTypes);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className='form-recipe'>
      <h2>Proposer ma recette</h2>
      <form id='post-recipe-form' onSubmit={handleSubmit(onSubmit)} action='/post_recipe' method='POST'>
        <div className='author-id'>
          <div className='author-username'>
            <label>Pseudo : </label>
            <input type='text' name='Pseudo' ref={register} placeholder='Entrez votre pseudo' />
          </div>
          <div className='author-mail'>
            <label>Email : </label>
            <input type='email' aria-describedby='emailHelp' name='email' ref={register} placeholder='Entrez votre adresse email' />
          </div>
        </div>
        <div className='form-title'>
          <label>Titre : </label>
          <input type='text' name='titre' ref={register} placeholder='Entrez un Titre' />
        </div>
        <p>Choisissez un ou plusieurs critères :</p>
        {/* <div className='regime-type-select'>
        <TypeMealCheckBox mealTypes={mealTypes} register={register} />
          <TypeRegimeCheckBox regimeTypes={regimeTypes} register={register} />
  </div>
        <div className='ingredient-input'>
          <label>Mes ingrédients : </label>
          <textarea name='ingredients' ref={register} placeholder='Entrez vos ingrédients' />
  </div> */}
        <div className='recipe-post-description'>
          <label>Description de ma recette : </label>
          <textarea name='recette' ref={register} placeholder='Détaillez votre recette' />
        </div>
        {/* <div className='download'>
          <label>Télécharger une image : </label>
          <input type='file' name='pieceJointe' ref={register} multiple='oui' accept='image/png, image/jpeg, image/jpg' />
</div> */}
        <button type='submit' className='send'>Envoyer</button>
      </form>
    </div>
  );
};

export default SendFormRecipe;
