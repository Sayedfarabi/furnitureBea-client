import React, { useContext } from 'react';
import UserTable from '../../Components/User Table/UserTable';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../Components/Loading/Loading';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { api } = useContext(DashboardContext);
    const { data: allBuyer = [], isLoading, refetch } = useQuery({
        queryKey: ["allBuyer"],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/allBuyer`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = email => {

        fetch(`${api}/deleteUser?email=${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    refetch()
                    toast.success(`${email} user is deleted successfully`)
                } else {
                    toast.error(`${email} user is deleted failed`)
                }
            })
    }

    const handleVerified = email => {
        fetch(`${api}/verifyUser?email=${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
            },
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    refetch()
                    toast.success(`${email} user verify successfully`)
                } else {
                    toast.error(`${result.message} ${email} user verified `)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    const buyers = allBuyer.data;
    // console.log(buyers);




    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>All Buyer Data and Status</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Buyer Image</th>
                            <th className='font-semibold text-xl'>Buyer Name</th>
                            <th className='font-semibold text-xl'>Buyer Email</th>
                            <th className='font-semibold text-xl'>Verified</th>
                            <th className='font-semibold text-xl'>Action</th>
                        </tr>
                    </thead>

                    {
                        buyers &&
                        buyers.map(buyer => {
                            return <UserTable
                                image={buyer.image}
                                name={buyer?.name}
                                email={buyer.email}
                                verified={buyer?.verified}
                                action={"Delete"}
                                handleAction={handleDelete}
                                handleAction2={handleVerified}
                            >
                            </UserTable>
                        })
                    }



                </table>
            </div>
        </div>
    );
};

export default AllBuyers;