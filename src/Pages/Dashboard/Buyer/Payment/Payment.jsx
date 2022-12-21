import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_publishable_key);


const Payment = () => {
    const [success, setSuccess] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const booking = useLoaderData();
    // console.log(booking);

    const { buyerName, productName, productPrice } = booking.data;

    return (
        <div className='mx-4'>
            <div className="m-4">
                <h3 className="text-3xl my-4 text-lime-700"> Wellcome to , <strong className='text-blue-600'>{buyerName}</strong></h3>
                <p className="text-2xl text-indigo-400">Payment for <strong className='text-blue-500'>{productName}</strong>,
                    <span className="text-xl"> Please pay <strong className='text-orange-500'>${productPrice}</strong> for your furniture...</span></p>
            </div>

            <div className=' border-2 my-12'>
                <div className='text-center'>
                    {
                        success && <div>
                            <p className='text-green-500'>{success}</p>
                            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                        </div>
                    }
                </div>
                <div className='border p-6 rounded-md w-96 mx-auto my-8' >
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                            setSuccess={setSuccess}
                            setTransactionId={setTransactionId} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;