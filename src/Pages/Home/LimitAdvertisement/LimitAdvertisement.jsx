import React from 'react';
import LimitAdvertisementCard from './LimitAdvertisementCard';

const LimitAdvertisement = () => {
    const advertisements = [
        {
            _id: "01",
            sellerName: "Abul",
            phone: "01710000000",
            image: "https://image.made-in-china.com/155f0j00sjBQyNZaMLRd/2020-Modern-Design-New-Model-Free-Used-Italian-Kitchen-Cabinet-Design-Wholesale.jpg",
            title: "Kitchen Room Furniture",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto.",
            condition: "Good",
            price: "1000"
        },
        {
            _id: "02",
            sellerName: "Kalam",
            phone: "01710000000",
            image: "https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp",
            title: "Drawing Room Furniture",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto.",
            condition: "Good",
            price: "1000"
        },
        {
            _id: "03",
            sellerName: "Azad",
            phone: "01710000000",
            image: "https://i.pinimg.com/474x/80/65/40/806540ec53500d8d70c82694ca507196.jpg",
            title: "Bed Room Furniture",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto.",
            condition: "Good",
            price: "1000"
        },
    ]

    return (
        <div className='my-8 mx-4 md:mx-8'>
            <h3 className='text-3xl text-primary text-center my-3'>Advertisement</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4'>
                {
                    advertisements.map(advertisement => {
                        return <LimitAdvertisementCard
                            key={advertisement._id}
                            advertisement={advertisement}
                        ></LimitAdvertisementCard>
                    })
                }
            </div>
        </div>
    );
};

export default LimitAdvertisement;