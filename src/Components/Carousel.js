import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Carousel.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

// a transformer en .map pour le rendre dynamique et qu'elle puisse le changer
//crée tableau d'objet avec src image/lien etc ...

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="riri-class d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/legumes-ete-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel-title'>
          <h3>Les fruits et légumes d'été sont arrivés!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='carousel-button'>Lire l'article &#62;</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/smoothies-healthy-comfort-food.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='carousel-title'>
          <h3>Découvrez nos astuces pour une cuisine plus saine</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='carousel-button'>Lire nos conseils &#62;</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/nom7-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='carousel-title'>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button className='carousel-button'>Envoyer ma recette &#62;</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default ControlledCarousel;
