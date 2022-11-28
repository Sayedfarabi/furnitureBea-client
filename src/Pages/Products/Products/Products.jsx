import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center text-primary'>This category products</h1>
            </div>
            <div>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default Products;