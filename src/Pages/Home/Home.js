import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Location from './Location';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Home;