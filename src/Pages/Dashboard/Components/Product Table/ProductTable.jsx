import React, { useContext } from 'react';
import { AppContext } from '../../../../App';

const ProductTable = ({ action }) => {
    const { Button } = useContext(AppContext);
    return (

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
                    <Button>{action}</Button>
                </td>
            </tr>

        </tbody>

    );
};

export default ProductTable;