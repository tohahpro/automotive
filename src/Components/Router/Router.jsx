import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


import MyCart from "../Pages/MyCart";
import Login from "../Layout/UserLogin/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Layout/UserLogin/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Brands/Products";
import ProductsDetails from "../Brands/ProductsDetails";


const CreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

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
            },
            {
                path: '/products/:brand_name',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/productsDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: () => fetch('http://localhost:5000/products')
            }

        ]
    }
]);

export default CreateRouter;