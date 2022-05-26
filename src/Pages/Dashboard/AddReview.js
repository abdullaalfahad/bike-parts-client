import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const name = user.displayName;
        const rating = event.target.rating.value;
        const description = event.target.description.value;

        if (rating >= 1 && rating <= 5) {
            const review = {
                name: name,
                rating: rating,
                review: description,
            }
            fetch('https://vast-dawn-74828.herokuapp.com/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        toast('Review Added Successfully');
                        event.target.reset();
                    }
                })
        }
        else {
            toast.error('Rating must be 1 to 5');
        }

    }

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='my-6 text-xl font-medium lg:text-2xl'>Add A Review</h1>
            <form onSubmit={handleAddReview}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type="number" placeholder='Ratings' className="input input-bordered w-full max-w-xs" name='rating' required />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Describe your review" name='description' required></textarea>
                </div>

                <input className='btn btn-secondary w-full max-w-xs mt-4' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddReview;