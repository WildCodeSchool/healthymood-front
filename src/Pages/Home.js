import React from 'react';
import Footer from '../Components/Footer';
import ControlledCarousel from '../Components/Carousel';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <ControlledCarousel />
                <Footer />
            </div>
        )
    }

}

export default Home;
