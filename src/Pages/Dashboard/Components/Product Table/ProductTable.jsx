import React, { useContext } from 'react';
import { DashboardContext } from '../../../../Layout/DashboardLayout/DashboardLayout';

const ProductTable = ({ action1, action2, inStock, title, url, handleAction1, handleAction2, id, modalOpen, product }) => {

    const { dashboardDbUser } = useContext(DashboardContext);
    // console.log(id);

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
                    {
                        modalOpen && inStock === "available" ?
                            <label
                                htmlFor="book-modal"
                                className="btn btn-sm btn-primary"
                                onClick={() => handleAction1(product)}
                            > {action1}
                            </label>
                            :
                            <button onClick={() => handleAction1(id)} className="btn btn-sm btn-primary" >
                                {action1}
                            </button>
                    }
                </td>
                <td className='text-xl font-light'>
                    <button onClick={() => handleAction2(id)} className="btn btn-sm">{action2}</button>
                </td>
            </tr>

        </tbody>

    );
};

export default ProductTable;