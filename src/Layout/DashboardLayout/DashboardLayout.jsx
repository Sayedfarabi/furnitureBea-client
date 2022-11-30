import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import UserInfo from '../../Components/UserInfo/UserInfo';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DashboardMenuBars from '../../Pages/Dashboard/Components/Dashboard Menu Bars/DashboardMenuBars';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

export const DashboardContext = createContext()

const DashboardLayout = () => {
    const api = process.env.REACT_APP_db_url;
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    // console.log(email);


    const { data: dashboardUser = {}, isLoading } = useQuery({
        queryKey: [user, api, email],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/user?email=${email}`);
                const data = res.json();
                return data

            } catch (error) {
                console.log(error);
            }
        }
    })

    if (loading && isLoading) {
        return <Loading></Loading>
    }

    const dashboardDbUser = dashboardUser?.data;

    const dashboardInfo = {
        dashboardDbUser,
        isLoading
    }




    return (
        <div>
            <DashboardContext.Provider value={dashboardInfo}>
                <Navbar></Navbar>
                <div className='md:flex'>
                    <div className='md:w-1/5 md:border border-primary'>
                        <div>
                            <h4 className="sm:text-4xl text-3xl underline text-primary text-center mt-4">


                                <Link to={"/dashboard"}>Dashboard Menu</Link>

                            </h4>
                        </div>

                        <div>
                            <UserInfo></UserInfo>
                        </div>

                        <div>
                            <DashboardMenuBars></DashboardMenuBars>
                        </div>
                    </div>

                    <div className='md:w-4/5 min-h-screen mx-auto border border-dotted border-secondary'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </DashboardContext.Provider>
        </div>
    );
};

export default DashboardLayout;