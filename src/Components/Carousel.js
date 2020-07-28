import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Carousel.css';
import API from '../Services/API';

function ControlledCarousel () {
  const [index, setIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/smoothies-healthy-comfort-food.jpg',
      alt: 'Second slide',
      title: 'Découvrez nos astuces pour une cuisine plus saine',
      caption: 'Nous vous donnons toutes les clés pour cuisiner sainement en toute simplicité !',
      button: 'Lire nos conseils',
      link: 'conseils-astuces'
    },
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/nom7-2.jpg',
      alt: 'Third slide',
      title: 'L\'annuaire de la cuisine saine et sans allergène !',
      caption: 'Healthymood, c\'est plus de 500 recettes classées par catégorie. N\'attendez plus et découvrez votre prochain repas !',
      button: 'Envoyer ma recette ',
      link: 'envoyer-recette'
    }
  ]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    API.get('/articles?per_page=1&sort_by=created_at&sort_order=desc')
      .then(res => {
        const lastArticle = res.data.data[0];
        if (lastArticle) {
          setCarouselItems((carouselItems) => [{
            className: 'background-container d-block w-100',
            src: lastArticle.image,
            alt: 'First slide',
            title: lastArticle.title,
            caption: lastArticle.intro,
            button: 'Lire l\'article ',
            link: `article/${lastArticle.slug}`
          }, ...carouselItems]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []) //eslint-disable-line

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map(e => {
        return (
          <Carousel.Item className='carousel-element' key={e.alt}>
            <div className={e.className} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${e.src}')` }} />
            <div className='carousel-content'>
              <Carousel.Caption className='carousel-title'>
                <h3>{e.title}</h3>
                {e.caption ? <p>{e.caption}</p> : ''}
                <Link to={`/${e.link}`}><button className='carousel-button'>{e.button}</button></Link>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      }
      )}
    </Carousel>
  );
}

export default ControlledCarousel;
