import React, { useContext } from 'react';
import { AppContext } from '../../../App';

const LimitAdvertisementCard = ({ advertisement }) => {
    const { Button } = useContext(AppContext);
    const { image, title, condition, body, sellerName, phone, price } = advertisement;
    return (
        <div className='mx-auto my-3'>
            <div className="card w-96 bg-base-100 shadow-xl">

                <figure><img src={image} alt="Furniture" className='border w-96 h-80' /></figure>

                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{condition}</div>
                    </h2>
                    <p>Description : {body}</p>

                    <div>
                        <p>Price : {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div>
                            <button className='btn btn-sm bg-lime-600'>Wish</button>
                        </div>
                        <div>
                            <Button>Add to Order</Button>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between items-center mx-4 py-2'>
                    <p>Seller : {sellerName}</p>
                    <p>Phone : {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default LimitAdvertisementCard;