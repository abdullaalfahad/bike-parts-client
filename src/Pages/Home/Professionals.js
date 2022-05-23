import React from 'react';
import Professional from './Professional';

const Contact = () => {
    const professionals = [
        {
            id: 1,
            name: 'Geoffrey Smith',
            designation: 'Engineers',
            img: 'https://i.ibb.co/tDfm2R2/professionals-01.jpg',
            description: 'Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost.'
        },
        {
            id: 2,
            name: 'Paul Goto',
            designation: 'Mechanic',
            img: 'https://i.ibb.co/1LxcN3T/professionals-02.jpg',
            description: 'Automotive technician have many trades within. Some may specialize in the electrical diagnosis, while others may specialize in the mechanical aspects. Other mechanical areas include: brakes and steering, suspension, automatic or manual transmission, engine repairs, diagnosing customer complaints.'
        },
        {
            id: 3,
            name: 'Geoffrey Cors',
            designation: 'Engineers',
            img: 'https://i.ibb.co/tDfm2R2/professionals-01.jpg',
            description: 'Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost.'
        }
    ]

    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-12 md:py-28 text-primary'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'>Our <span className='text-secondary'>Professionals</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    professionals.map(professional => <Professional
                        key={professional.id} professional={professional}
                    ></Professional>)
                }
            </div>
        </div>
    );
};

export default Contact;