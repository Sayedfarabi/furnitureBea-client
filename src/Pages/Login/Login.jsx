import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';

const Login = () => {
    const { signIn, signInWithGoogle, loading } = useContext(AuthContext);
    const [signInError, setSignInError] = useState();
    const [dbLoading, setDbLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const api = process.env.REACT_APP_db_url;
    const userAddToDbUrl = `${api}/userAddToDb`;
    const getTokenUrl = `${api}/getToken`;
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleSignIn = data => {
        setDbLoading(true)
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                setSignInError("")
                toast.success("Sign in success")

                // Get token from Database

                const userEmail = {
                    email: email
                }
                fetch(getTokenUrl, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.success) {
                            const token = result.token;
                            toast.success(result.message)
                            localStorage.setItem("furnitureBea-token", token)
                            navigate(from, { replace: true });
                            setDbLoading(false)
                        } else {
                            toast.error(result.message)
                        }
                    })
            })
            .catch(error => {
                console.log(error)
                setSignInError(error.message)
                toast.error(error.message)
            })
    }

    const googleHandler = () => {
        setDbLoading(true)
        signInWithGoogle()
            .then(result => {
                setSignInError("")
                toast.success("Sign in success")
                const user = result.user;
                console.log(user);

                // Get user data from Auth
                const {
                    displayName,
                    email,
                    photoURL
                } = user;

                // Create User Data to add Database
                const userData = {
                    name: displayName,
                    email: email,
                    image: photoURL,
                    userRole: "buyer"

                }

                // User Data Add to Database
                fetch(userAddToDbUrl, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(result => {
                        const userEmail = {
                            email: email
                        }
                        if (result.success) {
                            toast.success(result.message)

                            // Get GWT Token from Database
                            fetch(getTokenUrl, {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userEmail)
                            })
                                .then(res => res.json())
                                .then(result => {
                                    // console.log(result)
                                    if (result.success) {
                                        const token = result.token;
                                        toast.success(result.message)
                                        localStorage.setItem("furnitureBea-token", token)
                                        navigate(from, { replace: true });
                                        setDbLoading(false)
                                    } else {
                                        toast.error(result.message)
                                    }
                                })
                        }
                    })


            })
            .catch(error => {
                setSignInError(error.message)
                toast.error(error.message)
            })
    }


    if (dbLoading || loading) {
        return <Loading></Loading>
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
                                    <small>Haven't an account ? Please go to <Link to={"/signup"}><span className='text-blue-500 underline'>Sign up</span></Link></small>
                                </label>

                                <div className="flex flex-col w-full border-opacity-50">

                                    <div className="divider">OR</div>

                                </div>

                                <label className="label mx-auto">
                                    <button onClick={googleHandler} className='btn btn-outline btn-primary btn-sm rounded-md'>Sign in with Google</button>
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