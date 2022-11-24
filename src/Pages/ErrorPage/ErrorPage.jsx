import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../Assets/error.png';



const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen my-auto'>
            <div className='text-center'>
                <img src={errorImage} alt="errorImage" className='w-3/5 rounded-md mx-auto' />
                <p>This Route is not found , status 404 .</p>
                <p>
                    Please Back to <Link to={"/"}> <button className='btn btn-xs'>Home</button> </Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;