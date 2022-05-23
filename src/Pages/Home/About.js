import React from 'react';

const About = () => {
    return (
        <div className='bg-primary text-secondary'>
            <div className='w-11/12 lg:w-11/12 mx-auto py-12 md:py-28 text-primary'>
                <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'><span className='text-secondary'>About</span> <span className='text-white'>Us</span></h1>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='flex-auto'>
                        <img src="https://i.ibb.co/dG0zXsy/about1-1.jpg" alt="" />
                    </div>
                    <div className='flex-auto w-3/4 text-white md:ml-8 mt-5 md:mt-0'>
                        <h3 className='text-xl lg:text-2xl mb-5'>We are leading company in this field, We provide specific solutions for our every customers.</h3>
                        <p className='mb-5'>When you give to Our Charity, know your donation is making a difference Whether you are supporting one our Signature Programs or our carefully curated list of Gifts That Give More, our ut professional staff. Manufactory partner with over 320 amazing projects worldwide, and have given over $150 million in cash and product grants to other groups.</p>
                        <button className='btn btn-secondary text-white'>See our blogs</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default About;