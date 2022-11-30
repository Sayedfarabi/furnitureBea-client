import React, { useContext } from 'react';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';

const ProductTable = ({ action1, action2, inStock, title, url, handleAction1, handleAction2, id }) => {

    const { dashboardDbUser } = useContext(DashboardContext);
    // console.log(dashboardDbUser);

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
                    <button onClick={() => handleAction1(id)} className="btn btn-sm btn-primary" disabled={dashboardDbUser?.verified}>
                        {action1}</button>
                </td>
                <td className='text-xl font-light'>
                    <button onClick={() => handleAction2(id)} className="btn btn-sm">{action2}</button>
                </td>
            </tr>

        </tbody>

    );
};

export default ProductTable;