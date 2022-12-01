import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { DashboardContext } from '../../Layout/DashboardLayout/DashboardLayout';

const AdminRoute = ({ children }) => {
    const { dashboardDbUser } = useContext(DashboardContext);
    const { loading, user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();


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


    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    if (user) {
        if (dashboardDbUser?.userRole === "admin") {
            toast.success("Welcome to admin dashboard")
            return children;
        }
    }




    return (
        <>
            {
                handleLogOut()
            }
        </>
    );

};

export default AdminRoute;