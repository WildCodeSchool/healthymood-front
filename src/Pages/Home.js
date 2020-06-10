import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ControlledCarousel from '../Components/Carousel';

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <ControlledCarousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
