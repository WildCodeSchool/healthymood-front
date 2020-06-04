import React from 'react';
import Footer from '../Components/Footer';
import Recipe from './Recipe';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Recipe />
                <Footer />
            </div>
        )
    }
}

export default Home;
