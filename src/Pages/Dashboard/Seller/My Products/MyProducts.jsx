import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../../Components/Loading/Loading';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';
import ProductTable from '../../Components/Product Table/ProductTable';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { api, dashboardDbUser } = useContext(DashboardContext);
    console.log(dashboardDbUser);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["myProducts", api, dashboardDbUser],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/myProducts?email=${dashboardDbUser?.email}`, {
                    headers: {
                        "content-type": "application/json",
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
    const products = myProducts?.data;

    // Delete Product Function

    const productDeleteHandler = (id) => {
        if (id) {

            fetch(`${api}/productDelete?id=${id}`, {
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

    // Add to Advertisement Function 

    const productAddToAdvertisement = id => {
        if (id) {
            fetch(`${api}/productAddToAdvertisement?id=${id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                }

            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        refetch()
                        toast.success(result?.message)
                    } else {
                        toast.error(result.message)
                    }

                })
        }
    }


    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>My Products</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Product Image</th>
                            <th className='font-semibold text-xl'>Product Title</th>
                            <th className='font-semibold text-xl'>Sales Status</th>
                            <th className='font-semibold text-xl'>Advertisement</th>
                            <th className='font-semibold text-xl'>Action</th>
                        </tr>
                    </thead>

                    {
                        products &&
                        products.map(product => {
                            return <ProductTable
                                key={product?._id}
                                id={product?._id}
                                url={product?.productImage}
                                title={product?.productName}
                                inStock={product?.inStock}
                                action1={"Add"}
                                action2={"Delete"}
                                handleAction1={productAddToAdvertisement}
                                handleAction2={productDeleteHandler}
                            ></ProductTable>
                        })
                    }




                </table>
            </div>
        </div>
    );
};

export default MyProducts;