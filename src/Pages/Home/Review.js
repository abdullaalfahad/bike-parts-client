import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ re }) => {
    const { review, rating } = re;
    console.log(re)
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>{review}</p>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-secondary' icon={faStar} />}
                    readonly
                ></Rating> <span>{rating} Stars</span>
            </div>
        </div>
    );
};

export default Review;