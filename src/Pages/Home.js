import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Home;
