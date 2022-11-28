import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
    const { categories } = useContext(AppContext)
    return (
        <div>
            <h3 className='text-3xl text-primary text-center my-3'>Furniture Categories</h3>
            <div className='mx-auto grid md:grid-cols-3 md:gap-3'>
                {
                    categories.map(category => {
                        return <CategoryCard
                            key={category._id}
                            category={category}
                        >
                        </CategoryCard>
                    })
                }
            </div>

        </div>
    );
};

export default Categories;