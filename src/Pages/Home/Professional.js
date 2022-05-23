import React from 'react';

const Professional = ({ professional }) => {
    const { name, designation, img, description } = professional;

    return (
        <div class="card lg:w-96 bg-secondary text-primary shadow-xl">
            <figure><img src={img} alt="" className='w-full' /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h5 className='font-medium'>{designation}</h5>
                <div class="card-actions justify-end">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Professional;