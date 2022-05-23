import React from 'react';
import { useForm } from 'react-hook-form';

const Part = ({ part }) => {
    const { _id, name, img, description, minimumOrder, available, price } = part;

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.order.value)
    };

    return (
        <div class="card max-w-lg shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <form onSubmit={handleSubmit}>
                    <h2 class="card-title">{name}</h2>
                    <h5 className='font-medium'>Price: ${price}</h5>
                    <p className='my-3'>{description}</p>
                    <h6 className='font-medium'>Available Quantity: {available}</h6>
                    <div className='my-5'>
                        <label className=''>Order Quantity:</label>
                        <input type="number" placeholder={`(minimum: ${minimumOrder})`} class="input input-bordered w-full" min={minimumOrder} required name='order' />
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary w-9/12 mx-auto text-white">Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Part;