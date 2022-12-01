import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Root from "../../Layout/Root/Root";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories/Categories";
import AddAdmin from "../../Pages/Dashboard/Admin/Add Admin/AddAdmin";
import AddCategory from "../../Pages/Dashboard/Admin/Add Category/AddCategory";
import AllBuyers from "../../Pages/Dashboard/Admin/All Buyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/All Sellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/Buyer/My Orders/MyOrders";
import MyWishes from "../../Pages/Dashboard/Buyer/My Wishes/MyWishes";
import Payment from "../../Pages/Dashboard/Buyer/Payment/Payment";
import Welcome from "../../Pages/Dashboard/Components/Welcome/Welcome";
import AddProducts from "../../Pages/Dashboard/Seller/Add Products/AddProducts";
import MyProducts from "../../Pages/Dashboard/Seller/My Products/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";
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
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: async ({ params }) => await fetch(`${api}/category/${params.id}`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    }
                })
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
                element: <PrivateRoutes>
                    <Welcome></Welcome>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/myOrders",
                element: <PrivateRoutes>
                    <BuyerRoute>
                        <MyOrders></MyOrders>
                    </BuyerRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/myWishes",
                element: <PrivateRoutes>
                    <BuyerRoute>
                        <MyWishes></MyWishes>
                    </BuyerRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/myProducts",
                element: <PrivateRoutes>
                    <SellerRoute>
                        <MyProducts></MyProducts>
                    </SellerRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/addProducts",
                element: <PrivateRoutes>
                    <SellerRoute>
                        <AddProducts></AddProducts>
                    </SellerRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/allBuyers",
                element: <PrivateRoutes>
                    <AdminRoute>
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/allSellers",
                element: <PrivateRoutes>
                    <AdminRoute>
                        <AllSellers></AllSellers>
                    </AdminRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/addCategory",
                element: <PrivateRoutes>
                    <AdminRoute>
                        <AddCategory></AddCategory>
                    </AdminRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/addAdmin",
                element: <PrivateRoutes>
                    <AdminRoute>
                        <AddAdmin></AddAdmin>
                    </AdminRoute>
                </PrivateRoutes>
            },
            {
                path: "/dashboard/payment/:id",
                element: <PrivateRoutes>
                    <BuyerRoute>
                        <Payment></Payment>
                    </BuyerRoute>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`${api}/dashboard/payment/${params.id}`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    }
                })
            }
        ]

    }
])

export default router;