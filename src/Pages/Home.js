import React from 'react';
import '../Styles/Home.css';
import ControlledCarousel from '../Components/Carousel';
import CategoriesList from '../Components/CategoriesList';
import HomeArticles from '../Components/HomeArticles';

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <ControlledCarousel />
        <CategoriesList />
        <HomeArticles />
      </div>
    );
  }
}

export default Home;
