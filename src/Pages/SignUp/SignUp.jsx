import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700 text-center">Register Now !</h1>
                        <div className='max-w-sm sm:w-2/3 my-3 mx-auto'>
                            <img className='w-full' src="https://www.pngitem.com/pimgs/m/287-2874255_seller-registration-icon-class-register-icon-png-transparent.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name :</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Password :</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
                                </div>


                                <div>
                                    <fieldset className='input input-bordered mt-2'>

                                        <legend>Select a Role:</legend>

                                        <div className='flex justify-evenly items-center'>
                                            <div>
                                                <input className='mx-2' type="radio" id="buyer" name="role" value="buyer"
                                                    checked />
                                                <label for="buyer">Buyer</label>
                                            </div>

                                            <div>
                                                <input className='mx-2' type="radio" id="seller" name="role" value="seller" />
                                                <label htmlFor="seller">Seller</label>
                                            </div>
                                        </div>

                                    </fieldset>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Verified :</span>
                                    </label>
                                    <div className='flex items-center input input-bordered'>
                                        <input className='mx-2' type="checkbox" name='verify' id='false' value={false} checked disabled />
                                        <label htmlFor="false">False
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Photo (file) :</span>
                                    </label>
                                    <input type="file" name='photo' placeholder="Enter your photo URL" className="input input-bordered" />
                                </div>

                                <label className="label">
                                    <small>Have an account ? Please go to <Link to={"/login"}><span className='text-blue-500'>Log in</span></Link></small>
                                </label>
                            </div>

                            <div>
                                <p className='text-red-400 text-center'>Error message</p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;