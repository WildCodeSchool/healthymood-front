import React from 'react';
import recetteImage from '../Images/sauce-tartare-healthy.jpg';
import '../Styles/Recipe.css';
import publishedImage from '../Images/published.png';
import authorImage from '../Images/author.png';
import mealTypeImage from '../Images/meal-type.png';
import durationImage from '../Images/duration.png';
import priceImage from '../Images/price.png';
import categoryImage from '../Images/category.png';
import caloriesImage from '../Images/calories-2.png';

const recipesInfo = {
  recipe: {
    id: 1,
    image: recetteImage,
    title: 'Sauce tartare façon healthy',
    intro: 'La sauce tartare est un classic de l’accompagnement. Souvent achetée en grande surface, elle est pourtant très simple à faire soi-même et délicieuse en version healthy !',
    author: 'Healthymood',
    meal_type: 'Apéritifs',
    category: 'Sauce',
    ingredients: [
      {
        id: '1',
        name: 'oeufs',
        is_allergen: true
      },
      {
        id: '2',
        name: 'moutarde',
        is_allergen: true
      },
      {
        id: '3',
        name: 'huile d’olive',
        is_allergen: true
      },
      {
        id: '4',
        name: 'citron',
        is_allergen: true
      },
      {
        id: '5',
        name: 'yaourt à la grecque',
        is_allergen: true
      },
      {
        id: '6',
        name: 'cornichon',
        is_allergen: true
      },
      {
        id: '7',
        name: 'jus de cornichon',
        is_allergen: true
      },
      {
        id: '8',
        name: 'jus de citron',
        is_allergen: true
      },
      {
        id: '9',
        name: 'oignon blanc',
        is_allergen: true
      },
      {
        id: '10',
        name: 'moutarde',
        is_allergen: true
      }
    ],
    instructions: ['Séparez les blancs de vos jaunes d’oeufs.', 'Dans un saladier, montez les blancs en neige.', 'Dans un second saladier, versez un seul jaune d’oeuf et le battre à l’aide d’une fourchette. Ajoutez-y une pointe de sel, une pointe de poivre et la moutarde.', 'Au batteur, mélangez le tout afin de former un mélange lisse et homogène. Une fois cette texture obtenue, ajoutez petit-à-petit l’huile d’olive en fin filet. Mélangez jusqu’à ce que la mayonnaise soit suffisamment ferme.', 'Lorsque le mélange est bien pris, ajoutez délicatement les blancs d’oeufs. C’est prêt !', 'La mayonnaise peut être relevée à l’aide d’un petit peu d’ail en poudre ou de ciboulette, selon le plat que vous souhaitez accompagner.', 'mélanger tout simplement, tous les ingrédients dans un bol et bien mélanger jusqu’à obtenir un mélange homogène.', 'La sauce tartare pourra être conservée au réfrigérateur pendant une semaine. Elle accompagnera à merveille vos crudités et amènera une touche d’originalité à vos burgers.'],
    slug: 'sauce-tartar-healthy',
    calories_nb: '30',
    preparation_time: '10 min, pas de cuisson',
    price: '5€',
    created_at: '03/06/2020',
    updated_at: '03/06/2020'
  }
};

function Recette () {
  return (
    <div className='recipe-container'>
      <header>
        <h1 className='recipe-title'>{recipesInfo.recipe.title}</h1>
        <div className='reciper-banner-image' style={{ backgroundImage: `url(${recetteImage})` }} />
        <div className='publication-info'>
          <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{recipesInfo.recipe.author}</p>
          <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} /><p>{recipesInfo.recipe.updated_at}</p>
          <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{recipesInfo.recipe.category}</p>
        </div>
      </header>
      <p className='recipe-intro'>{recipesInfo.recipe.intro}</p>
      <div className='recipe-info'>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${mealTypeImage})` }} /><p>{recipesInfo.recipe.meal_type}</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${caloriesImage})` }} /><p>Environ {recipesInfo.recipe.calories_nb} calories</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${durationImage})` }} /><p>{recipesInfo.recipe.preparation_time}</p>
        </div>
        <div className='picto-info-container'>
          <span className='picto-container' style={{ backgroundImage: `url(${priceImage})` }} /><p>{recipesInfo.recipe.price}</p>
        </div>
      </div>
      <div className='instructions-container'>
        <h2>Ingrédients</h2>
        <ul>
          {recipesInfo.recipe.ingredients.map(ingredient => {
            return (
              <li key={ingredient.id}><span className={ingredient.is_allergen && 'is-allergen'}>{ingredient.name}</span></li>
            );
          })}
        </ul>

        <h2>Instructions</h2>
        <ol>
          {recipesInfo.recipe.instructions.map(instruction => {
            return (
              <li key={instruction}><p>{instruction}</p></li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Recette;
