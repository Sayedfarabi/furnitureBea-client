import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

const CategoryCard = ({ category }) => {
    const { categoryName, description, image } = category;
    const { Button } = useContext(AppContext)
    return (
        <div>
            <div className='mx-auto my-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Furniture" className="rounded-xl w-24 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{categoryName}</h2>
                        <p>{description}</p>
                        <div className="card-actions">
                            <Button><Link to={`/category/${category._id}`}>See Products</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;