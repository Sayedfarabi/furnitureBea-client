import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import LimitAdvertisement from '../LimitAdvertisement/LimitAdvertisement';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <LimitAdvertisement></LimitAdvertisement>
        </div>
    );
};

export default Home;