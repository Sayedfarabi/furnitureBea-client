import React from 'react';


const UserTable = ({ action, verified, handleAction, handleAction2, image, name, email }) => {


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
                    <div>{email}</div>
                </td>

                <td className='text-xl font-light'>
                    <button onClick={() => handleAction2(email)} className='btn btn-sm btn-primary'>{!verified ? "pending" : "verified"}</button>
                </td>

                <td className='text-xl font-light'>
                    <button onClick={() => handleAction(email)} className="btn btn-sm">{action}</button>
                </td>
            </tr>


        </tbody>
    );
};

export default UserTable;