import React, { useContext } from 'react';
import { DashboardContext } from '../../Layout/DashboardLayout/DashboardLayout';
import Loading from '../Loading/Loading';

const UserInfo = () => {
    const { dashboardDbUser, isLoading } = useContext(DashboardContext);

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(dashboardDbUser);

    return (
        <div className='my-8'>
            <div>
                <div className='flex justify-center'>
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img className='mx-auto' src={dashboardDbUser?.image} alt='UserImage' />
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='text-center text-xl'>{dashboardDbUser?.name} <span className='ml-2'>{`(${dashboardDbUser?.userRole})`}</span></p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;