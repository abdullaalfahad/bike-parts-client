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
            <Reviews></Reviews>
            <About></About>
            <Summary></Summary>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Home;