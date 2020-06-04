import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Carousel.css';
function ControlledCarousel () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const ItemsCarousel = [
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/legumes-ete-2.jpg',
      alt: 'First slide',
      title: 'Les fruits et légumes d\'été sont arrivés!',
      caption: 'Découvrez plus de 150 recettes adaptées à la saison.',
      button: 'Lire l\'article '
    },
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/smoothies-healthy-comfort-food.jpg',
      alt: 'Second slide',
      title: 'Découvrez nos astuces pour une cuisine plus saine',
      caption: 'Nous vous donnons toutes les clés pour cuisiner sainement en toute simplicité !',
      button: 'Lire nos conseils'
    },
    {
      className: 'background-container d-block w-100',
      src: 'https://www.healthymood.fr/wp-content/uploads/nom7-2.jpg',
      alt: 'Third slide',
      title: 'L\'annuaire de la cuisine saine et sans allergène !',
      caption: 'Healthymood, c\'est plus de 500 recettes classées par catégorie. N\'attendez plus et découvrez votre prochain repas !',
      button: 'Envoyer ma recette '
    }
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {ItemsCarousel.map(e => {
        return (
          <Carousel.Item className='carousel-element' key={e.alt}>
            <div className={e.className} style={{ backgroundImage: `url(${e.src})` }} />
            <div className='carousel-content'>
              <Carousel.Caption className='carousel-title'>
                <h3>{e.title}</h3>
                <p>{e.caption}</p>
                <button className='carousel-button'>{e.button}</button>
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
