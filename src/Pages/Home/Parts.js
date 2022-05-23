import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: parts, isLoading, error } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-12 md:py-28 text-primary'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'><span className='text-secondary'>Parts</span> We Served</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    parts.slice(0, 8).map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;