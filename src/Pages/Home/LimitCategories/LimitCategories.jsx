import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';
import Loading from '../../../Components/Loading/Loading';

import LimitCategoryCard from './LimitCategoryCard';


const LimitCategories = () => {
    const { api } = useContext(AppContext);


    const { data: limitCategories = [], isLoading } = useQuery({
        queryKey: [api],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/`)
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-8 mx-4 md:mx-8'>
            <h3 className='text-3xl text-primary text-center my-3'>Furniture Categories</h3>
            <div className='mx-auto grid md:grid-cols-3 md:gap-3'>
                {
                    limitCategories.map(category => {
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