import React from 'react';
import UserTable from '../../Components/User Table/UserTable';

const AllSellers = () => {
    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>All Seller Data and Status</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Seller Image</th>
                            <th className='font-semibold text-xl'>Seller Name</th>
                            <th className='font-semibold text-xl'>Seller Email</th>
                            <th className='font-semibold text-xl'>Verified</th>
                            <th className='font-semibold text-xl'>Action</th>
                        </tr>
                    </thead>

                    <UserTable
                        verified={"Pending"}
                        action={"Delete"}
                    >
                    </UserTable>



                </table>
            </div>
        </div>
    );
};

export default AllSellers;