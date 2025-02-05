import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <h2></h2>
            },
            {

            }
        ]
    },
    {
        path: '*',
        element: <h1>404 - Page Not Found</h1>
    }
]);

export default router;