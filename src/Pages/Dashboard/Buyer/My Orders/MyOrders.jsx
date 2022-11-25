import React from 'react';
import ProductTable from '../../Components/Product Table/ProductTable';

const MyOrders = () => {

    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>Your Orders</h1>

            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full text-center lg:mx-3">

                    <thead>
                        <tr>

                            <th className='font-semibold text-xl'>Product Image</th>
                            <th className='font-semibold text-xl'>Product Title</th>
                            <th className='font-semibold text-xl'>Price</th>
                            <th className='font-semibold text-xl'>Payment Status</th>
                        </tr>
                    </thead>

                    <ProductTable
                        action={"Pay"}
                    ></ProductTable>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;