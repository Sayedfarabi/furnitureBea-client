import React from 'react';
import Button from '../../../Components/Button/Button';

const ProductCard = () => {

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <figure><img src={"image"} alt="Furniture" className='border w-96 h-80' /></figure>

                <div className="card-body">
                    <h2 className="card-title">
                        title
                        <span className="badge badge-secondary">Condition</span>
                    </h2>
                    <div>
                        <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia odio facere blanditiis a velit eos cum laborum impedit assumenda libero? Odit praesentium magni quas?
                        </p>
                    </div>
                    <div>
                        <p>Year of Used : 2 Years</p>
                    </div>

                    <div>
                        <p>Original Price : Price</p>
                    </div>
                    <div>
                        <p>Re-Sale Price : Price</p>
                    </div>
                    <div>
                        <p>Seller Name : Ashik</p>
                    </div>
                    <div>
                        <p>Location : Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <p>Posted Time : 01:38 PM</p>
                    </div>
                    <div>
                        <p>Posted Date : 29/11/2022</p>
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

            </div>
        </div>
    );
};

export default ProductCard;