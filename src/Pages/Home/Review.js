import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ re }) => {
    const { review, rating, name } = re;

    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
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