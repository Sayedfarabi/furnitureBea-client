import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product, setModalData }) => {
    const { productImage, productName, condition, description, location, originalPrice, postedDate, postedTime, resalePrice, sellerName, yearsOfUsedProduct } = product;

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

                    <div className="card-actions justify-between">
                        <div>
                            <button className='btn btn-sm bg-lime-600'>Wish</button>
                        </div>
                        <div>
                            {/* <Button>Add to Order</Button> */}
                            <label
                                htmlFor="book-modal"
                                className="btn btn-sm btn-primary"
                                onClick={() => setModalData(product)}
                            >Book Now</label>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default ProductCard;