import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutFrom = ({ order }) => {
    const { totalPrice, name, email, _id } = order;
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message);
            setCardSuccess('');
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setCardSuccess('Congrats! Your payment is completed.')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-4 btn btn-xs btn-secondary' type="submit" disabled={!stripe || !clientSecret || cardSuccess}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {
                cardSuccess &&
                <div>
                    <p className='text-success'>{cardSuccess}</p>
                    <p className='text-success'>TransactionId: {transactionId}</p>
                </div>
            }
        </div>
    );
};

export default CheckoutFrom;