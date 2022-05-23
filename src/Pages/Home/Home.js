import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;