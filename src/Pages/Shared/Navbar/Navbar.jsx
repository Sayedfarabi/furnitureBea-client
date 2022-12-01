import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                navigate("/")
                toast.success("user already log out")

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='rounded-lg font-semibold text-primary' to={"/home"}>Home</Link></li>
                        <li><Link className='rounded-lg font-semibold text-primary' to={"/categories"}>Categories</Link></li>
                        <li><Link className='rounded-lg font-semibold text-primary' to={"/blog"}>Blog</Link></li>
                        <li><Link className='rounded-lg font-semibold text-primary' to={"/dashboard"}>Dashboard</Link></li>
                    </ul>
                </div>
                <Link to={""} className="btn btn-ghost normal-case text-3xl text-primary">Furniture<span className='text-secondary'>Bea</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='rounded-lg font-semibold text-primary' to={"/home"}>Home</Link></li>
                    <li><Link className='rounded-lg font-semibold text-primary' to={"/categories"}>Categories</Link></li>
                    <li><Link className='rounded-lg font-semibold text-primary' to={"/blog"}>Blog</Link></li>
                    {
                        user?.uid &&
                        <li><Link className='rounded-lg font-semibold text-primary' to={"/dashboard"}>Dashboard</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !user?.uid &&
                    <button className='btn btn-sm btn-primary text-secondary mx-2'>
                        <Link to={"/login"}>
                            Log in
                        </Link>
                    </button>
                }

                {
                    !user?.uid &&
                    <button className='btn btn-sm btn-secondary text-primary mx-2'>
                        <Link to={"/signup"}>
                            Sign up
                        </Link>
                    </button>
                }

                {
                    user?.uid &&
                    <button onClick={handleLogOut} className='btn btn-sm btn-accent mx-2'>
                        <Link to={""}>
                            Log out
                        </Link>
                    </button>
                }



            </div>
        </div>
    );
};

export default Navbar;