import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minimumOrder, available, price } = part;
    const navigate = useNavigate();


    const handlePurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div class="card max-w-lg shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h5 className='font-medium'>Price: ${price}</h5>
                <p className='my-3'>{description}</p>
                <h6 className='font-medium'>Available Quantity: {available}</h6>
                <div className='my-5'>
                    <h6 className='font-medium'>Available Quantity: {minimumOrder}</h6>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary w-9/12 mx-auto text-white" onClick={() => handlePurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;