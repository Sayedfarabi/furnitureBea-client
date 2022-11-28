import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Root from "../../Layout/Root/Root";
import Advertisement from "../../Pages/Advertisement/Advertisement";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories/Categories";
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
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
const api = process.env.REACT_APP_db_url;



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`${api}/allCategories`),
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
                path: "/category/:id",
                element: <Products></Products>,
                // loader: ({ params }) => fetch(`${api}/category/${params.id}`)

            },
            {
                path: "/advertisement",
                element: <PrivateRoutes><Advertisement></Advertisement></PrivateRoutes>
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
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoutes><Welcome></Welcome></PrivateRoutes>
            },
            {
                path: "/dashboard/myOrders",
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },
            {
                path: "/dashboard/myWishes",
                element: <PrivateRoutes><MyWishes></MyWishes></PrivateRoutes>
            },
            {
                path: "/dashboard/myProducts",
                element: <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
            },
            {
                path: "/dashboard/addProducts",
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: "/dashboard/allBuyers",
                element: <PrivateRoutes><AllBuyers></AllBuyers></PrivateRoutes>
            },
            {
                path: "/dashboard/allSellers",
                element: <PrivateRoutes><AllSellers></AllSellers></PrivateRoutes>
            },
            {
                path: "/dashboard/addCategory",
                element: <PrivateRoutes><AddCategory></AddCategory></PrivateRoutes>
            },
            {
                path: "/dashboard/addAdmin",
                element: <PrivateRoutes><AddAdmin></AddAdmin></PrivateRoutes>
            },
        ]

    }
])

export default router;