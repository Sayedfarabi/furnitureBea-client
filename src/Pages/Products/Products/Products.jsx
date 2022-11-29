// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { AppContext } from '../../../App';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const data = useLoaderData();
    const products = data?.products;
    console.log(products);



    return (
        <div>
            <div className='my-8'>
                <h1 className='text-4xl text-center text-primary underline'>Available Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    products &&
                    products.map(product => {
                        return <ProductCard
                            key={product._id}
                            product={product}>
                        </ProductCard>
                    })
                }
            </div>
        </div>
    );
};

export default Products;