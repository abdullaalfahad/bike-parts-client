import React from 'react';
import img from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${img})`
        }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="lg:w-9/12">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold" >Welcome To Bike Parts Website</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary text-white">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;