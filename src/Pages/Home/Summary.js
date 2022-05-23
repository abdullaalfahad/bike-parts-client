import React from 'react';
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-12 md:py-24 text-primary'>
            <h1 className='text-xl lg:text-4xl font-bold text-center mb-6 lg:mb-12'>Business Summary</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='text-center'>
                    <div className="text-xl lg:text-3xl lg:mb-1 font-bold">
                        <CountUp delay={1} end={100} /><span>+</span>
                    </div>
                    <p className='text-sm lg:text-xl'>Customers</p>
                </div>
                <div>
                    <div className='text-center'>
                        <div className="text-xl lg:text-3xl lg:mb-1 font-bold">
                            <CountUp delay={1} end={120} /><span>M+</span>
                        </div>
                        <p className='text-sm lg:text-xl'>Annual revenue</p>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <div className="text-xl lg:text-3xl lg:mb-1 font-bold">
                            <CountUp delay={1} end={33} /><span>K+</span>
                        </div>
                        <p className='text-sm lg:text-xl'>Reviews</p>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <div className="text-xl lg:text-3xl lg:mb-1 font-bold">
                            <CountUp delay={1} end={50} /><span>+</span>
                        </div>
                        <p className='text-sm lg:text-xl'>Tools</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;