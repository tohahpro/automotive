import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Layout/UserLogin/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Layout/UserLogin/Register/Register";

const CreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default CreateRouter;