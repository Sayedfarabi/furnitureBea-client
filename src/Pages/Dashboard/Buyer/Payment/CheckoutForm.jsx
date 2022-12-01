import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
// import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';

const CheckoutForm = ({ booking }) => {
    // const { api } = useContext(DashboardContext);
    // const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    // const { data } = booking;
    // const { productPrice } = data;
    // console.log(productPrice);

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
    //         },
    //         body: JSON.stringify({ productPrice }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [api, productPrice]);


    const handleSubmit = async (event) => {

        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            setCardError(error.message)
        } else {
            setCardError("")
        }
    }

    return (
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
            <div className='flex justify-between'>
                <div className='mt-4'>
                    <p className='text-red-400 ml-0 '>{cardError}</p>
                </div>
                <div className='flex justify-end'>
                    <button className='btn btn-sm btn-primary mt-4 ' type="submit" disabled={!stripe}>
                        Pay
                    </button>

                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;