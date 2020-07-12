import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SmallRecipe.css';
import emptyFav from '../Images/fav.png';
import fullFav from '../Images/fav-full.png';

const SmallRecipe = ({ r }) => {
  const [addFavorite, setAddFavorite] = useState(false);
  console.log(r);
  return (
    <>
      <div key={r.slug} className='small-recipe-global-container'>
        <span
          className='small-recipe-favorite-icon'
          onClick={() => setAddFavorite(!addFavorite)}
          style={{
            backgroundImage: addFavorite
              ? `url(${fullFav})`
              : `url(${emptyFav})`
          }}
        />
        <Link to={`/recettes/${r.slug}`} key={r.slug} className='link-recette'>
          <div className='small-recipe-container'>
            <>
              <div
                className='small-reciper-banner-image'
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('${r.image}')`
                }}
              />
              <div className='small-recipe-content-container'>
                <h1 className='small-recipe-title'>{r.name}</h1>
                <p className='small-recipe-intro'>{r.content}</p>
                <button className='read-more'>
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
