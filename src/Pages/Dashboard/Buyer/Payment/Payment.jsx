import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);
    const { buyerName, productName, productPrice } = booking.data;

    return (
        <div>
            <div className="m-4">
                <h3 className="text-3xl my-4 text-lime-700"> Wellcome to , <strong className='text-blue-600'>{buyerName}</strong></h3>
                <p className="text-2xl text-indigo-400">Payment for <strong className='text-blue-500'>{productName}</strong>,
                    <span className="text-xl"> Please pay <strong className='text-orange-500'>${productPrice}</strong> for your furniture...</span></p>
            </div>
        </div>
    );
};

export default Payment;