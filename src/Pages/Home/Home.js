import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Professionals from './Professionals';
import Location from './Location';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Professionals></Professionals>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Home;