import React, { useContext } from 'react';
import { AppContext } from '../../../../App';

const ProductTable = ({ action1, action2, inStock, title, url, handleAction1, handleAction2 }) => {

    return (

        <tbody>

            <tr>
                <td>

                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </td>
                <td className='text-xl font-light'>
                    <div>
                        {title}
                    </div>
                </td>

                <td className='text-xl font-light'>
                    <div> {inStock}</div>
                </td>
                <td className='text-xl font-light'>
                    <button onClick={handleAction1} className="btn btn-sm btn-primary">{action1}</button>
                </td>
                <td className='text-xl font-light'>
                    <button onClick={handleAction2} className="btn btn-sm">{action2}</button>
                </td>
            </tr>

        </tbody>

    );
};

export default ProductTable;