import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const availableRef = useRef(0);
    const quantityRef = useRef(0);
    const priceRef = useRef(0);
    const [disabled, setDisable] = useState(false);
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const available = parseInt(availableRef.current.value);
        const orderQuantity = parseInt(quantityRef.current.value);
        const price = parseInt(priceRef.current.value);

        if (available > orderQuantity && orderQuantity >= tool.minimumOrder) {
            const newItem = {
                email: event.target.email.value,
                name: event.target.name.value,
                totalPrice: orderQuantity * price,
                address: event.target.address.value,
                phone: event.target.phone.value,
            }
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        let { available, ...rest } = tool;
                        let newQuantity = available - orderQuantity;
                        let newTool = { available: newQuantity, ...rest };
                        setTool(newTool);

                        fetch(`http://localhost:5000/tools/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newTool),
                        })
                            .then(response => response.json())
                            .then(data => {
                                toast('Order successfully placed');
                                event.target.reset();
                                quantityRef.current.value = "";
                            })
                    }
                })
        }
        else if (available < orderQuantity) {
            // setDisable(true);
            toast.error('Order quantity must be less than available');
        }
        else {
            // setDisable(true);
            toast.error('Order quantity must be grater than minimum quantity');
        }

    }

    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-14 md:py-28 text-primary'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div class="card max-w-lg shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={tool.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="text-2xl">{tool.name}</h2>
                        <h2 class="text-xl">Price: <input value={tool.price} type="text" ref={priceRef} className="" /></h2>
                        <p className='my-3'>Description: {tool.description}</p>
                        <h6 className='font-medium'>Available Quantity: <input type="text" ref={availableRef} value={tool.available} /></h6>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text font-medium">Your Order Quantity:</span></label>
                            <input type="number" name='orderQuantity' ref={quantityRef} placeholder={`(minimum: ${tool.minimumOrder})`} className="input input-bordered w-full max-w-xs" min={tool.minimumOrder} required />
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={handlePlaceOrder}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} className="input input-bordered w-full max-w-xs" name='name' required readOnly />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={user.email} className="input input-bordered w-full max-w-xs" name='email' required readOnly />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Address" name='address' required></textarea>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" name='phone' required />
                        </div>

                        <input disabled={disabled} className='btn btn-secondary w-full max-w-xs mt-4' type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;