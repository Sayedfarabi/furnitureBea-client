import React, { useContext } from 'react';
import { AppContext } from '../../../App';

import LimitCategoryCard from './LimitCategoryCard';


const LimitCategories = () => {
    const { categories } = useContext(AppContext)


    const LimitCategoriesData = [
        {
            _id: "01",
            title: "Bedroom Furniture",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam.",
            img: "https://uxwing.com/double-bed-icon/"
        },
        {
            _id: "01",
            title: "Drawing Furniture",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam.",
            img: "https://freesvg.org/sofa"
        },
        {
            _id: "01",
            title: "Kitchen Furniture",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam.",
            img: "https://www.flaticon.com/free-icon/kitchen_2237462"
        },
    ]

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
        </div>
    );
};

export default LimitCategories;