import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Layout/UserLogin/Login/Login";
import Home from "../Pages/Home/Home";

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
            }
        ]
    }
]);

export default CreateRouter;