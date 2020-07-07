import React, { useState, useContext, useEffect } from 'react';
import '../Styles/Rating.css';
import { FaStar } from 'react-icons/fa';
import AuthContext from '../Context/authContext';
import API from '../Services/API';

const Rating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { connected } = useContext(AuthContext);

  useEffect(() => {
    API.get(`/ratings/${props.recipeInfo.id}`)
      .then((res) => res.data)
      .then((data) => {
        const scoring = data.data.score;
        setRating(scoring);
      })
      .catch((err) => {
        console.error(err);
        window.alert("Erreur lors de l'affichage de la notation");
      });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (event, ratingValue) => {
    event.preventDefault();
    if (!ratingValue) {
      setRating(ratingValue);
      API.post('/ratings', {
        score: ratingValue,
        recipe_id: props.recipeInfo.id
      })
        .then((res) => res.data)
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.error(err);
          window.alert('Erreur lors de la notation');
        });
    } else {
      API.patch(`/ratings/${props.recipeInfo.id}`, {
        score: ratingValue,
        recipe_id: props.recipeInfo
      })
        .then((res) => res.data)
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.error(err);
          window.alert('Erreur lors de la notation');
        });
    }
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
