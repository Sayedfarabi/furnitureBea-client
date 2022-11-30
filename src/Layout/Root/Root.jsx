import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { AppContext } from '../../App';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const Root = () => {
    const categories = useLoaderData()
    const { setCategories, setDbUser } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const api = process.env.REACT_APP_db_url;
    setCategories(categories)


    const { data: databaseUser = {}, isLoading } = useQuery({
        queryKey: [email, api],
        queryFn: async () => {
            try {
                const res = await fetch(`${api}/user?email=${email}`);
                const data = res.json();
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const dbUser = databaseUser?.data;
    setDbUser(dbUser)


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