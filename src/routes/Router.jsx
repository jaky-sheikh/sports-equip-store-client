import ProductDetails from "../components/ProductDetails";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../Layout/Home";
import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllEquipment from "../components/AllEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipmentList from "../Pages/MyEquipmentList";
import UpdateEquipment from "../Pages/UpdateEquipment";



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
                element: <AllEquipment></AllEquipment>
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path: '/myEquipmentList',
                element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>

            },
            {
                path: '/updateEquipment/:id',
                element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
            },
        ]
    },
    {
        path: '/products/:id',
        element: <PrivateRoute>
            <ProductDetails></ProductDetails>
        </PrivateRoute>
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