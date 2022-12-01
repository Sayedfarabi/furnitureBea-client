import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import LimitCategories from '../LimitCategories/LimitCategories';
import LimitAdvertisement from '../LimitAdvertisement/LimitAdvertisement';
import { useQuery } from '@tanstack/react-query';
import { AppContext } from '../../../App';
import Loading from '../../../Components/Loading/Loading';


const Home = () => {
    const { api } = useContext(AppContext);

    const { data: productsData = [], isLoading } = useQuery({
        queryKey: ["advertisement", api],
        queryFn: async () => {
            const res = await fetch(`${api}/advertisement`);
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const products = productsData.data;
    const haveProducts = products.length === 0;
    // console.log(haveProducts, products.length);


    return (
        <div>
            <Banner></Banner>
            <LimitCategories></LimitCategories>
            <div className={haveProducts && "hidden"}>
                <LimitAdvertisement
                    products={products}
                >
                </LimitAdvertisement>
            </div>

        </div>
    );
};

export default Home;