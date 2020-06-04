import React, { useState, render } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
  // const [index, setIndex] = useState(0);
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

   handleSelect = (selectedIndex, e) => {
    this.setState({index: selectedIndex})
  };
render () {
  return (
    
    <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/legumes-ete-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/legumes-ete-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.healthymood.fr/wp-content/uploads/legumes-ete-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}}



export default ControlledCarousel;
