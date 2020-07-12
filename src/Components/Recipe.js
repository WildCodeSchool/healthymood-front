import React from 'react';
import '../Styles/Recipe.css';
import publishedImage from '../Images/published.png';
import authorImage from '../Images/author.png';
import mealTypeImage from '../Images/meal-type.png';
import durationImage from '../Images/duration.png';
import priceImage from '../Images/price.png';
import categoryImage from '../Images/category.png';
import caloriesImage from '../Images/calories-2.png';
import SocialMedia from './SocialMediaRecipe';
import ReactToPrint from 'react-to-print';
import PrintImage from '../Images/print.png';
import API from '../Services/API';

class RecipeToPrint extends React.Component {
  render () {
    const recipeInfo = this.props.recipeInfo;
    console.log(recipeInfo);
    return (
      <div className='recipe-container'>
        <header>
          <h1 className='recipe-title'>{recipeInfo.title}</h1>
          <div className='reciper-banner-image' style={{ backgroundImage: `url(${recipeInfo.image})` }} />
          <div className='publication-info'>
            <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{recipeInfo.author}</p>
            <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} /><p>{recipeInfo.updated_at}</p>
            <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{recipeInfo.category}</p>
          </div>

        </header>
        <p className='recipe-intro'>{recipeInfo.intro}</p>
        <div className='recipe-info'>
          <div className='picto-info-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${mealTypeImage})` }} /><p>{recipeInfo.meal_type}</p>
          </div>
          <div className='picto-info-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${caloriesImage})` }} /><p>Environ {recipeInfo.calories} calories</p>
          </div>
          <div className='picto-info-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${durationImage})` }} /><p>{recipeInfo.preparation_time}</p>
          </div>
          <div className='picto-info-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${priceImage})` }} /><p>{recipeInfo.price}</p>
          </div>
        </div>
        <div className='instructions-container'>
          <h2>Ingrédients</h2>
          <ul>
            {/*             {recipeInfo.ingredients.map(ingredient => {
              return (
                <li key={ingredient.id}><span className={ingredient.is_allergen && 'is-allergen'}>{ingredient.name}</span></li>
              );
            })} */}
          </ul>

          <h2>Instructions</h2>
          <ol>
            {recipeInfo.content}
          </ol>
        </div>
      </div>
    );
  }
}

class Recipe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentRecipe: [],
      recipeIsLoading: true
    };
  }

  componentDidMount () {
    API.get(`/recipes/${this.props.match.params.slug}`)
      .then(data => data.data)
      .then(results => {
        this.setState({ currentRecipe: results.data });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.props.match.params.slug);
  }

  componentDidUpdate (prevProps) {
    if (this.props.currentRecipe !== prevProps.currentRecipe) {
      this.setState({ recipeIsLoading: false });
    }
  }

  render () {
    const params = this.props.match.params;
    console.log(this.state.currentRecipe);
    return (
      !this.recipeIsLoading ? (
        <div className='print-recipe-container'>
          <RecipeToPrint params={params} recipeInfo={this.state.currentRecipe} ref={el => (this.componentRef = el)} />
          <h5 className='social-title'>Merci de partager : </h5>
          <div className='social-print-container'>
            <SocialMedia slug={params.slug} />
            <ReactToPrint
              trigger={() => <button className='print-button' style={{ backgroundImage: `url(${PrintImage})` }} />}
              content={() => this.componentRef}
            />
          </div>
        </div>
      ) : <p>Rien à afficher</p>);
  }
}

export default Recipe;
