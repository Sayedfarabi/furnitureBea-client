import React, { useContext } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { AppContext } from '../../../App';
import toast from 'react-hot-toast';

const ProductCard = ({ product, setModalData }) => {
    const { dbUser, api } = useContext(AppContext);
    const { productImage, productName, condition, description, location, originalPrice, postedDate, postedTime, resalePrice, sellerName, yearsOfUsedProduct, _id } = product;

    // console.log(dbUser);
    const handlerWish = () => {
        const wishData = {
            name: dbUser?.name,
            email: dbUser?.email,
            productId: _id,
            productName
        }

        if (wishData) {
            fetch(`${api}/addWish`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(wishData)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result.message)
                    } else {
                        toast.error(result.message)
                    }

                    // continue ...
                })
        }
    }

    return (
        <div className='mx-auto mb-8'>
            <div className="card w-96 bg-base-100 shadow-xl">

                <figure><img src={productImage} alt="Furniture" className='border w-96 h-80' /></figure>

                <div className="card-body">
                    <div className="card-title flex justify-between items-center">
                        <div>
                            {productName}
                        </div>
                        <div>
                            <span className="badge badge-secondary">{condition}</span>
                        </div>
                    </div>

                    <div>
                        <p><span className='font-semibold'>Description : </span> <span>{description}</span></p>

                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Year of Used : </span>
                            <span>{yearsOfUsedProduct}</span>
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Original Price : $</span>
                            <span>{originalPrice}</span>
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Re-Sale Price : $</span>
                            <span>{resalePrice}</span>
                        </p>
                    </div>

                    <div className='flex'>
                        <div className='flex'>
                            <div>
                                <p className='font-semibold'>Seller Name :</p>
                            </div>
                            <div className='flex items-center ml-2'>
                                <CheckCircleIcon className='w-4' />
                            </div>
                            <div className='ml-1'>
                                {sellerName}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Location :</span>
                            <span>{location}</span>
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Posted Time :</span>
                            <span>{postedTime}</span>
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className='font-semibold'>Posted Date :</span>
                            <span>{postedDate}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end">

                        <div className='ml-2'>
                            <label
                                htmlFor="wish-modal"
                                className="btn btn-sm bg-lime-600"
                                onClick={handlerWish}
                            >Wish</label>
                        </div>
                        <div>
                            <label
                                htmlFor="book-modal"
                                className="btn btn-sm btn-primary"
                                disabled={!dbUser?.verified}
                                onClick={() => setModalData(product)}
                            > Book Now
                            </label>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default ProductCard;