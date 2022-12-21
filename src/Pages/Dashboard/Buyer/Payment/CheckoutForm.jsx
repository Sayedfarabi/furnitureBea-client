import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';

const CheckoutForm = ({ booking, setSuccess, setTransactionId }) => {
    const api = process.env.REACT_APP_db_url;
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const buyerName = booking?.data?.buyerName;
    const buyerEmail = booking?.data?.buyerEmail;
    const productId = booking?.data?.productId;
    const { productPrice } = booking?.data;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${api}/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
            },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
    }, [api, productPrice]);

    // console.log(clientSecret);

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

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        setSuccess("")
        setTransactionId("")

        if (confirmError) {
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }
        if (paymentIntent?.status === "succeeded") {
            setSuccess("Congrats! Your payment completed")
            setTransactionId(paymentIntent?.id)

            const paymentInfo = {
                status: paymentIntent?.status,
                transactionId: paymentIntent?.id,
                productId: productId,
                buyerName,
                buyerEmail
            }
            // console.log(paymentInfo);
            fetch(`${api}/payment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result?.message)
                    }
                })
        }
        // console.log("paymentIntent", paymentIntent);
        setProcessing(false)

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
                    <button className='btn btn-sm btn-primary mt-4 ' type="submit" disabled={!stripe || processing || !clientSecret}>
                        Pay
                    </button>
                </div>
            </div>

        </form>
    );
};

export default CheckoutForm;