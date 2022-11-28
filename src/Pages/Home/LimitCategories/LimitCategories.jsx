import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

import LimitCategoryCard from './LimitCategoryCard';


const LimitCategories = () => {
    const { categories } = useContext(AppContext)


    return (
        <div className='my-8 mx-4 md:mx-8'>
            <h3 className='text-3xl text-primary text-center my-3'>Furniture Categories</h3>
            <div className='mx-auto grid md:grid-cols-3 md:gap-3'>
                {
                    categories.map(category => {
                        return <LimitCategoryCard
                            key={category._id}
                            category={category}>
                        </LimitCategoryCard>
                    })
                }
            </div>
            <div className='flex justify-center my-5'>
                <div>
                    <button className='btn btn-xs bg-indigo-500'><Link to={"/categories"}>More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default LimitCategories;