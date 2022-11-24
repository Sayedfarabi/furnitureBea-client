import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='rounded-lg' to={"/home"}>Home</Link></li>
                        <li><Link className='rounded-lg' to={"/categories"}>Categories</Link></li>
                        <li><Link className='rounded-lg' to={"/advertisement"}>Advertisement</Link></li>
                        <li><Link className='rounded-lg' to={"/blog"}>Blog</Link></li>
                        <li><Link className='rounded-lg' to={"/dashboard"}>Dashboard</Link></li>
                    </ul>
                </div>
                <Link to={""} className="btn btn-ghost normal-case text-3xl text-primary">Furniture<span className='text-secondary'>Bea</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='rounded-lg' to={"/home"}>Home</Link></li>
                    <li><Link className='rounded-lg' to={"/categories"}>Categories</Link></li>
                    <li><Link className='rounded-lg' to={"/advertisement"}>Advertisement</Link></li>
                    <li><Link className='rounded-lg' to={"/blog"}>Blog</Link></li>
                    <li><Link className='rounded-lg' to={"/dashboard"}>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"}>
                    <button className='btn btn-sm btn-primary text-secondary mx-2'>Log in</button>
                </Link>
                <Link to={"/signup"}>
                    <button className='btn btn-sm btn-secondary text-primary mx-2'>Sign up</button>
                </Link>
                <Link to={""}>
                    <button className='btn btn-sm btn-accent mx-2'>Log out</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;