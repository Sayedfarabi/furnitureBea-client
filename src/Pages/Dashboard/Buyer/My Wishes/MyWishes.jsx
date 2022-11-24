import React, { useContext } from 'react';
import { AppContext } from '../../../../App';

const MyWishes = () => {
    const { Button } = useContext(AppContext);
    return (
        <div>
            <h1 className='text-3xl text-secondary text-center underline my-4'>Your Wish List</h1>

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
                    <tbody>

                        <tr>
                            <td>
                                <div>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-xl font-light'>
                                <div>
                                    Used Bed
                                </div>
                            </td>

                            <td className='text-xl font-light'>
                                <div> $ <span>1000</span></div>
                            </td>
                            <td className='text-xl font-light'>
                                <Button>Order</Button>
                            </td>
                        </tr>









                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyWishes;