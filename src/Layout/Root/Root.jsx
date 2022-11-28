import React, { useContext, useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { AppContext } from '../../App';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const Root = () => {
    const data = useLoaderData()
    const { setApi, setDbUser, setCategories } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const api = process.env.REACT_APP_db_url;
    setApi(api)
    setCategories(data)



    useEffect(() => {
        fetch(`${api}/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setDbUser(data?.data)
                }
            })
    }, [api, email, setDbUser])




    return (
        <div>
            <Navbar></Navbar>
            <div style={{ minHeight: "75vh" }}>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;