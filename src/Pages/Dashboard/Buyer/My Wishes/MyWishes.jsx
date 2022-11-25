import React from 'react';

import ProductTable from '../../Components/Product Table/ProductTable';

const MyWishes = () => {

    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>Your Wishes List</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Product Image</th>
                            <th className='font-semibold text-xl'>Product Title</th>
                            <th className='font-semibold text-xl'>Price</th>
                            <th className='font-semibold text-xl'>Action</th>
                        </tr>
                    </thead>
                    <ProductTable
                        action={"Order"}
                    ></ProductTable>

                </table>
            </div>
        </div>
    );
};

export default MyWishes;