import React from 'react';
import Footer from '../Components/Footer';
import Recipe from './Recipe';
import Article from './Article';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Recipe />
                <Article />                
            </div>
        )
    }
}

export default Home;
