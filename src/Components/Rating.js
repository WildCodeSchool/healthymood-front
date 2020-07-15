import React, { useState, useContext } from 'react';
import '../Styles/Rating.css';
import { FaStar } from 'react-icons/fa';
import AuthContext from '../Context/authContext';
import API from '../Services/API';

const Rating = (props) => {
  const { connected } = useContext(AuthContext);
  const [rating, setRating] = useState(
    props.recipeInfo.user_rating && props.recipeInfo.user_rating.score
  );
  const [hover, setHover] = useState(null);

  const handleSubmit = (event, ratingValue) => {
    event.preventDefault();
    API.post('/ratings', {
      score: ratingValue,
      recipe_id: props.recipeInfo.id
    })
      .then((res) => res.data)
      .then((data) => {
        setRating(ratingValue);
      })
      .catch((err) => {
        console.error(err);
        window.alert('Erreur lors de la notation');
      });
  };

  return (
    <div>
      {connected &&
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={ratingValue}>
              <input
                type='radio'
                className='rating'
                value={ratingValue}
                onClick={(event) => handleSubmit(event, ratingValue)}
              />
              <FaStar
                className='star'
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#87CEEB'}
                sire={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseOut={() => setHover(null)}
              />
            </label>
          );
        })}
    </div>
  );
};

export default Rating;
