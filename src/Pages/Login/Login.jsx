import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [signInError, setSignInError] = useState();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm()


    const handleSignIn = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                setSignInError("")
                toast.success("Sign in success")
            })
            .catch(error => {
                console.log(error)
                setSignInError(error.message)
                toast.error(error.message)
            })
    }
    const googleHandler = () => {
        signInWithGoogle()
            .then(result => {
                setSignInError("")
                console.log(result.user);
                toast.success("Sign in success")
            })
            .catch(error => {
                setSignInError(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div style={{ minHeight: "75vh" }}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700 text-center">Login now!</h1>
                        <div className='max-w-sm sm:w-2/3 my-3 mx-auto'>
                            <img className='w-full rounded-full' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input {...register('password', { required: true })} type="password" name='password' placeholder="Enter password" className="input input-bordered w-full" />


                                <label className="label">
                                    <Link to={""} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                                <label className="label mx-auto">
                                    <button onClick={googleHandler} className='btn btn-outline btn-primary btn-sm rounded-md'>Sign in with Google</button>
                                </label>

                                <label className="label">
                                    <small>Haven't an account ? Please go to <Link to={"/signup"}><span className='text-blue-500 underline'>Sign up</span></Link></small>
                                </label>
                            </div>

                            <div>
                                <p className='text-red-400 text-center'>{signInError}</p>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-primary w-full' value="Sign in" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;