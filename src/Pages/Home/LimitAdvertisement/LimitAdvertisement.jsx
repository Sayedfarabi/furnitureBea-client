// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AppContext } from '../../../App';
// import Loading from '../../../Components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ProductCard from '../../Products/ProductCard/ProductCard';


const LimitAdvertisement = ({ products }) => {
    const { api } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null)
    const { register, handleSubmit } = useForm();

    // const { data: productsData = [], isLoading } = useQuery({
    //     queryKey: ["advertisement", api],
    //     queryFn: async () => {
    //         const res = await fetch(`${api}/advertisement`);
    //         const data = res.json();
    //         return data;
    //     }
    // })

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    // const products = productsData.data;
    // console.log(products);

    const handleModal = data => {
        data.productId = modalData._id;
        // console.log(data)
        if (data) {
            fetch(`${api}/addBooking`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        setModalData(null)
                        toast.success(result.message)
                    } else {
                        toast.error(result.message)
                    }
                })
        }
    }




    return (
        <div className='my-8 mx-4 md:mx-8'>
            <h3 className='text-3xl text-primary text-center my-3'>Advertisement</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4'>
                {
                    products.map(product => {
                        return <ProductCard
                            key={product._id}
                            product={product}
                            setModalData={setModalData}>
                        </ProductCard>
                    })
                }
            </div>

            {
                modalData &&
                <>
                    <input type="checkbox" id="book-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <div className='mb-4'>
                                <h3 className='text-center font-semibold text-3xl '>Product Booking</h3>
                            </div>

                            <div className=" w-full bg-base-200">
                                <div className="hero-content">

                                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">



                                        <form onSubmit={handleSubmit(handleModal)} className="card-body">

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Buyer Name :</span>
                                                </label>
                                                <input {...register("buyerName", { required: true })} type="text" className="input input-bordered" defaultValue={user?.displayName} readOnly required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Buyer Email :</span>
                                                </label>
                                                <input {...register("buyerEmail", { required: true })} type="email" className="input input-bordered" defaultValue={user?.email} readOnly required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Product Name :</span>
                                                </label>
                                                <input {...register("productName", { required: true })} type="text" className="input input-bordered" defaultValue={modalData?.productName} readOnly required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Product Price :</span>
                                                </label>
                                                <input {...register("productPrice", { required: true })} type="text" className="input input-bordered" defaultValue={modalData?.resalePrice} readOnly required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Phone Number :</span>
                                                </label>
                                                <input {...register("phoneNumber", { required: true })} type="number" placeholder="Enter your phone number" className="input input-bordered" />

                                            </div>

                                            <div className="form-control">
                                                <label className="label font-semibold">
                                                    <span className="label-text">Meeting Location :</span>
                                                </label>
                                                <input {...register("location", { required: true })} type="text" placeholder="Enter your meeting location" className="input input-bordered" />

                                            </div>


                                            <div className='form-control mt-6'>
                                                <div className='flex justify-between items-center'>
                                                    <div>
                                                        <label
                                                            onClick={() => setModalData(null)}
                                                            htmlFor="book-modal"
                                                            className="btn btn-sm">
                                                            Cancel
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input className='btn btn-sm btn-primary' type="submit" value="Confirm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default LimitAdvertisement;