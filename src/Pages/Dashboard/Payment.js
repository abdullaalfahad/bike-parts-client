import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1vJzFmLMx6FYCyJpODU7S4VPQl4qpxH1GGJLdagNsoSdoxk9uAsmc3xQ3Va7uIS7c4Y3H1FEptpQr04pTuhBXq00yKCLkpC6');

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(`https://vast-dawn-74828.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='ml-16 my-8'>
            <div className="card w-50 max-w-md shadow-2xl bg-base-100 mb-5">
                <div className="card-body">
                    <p className='text-secondary font-bold'>Hello {order?.name}, </p>
                    <h2 className="card-title">Please pay for {order?.tool?.slice(0, 20)}...</h2>
                    <p>Your order quantity: {order?.orderQuantity}, unit price: ${order?.price}</p>
                    <div className="card-actions justify-end">
                        <p>Total Payable: ${order?.totalPrice}</p>
                    </div>
                </div>

            </div>
            <div className="card w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;