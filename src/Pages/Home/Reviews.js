import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, error } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-14 md:py-28 text-primary'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'>Customer <span className='text-secondary'>Reviews</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(re => <Review
                        key={re._id} re={re}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;