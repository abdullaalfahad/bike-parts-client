import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'd03dd260b9b4df86b9b8616f2ff66e0f';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        available: data.available,
                        minimumOrder: data.minimumOrder,
                        price: data.price,
                        img: img
                    }
                    // send to database
                    fetch('https://vast-dawn-74828.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add product');
                            }
                        })
                }
            })
    }

    return (
        <div className='mx-2 w-11/12 lg:w-10/12 md:mx-auto'>
            <h1 className='my-6 text-xl font-medium lg:text-2xl'>Add A Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: 'Provide product name',
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Product description" name='description'  {...register("description", {
                                required: 'Provide product description',
                            })}></textarea>
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" {...register("available", {
                                required: 'Provide available quantity',
                            })} />
                            <label className="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input type="number" placeholder="Minimum order quantity" className="input input-bordered w-full max-w-xs" {...register("minimumOrder", {
                                required: 'Provide minimum order quantity',
                            })} />
                            <label className="label">
                                {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input type="number" placeholder="Unit Price" className="input input-bordered w-full max-w-xs" {...register("price", {
                                required: 'Provide unit price',
                            })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                                required: 'Provide image',
                            })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value="Add" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;