import Home from "../Layout/Home";
import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";

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
        path: '*',
        element: <h1>404 - Page Not Found</h1>
    }
]);

export default router;