import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Professionals from './Professionals';
import Location from './Location';
import Summary from './Summary';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Professionals></Professionals>
            <About></About>
            <Summary></Summary>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Home;