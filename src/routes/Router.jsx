import ProductDetails from "../components/ProductDetails";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../Layout/Home";
import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allEquipment',
                element: <h2></h2>
            },
            {
                path: '/addEquipment',
                element: <h2></h2>
            },
            {
                path: '/equipmentList',
                element: <h2></h2>
            },

        ]
    },
    {
        path: '/products/:id',
        element: <ProductDetails></ProductDetails>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ],
    },
    {
        path: '*',
        element: <h1>404 - Page Not Found</h1>
    }
]);

export default router;