import React from 'react';
import Article from '../Components/ArticleContent';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Article />
        <Footer />
      </div>
    )
  }
}

export default Home;
