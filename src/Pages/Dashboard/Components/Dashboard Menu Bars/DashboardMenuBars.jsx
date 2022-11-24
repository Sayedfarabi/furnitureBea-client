import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';


const DashboardMenuBars = () => {
    return (
        <div>
            <div className='grid md:grid-cols-1 grid-cols-3 text-center md:text-left my-6 md:ml-2'>
                <div className="dropdown dropdown-hover my-2">
                    <label tabIndex={0} className="text-xl text-primary cursor-pointer">
                        <ChevronDoubleRightIcon className='w-5 text-indigo-400 hidden md:inline-flex'></ChevronDoubleRightIcon>
                        Buyer
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-secondary'><Link to={"/dashboard/myOrders"}>My Orders</Link></li>
                        <li className='text-secondary'><Link to={"/dashboard/myWishes"}>My Wishes</Link></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover my-2">
                    <label tabIndex={0} className="text-xl text-primary cursor-pointer">
                        <ChevronDoubleRightIcon className='w-5 text-indigo-400 hidden md:inline-flex'></ChevronDoubleRightIcon>
                        Seller
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-secondary'><Link to={"/dashboard/myProducts"}>My Products</Link></li>
                        <li className='text-secondary'><Link to={"/dashboard/addProducts"}>Add Products</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover my-2">
                    <label tabIndex={0} className="text-xl text-primary cursor-pointer">
                        <ChevronDoubleRightIcon className='w-5 text-indigo-400 hidden md:inline-flex'></ChevronDoubleRightIcon>
                        Admin
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-secondary'><Link to={"/dashboard/allBuyers"}>All Buyers</Link></li>
                        <li className='text-secondary'><Link to={"/dashboard/allSellers"}>All Sellers</Link></li>
                        <li className='text-secondary'><Link to={"/dashboard/addCategory"}>Add Category</Link></li>
                        <li className='text-secondary'><Link to={"/dashboard/addAdmin"}>Add Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardMenuBars;