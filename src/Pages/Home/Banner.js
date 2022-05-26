import React from 'react';
import { Link } from 'react-router-dom';
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
                    <p className="mb-5">“Nothing compares to the simple pleasure of a bike ride.” “You never have the wind with you — either it is against you or you're having a good day.”</p>
                    <Link to="/blogs"><button className="btn btn-secondary text-white">Read Blogs</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Banner;