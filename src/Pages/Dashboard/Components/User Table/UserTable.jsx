import React from 'react';


const UserTable = ({ action, verified, handleAction, image, name }) => {


    return (
        <tbody>

            <tr>
                <td>
                    <div>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td className='text-xl font-light'>
                    <div>
                        {name}
                    </div>
                </td>

                <td className='text-xl font-light'>
                    <div>akash123@gmail.com</div>
                </td>
                <td className='text-xl font-light'>
                    <button className='btn btn-sm btn-primary'>{verified}</button>
                </td>
                <td className='text-xl font-light'>
                    <button onClick={handleAction} className="btn btn-sm">{action}</button>
                </td>
            </tr>

        </tbody>
    );
};

export default UserTable;