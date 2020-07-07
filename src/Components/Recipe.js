import React from "react";
import recetteImage from "../Images/sauce-tartare-healthy.jpg";
import "../Styles/Recipe.css";
import publishedImage from "../Images/published.png";
import authorImage from "../Images/author.png";
import mealTypeImage from "../Images/meal-type.png";
import durationImage from "../Images/duration.png";
import priceImage from "../Images/price.png";
import categoryImage from "../Images/category.png";
import caloriesImage from "../Images/calories-2.png";
import recipesInfo from "../recipesInfo.json";
import SocialMedia from "./SocialMediaRecipe";
import ReactToPrint from "react-to-print";
import PrintImage from "../Images/print.png";
import Rating from "./Rating";

class RecipeToPrint extends React.Component {
  render() {
    const recipeInfo = this.props.recipeInfo;

    return (
      <div className="recipe-container">
        <header>
          <h1 className="recipe-title">{recipeInfo.title}</h1>
          <div
            className="reciper-banner-image"
            style={{ backgroundImage: `url(${recetteImage})` }}
          />
          <div className="publication-info">
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${authorImage})` }}
            />
            <p>{recipeInfo.author}</p>
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${publishedImage})` }}
            />
            <p>{recipeInfo.updated_at}</p>
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${categoryImage})` }}
            />
            <p>{recipeInfo.category}</p>
          </div>
          <Rating recipeInfo={recipeInfo} />
        </header>
        <p className="recipe-intro">{recipeInfo.intro}</p>
        <div className="recipe-info">
          <div className="picto-info-container">
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${mealTypeImage})` }}
            />
            <p>{recipeInfo.meal_type}</p>
          </div>
          <div className="picto-info-container">
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${caloriesImage})` }}
            />
            <p>Environ {recipeInfo.calories_nb} calories</p>
          </div>
          <div className="picto-info-container">
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${durationImage})` }}
            />
            <p>{recipeInfo.preparation_time}</p>
          </div>
          <div className="picto-info-container">
            <span
              className="picto-container"
              style={{ backgroundImage: `url(${priceImage})` }}
            />
            <p>{recipeInfo.price}</p>
          </div>
        </div>
        <div className="instructions-container">
          <h2>Ingrédients</h2>
          <ul>
            {recipeInfo.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <span className={ingredient.is_allergen && "is-allergen"}>
                    {ingredient.name}
                  </span>
                </li>
              );
            })}
          </ul>

          <h2>Instructions</h2>
          <ol>
            {recipeInfo.instructions.map((instruction) => {
              return (
                <li key={instruction}>
                  <p>{instruction}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

class Recipe extends React.Component {
  render() {
    const params = this.props.match.params;
    const recipeInfo = recipesInfo.recipe.filter(
      (r) => r.slug === params.slug
    )[0];
    return (
      <div className="print-recipe-container">
        <RecipeToPrint
          params={params}
          recipeInfo={recipeInfo}
          ref={(el) => (this.componentRef = el)}
        />
        <h5 className="social-title">Merci de partager : </h5>
        <div className="social-print-container">
          <SocialMedia slug={params.slug} />
          <ReactToPrint
            trigger={() => (
              <button
                className="print-button"
                style={{ backgroundImage: `url(${PrintImage})` }}
              />
            )}
            content={() => this.componentRef}
          />
        </div>
      </div>
    );
  }
}

export default Recipe;
