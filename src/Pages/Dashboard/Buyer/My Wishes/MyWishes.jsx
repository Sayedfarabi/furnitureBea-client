import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../../../Components/Loading/Loading';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';

import ProductTable from '../../Components/Product Table/ProductTable';

const MyWishes = () => {
    const { api, dashboardDbUser } = useContext(DashboardContext);
    const [modalData, setModalData] = useState(null);
    const { register, handleSubmit } = useForm();
    const { data: wishProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["/wishes", api, dashboardDbUser],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/wishes?email=${dashboardDbUser?.email}`, {
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    },
                });
                const data = res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const wishDeleteHandler = (id) => {
        if (id) {

            fetch(`${api}/wishDelete?id=${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                }

            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        refetch()
                        toast.success("This product is deleted")
                    }

                })

        }
    }

    const handleModal = data => {
        data.inStock = modalData?.inStock;
        data.productImage = modalData?.productImage;
        data.productId = modalData?._id;
        console.log(data)
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

    const modalOpen = true;
    const products = wishProducts?.data;
    console.log(modalData)

    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>Your Wishes List</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Product Image</th>
                            <th className='font-semibold text-xl'>Product Title</th>
                            <th className='font-semibold text-xl'>In Stock</th>
                            <th className='font-semibold text-xl'>Action</th>
                            <th className='font-semibold text-xl'>Delete</th>
                        </tr>
                    </thead>

                    {
                        products &&
                        products.map(product => {
                            return <ProductTable
                                key={product?._id}
                                modalOpen={modalOpen}
                                product={product}
                                id={product?._id}
                                url={product?.productImage}
                                title={product?.productName}
                                inStock={product?.inStock}
                                action1={"Order"}
                                action2={"Delete"}
                                handleAction1={setModalData}
                                handleAction2={wishDeleteHandler}
                            ></ProductTable>
                        })
                    }

                </table>
                <>
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
                                                        <input {...register("buyerName", { required: true })} type="text" className="input input-bordered" defaultValue={dashboardDbUser?.name} readOnly required />
                                                    </div>

                                                    <div className="form-control">
                                                        <label className="label font-semibold">
                                                            <span className="label-text">Buyer Email :</span>
                                                        </label>
                                                        <input {...register("buyerEmail", { required: true })} type="email" className="input input-bordered" defaultValue={dashboardDbUser?.email} readOnly required />
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
                </>
            </div>
        </div>
    );
};
export default MyWishes;