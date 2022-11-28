import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Loading from '../../Components/Loading/Loading';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = () => {
    const { api, setCategoriesRefetch } = useContext(AppContext);
    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ["categories", api],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/categories`);
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)

            }

        }
    })


    setCategoriesRefetch(refetch)


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-8 mx-4 md:mx-8'>
            <h3 className='text-3xl text-primary text-center my-3'>Furniture Categories</h3>
            <div className='mx-auto grid md:grid-cols-3 md:gap-3'>
                {
                    categories &&
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    >
                    </CategoryCard>)
                }
            </div>
        </div>
    )

};

export default Categories;