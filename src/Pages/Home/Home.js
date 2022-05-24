import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Professionals from './Professionals';
import Location from './Location';
import Summary from './Summary';
import About from './About';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Professionals></Professionals>
            <Summary></Summary>
            <About></About>
            <Reviews></Reviews>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Home;