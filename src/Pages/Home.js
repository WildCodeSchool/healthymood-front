import React from 'react';
import '../Styles/Home.css';
import ControlledCarousel from '../Components/Carousel';
import CategoriesList from '../Components/CategoriesList';

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <ControlledCarousel />
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
