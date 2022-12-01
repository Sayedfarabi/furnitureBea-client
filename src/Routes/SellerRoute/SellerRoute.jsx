import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { DashboardContext } from '../../Layout/DashboardLayout/DashboardLayout';

const SellerRoute = ({ children }) => {
    const { dashboardDbUser } = useContext(DashboardContext);
    const { loading, user } = useContext(AuthContext);



    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    if (user) {
        if (dashboardDbUser?.userRole === "seller") {
            toast.success("Welcome to your dashboard");
            return children;
        }
    }

    return <Navigate to="/" ></Navigate>;
};

export default SellerRoute;