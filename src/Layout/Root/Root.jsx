import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { AppContext } from '../../App';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const Root = () => {
    const { setCategories } = useContext(AppContext);
    const data = useLoaderData()
    // console.log(data)
    setCategories(data)

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