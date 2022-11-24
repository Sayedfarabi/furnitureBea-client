import React, { useContext } from 'react';
import { AppContext } from '../../../App';


const LimitCategoryCard = ({ category }) => {
    const { Button } = useContext(AppContext)
    return (
        <div className='mx-auto my-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.pngwing.com/en/free-png-hwvhg" alt="Furniture" className="rounded-xl w-24 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category.title}</h2>
                    <p>{category.body}</p>
                    <div className="card-actions">
                        <Button>Explore more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitCategoryCard;