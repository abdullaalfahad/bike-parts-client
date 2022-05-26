import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Professional from './Professional';

const Contact = () => {
    const { data: professionals, isLoading, refetch } = useQuery('professionals', () => fetch('https://vast-dawn-74828.herokuapp.com/professionals').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 lg:w-11/12 mx-auto text-primary'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'>Our <span className='text-secondary'>Professionals</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    professionals.map(professional => <Professional
                        key={professional._id} professional={professional}
                    ></Professional>)
                }
            </div>
        </div>
    );
};

export default Contact;