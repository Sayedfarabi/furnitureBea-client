import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardMenuBars from '../../Pages/Dashboard/Components/Dashboard Menu Bars/DashboardMenuBars';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:flex'>
                <div className='md:w-1/5 md:border border-primary'>
                    <div>
                        <h4 className="text-3xl underline text-primary text-center mt-4">
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </h4>
                    </div>

                    <div>
                        <DashboardMenuBars></DashboardMenuBars>
                    </div>
                </div>

                <div className='md:w-4/5 min-h-screen border border-dotted border-secondary'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;