import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductTable from '../../Components/Product Table/ProductTable';
import Loading from '../../../../Components/Loading/Loading';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const { api, dashboardDbUser } = useContext(DashboardContext);
    const navigate = useNavigate();

    const { data: bookingProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["/booking", api, dashboardDbUser],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/booking?email=${dashboardDbUser?.email}`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    }
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
    const products = bookingProducts?.data;
    // console.log(products)

    const bookingDeleteHandler = (id) => {
        if (id) {

            fetch(`${api}/bookingDelete?id=${id}`, {
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


    const moveToPayment = id => {
        navigate(`/dashboard/payment/${id}`)
    }

    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>My Orders</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Product Image</th>
                            <th className='font-semibold text-xl'>Product Title</th>
                            <th className='font-semibold text-xl'>In Stock</th>
                            <th className='font-semibold text-xl'>Payment Status</th>
                            <th className='font-semibold text-xl'>Delete</th>
                        </tr>
                    </thead>

                    {

                        products.map(product => {
                            // console.log(product);
                            return <ProductTable
                                key={product?._id}
                                id={product?._id}
                                url={product?.productImage}
                                title={product?.productName}
                                inStock={product?.inStock}
                                action1={"Pay"}
                                action2={"Delete"}
                                handleAction1={moveToPayment}
                                handleAction2={bookingDeleteHandler}
                            ></ProductTable>
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default MyOrders;