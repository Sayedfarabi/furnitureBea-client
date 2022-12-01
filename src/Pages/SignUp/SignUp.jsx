import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';





const SignUp = () => {
    const { createUser, updateUser, loading, setLoading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const api = process.env.REACT_APP_db_url;
    const userAddToDbUrl = `${api}/userAddToDb`;
    const getTokenUrl = `${api}/getToken`;
    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';



    const handleSignUp = data => {

        if (data.image) {
            const imgBbKey = process.env.REACT_APP_imgbb_Key;
            const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
            const image = data.image[0];

            // Using FormData for image input
            const formData = new FormData()
            formData.append('image', image)

            // Get image url from imagebb
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    const imageURL = imageData?.data?.url;
                    data.image = imageURL;
                    const { email, password, name, image, userRole } = data;

                    // Create User Account
                    createUser(email, password)
                        .then(result => {
                            setSignUpError("")
                            const userInfo = {
                                displayName: name,
                                photoURL: image
                            }

                            // Update User Info
                            updateUser(userInfo)
                                .then(result => {
                                    setSignUpError("")
                                    const userData = {
                                        email, name, image, userRole
                                    }

                                    // User Add To Database
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
                                                            navigate("/");

                                                        } else {
                                                            toast.error(result.message)
                                                        }
                                                    })
                                            }
                                        })


                                })
                                .catch(error => {
                                    setLoading(false)
                                    console.log(error)
                                    setSignUpError(error.message)
                                })
                        })
                        .catch(error => {
                            setLoading(false)
                            setSignUpError(error.message)
                        })

                })
        }

    }


    if (loading) {
        return <Loading></Loading>
    }

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

                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name :</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                                <label className="label">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>

                            <div className="form-control">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Password :</span>
                                    </label>
                                    <input {...register("password",
                                        {
                                            required: "Password is Required",
                                            minLength: { value: 6, message: "Password must be 6 characters long" },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}

                                        type="password" name='password' placeholder="Enter password" className="input input-bordered w-full" />

                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>


                                <div className='my-4'>
                                    <fieldset className='input input-bordered mt-2'>

                                        <legend>Select a Role:</legend>

                                        <div className='flex justify-evenly items-center'>
                                            <div>
                                                <input {...register("userRole", { required: "must be select one" })} className='mx-2' type="radio" id="buyer" name="userRole" value="buyer" />
                                                <label htmlFor="buyer">Buyer</label>
                                            </div>

                                            <div>
                                                <input {...register("userRole", { required: true })} className='mx-2' type="radio" id="seller" name="userRole" value="seller" />
                                                <label htmlFor="seller">Seller</label>
                                            </div>
                                        </div>
                                        {errors.userRole && <p className='text-red-500'>{errors.userRole.message}</p>}

                                    </fieldset>
                                </div>


                                <div>
                                    <label name="image" value={false} className="label">
                                        <span className="label-text">Photo Upload :</span>
                                    </label>
                                    <input {...register("image", { required: "photo is required" })} type="file" name='image' className="input input-bordered w-full" />

                                    {errors.image && <p className='text-red-500 '>{errors.image.message}</p>}
                                </div>

                                <label className="label">
                                    <small>Have an account ? Please go to <Link to={"/login"}><span className='text-blue-500'>Log in</span></Link></small>
                                </label>
                            </div>

                            <div>
                                <p className='text-red-400 text-center'>{signUpError}</p>
                            </div>

                            <div className="form-control mt-6">
                                <input className='btn btn-primary w-full' value="Sign Up" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;