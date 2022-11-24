import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Root from "../../Layout/Root/Root";
import Advertisement from "../../Pages/Advertisement/Advertisement";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import AddAdmin from "../../Pages/Dashboard/Admin/Add Admin/AddAdmin";
import AddCategory from "../../Pages/Dashboard/Admin/Add Category/AddCategory";
import AllBuyers from "../../Pages/Dashboard/Admin/All Buyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/All Sellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/Buyer/My Orders/MyOrders";
import MyWishes from "../../Pages/Dashboard/Buyer/My Wishes/MyWishes";
import Welcome from "../../Pages/Dashboard/Components/Welcome/Welcome";
import AddProducts from "../../Pages/Dashboard/Seller/Add Products/AddProducts";
import MyProducts from "../../Pages/Dashboard/Seller/My Products/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/categories",
                element: <Categories></Categories>
            },
            {
                path: "/advertisement",
                element: <Advertisement></Advertisement>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Welcome></Welcome>
            },
            {
                path: "/dashboard/myOrders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/myWishes",
                element: <MyWishes></MyWishes>
            },
            {
                path: "/dashboard/myProducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/dashboard/addProducts",
                element: <AddProducts></AddProducts>
            },
            {
                path: "/dashboard/allBuyers",
                element: <AllBuyers></AllBuyers>
            },
            {
                path: "/dashboard/allSellers",
                element: <AllSellers></AllSellers>
            },
            {
                path: "/dashboard/addCategory",
                element: <AddCategory></AddCategory>
            },
            {
                path: "/dashboard/addAdmin",
                element: <AddAdmin></AddAdmin>
            },
        ]

    }
])

export default router;