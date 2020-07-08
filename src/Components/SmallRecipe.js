import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/SmallRecipe.css";
import emptyFav from "../Images/fav.png";
import fullFav from "../Images/fav-full.png";
import AuthContext from "../Context/authContext";
import FavoriteContext from "../Context/favoriteContext";

const SmallRecipe = ({ r }) => {
  const { connected } = useContext(AuthContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);
  return (
    <>
      <div key={r.slug} className="small-recipe-global-container">
        {connected ? (
          <span
            className="small-recipe-favorite-icon"
            onClick={() => setFavorite(!favorite)}
            style={{
              backgroundImage: favorite
                ? `url(${fullFav})`
                : `url(${emptyFav})`,
            }}
          />
        ) : (
          ""
        )}
        <Link to={`/recettes/${r.slug}`} key={r.slug} className="link-recette">
          <div className="small-recipe-container">
            <>
              <div
                className="small-reciper-banner-image"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${r.image}`,
                }}
              />
              <div className="small-recipe-content-container">
                <h1 className="small-recipe-title">{r.name}</h1>
                <p className="small-recipe-intro">{r.content}</p>
                <button className="read-more">
                  <p>Lire la suite</p>
                </button>
              </div>
            </>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SmallRecipe;
