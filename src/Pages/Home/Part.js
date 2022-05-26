import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part, refetch }) => {
    const { _id, name, img, description, minimumOrder, available, price } = part;
    const navigate = useNavigate();


    const handlePurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card max-w-lg shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h5 className='font-medium'>Price: ${price}</h5>
                <p className='my-3'>Description: {description}</p>
                <p className='font-medium'>Available Quantity: {available}</p>
                <p className='font-medium'>Minimum Order: {minimumOrder}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-secondary w-9/12 mx-auto text-white px-8" onClick={() => handlePurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;