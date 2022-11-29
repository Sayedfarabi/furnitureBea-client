import React from 'react';
import Button from '../../../Components/Button/Button';

const ProductCard = ({ product }) => {
    const { productImage, productName, condition, description, location, originalPrice, postedDate, postedTime, resalePrice, sellerName, yearsOfUsedProduct } = product;

    return (
        <div className='mx-auto mb-8'>
            <div className="card w-96 bg-base-100 shadow-xl">

                <figure><img src={productImage} alt="Furniture" className='border w-96 h-80' /></figure>

                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                        <span className="badge badge-secondary">{condition}</span>
                    </h2>
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div>
                        <p>Year of Used : {yearsOfUsedProduct}</p>
                    </div>

                    <div>
                        <p>Original Price : <span>$</span>{originalPrice}</p>
                    </div>
                    <div>
                        <p>Re-Sale Price : <span>$</span>{resalePrice}</p>
                    </div>
                    <div>
                        <p>Seller Name : {sellerName}</p>
                    </div>
                    <div>
                        <p>Location : {location}</p>
                    </div>
                    <div>
                        <p>Posted Time : {postedTime}</p>
                    </div>
                    <div>
                        <p>Posted Date : {postedDate}</p>
                    </div>

                    <div className="card-actions justify-between">
                        <div>
                            <button className='btn btn-xs bg-red-600'>Report</button>
                        </div>
                        <div>
                            <button className='btn btn-xs bg-lime-600'>Wish</button>
                        </div>
                        <div>
                            <Button>Add to Order</Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductCard;